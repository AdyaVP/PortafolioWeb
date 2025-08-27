// --------------------- DEPENDENCIAS ---------------------
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// Cargamos las variables de entorno
dotenv.config();

// --------------------- CONFIGURACIÓN DEL SERVIDOR ---------------------
const app = express();
const PORT = process.env.PORT || 5000;

// --------------------- MIDDLEWARES ---------------------
// ✅ Lista estricta de orígenes permitidos (con esquema, todo en minúsculas)
const allowedOrigins = new Set([
  "https://adyavp.github.io", // GitHub Pages (usuario)
  "http://localhost:3000",
  "http://localhost:5173",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:5173",
]);

// ⚠️ Importante: CORS exige coincidencia EXACTA de cadena
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && allowedOrigins.has(String(origin).toLowerCase())) {
    // Refleja exactamente el origin que llega
    res.setHeader("Access-Control-Allow-Origin", origin);
    // Ayuda a caches/proxies a variar por Origin
    res.setHeader("Vary", "Origin");
  }
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  // Si usas cookies entre dominios, activa también:
  // res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204); // Preflight OK
  }
  next();
});

// (Opcional) Si prefieres usar la librería cors además del bloque anterior,
// puedes dejar este cors() simple para casos sin Origin (Postman, etc.)
app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true);
      const ok = allowedOrigins.has(String(origin).toLowerCase());
      return ok ? cb(null, true) : cb(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    // credentials: true, // solo si usas cookies
  })
);

// Parseo JSON
app.use(bodyParser.json());

// --------------------- RUTAS ---------------------
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Gmail suele rechazar "from" que no coincide con la cuenta autenticada.
    // Usa tu propia cuenta en "from" y pon al usuario en "replyTo".
    const mailOptions = {
      from: `"Portafolio Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email || process.env.EMAIL_USER,
      subject: `Nuevo mensaje de ${name || "Contacto"}`,
      text: message || "",
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error enviando correo:", error);
    res.status(500).json({ success: false, message: "Error al enviar el correo" });
  }
});

// --------------------- LEVANTAR SERVIDOR ---------------------
app.listen(PORT, () => {
  console.log(`Servidor corriendo en Render en el puerto ${PORT}`);
});
