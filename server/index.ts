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
// CORS dinámico: reflejamos el origin si coincide con la lista permitida
const allowedHosts = [
  "adyavp.github.io",
  "adyavp.github.io/", // por si acaso
  "localhost",
  "127.0.0.1"
];

app.use(cors({
  origin: function (origin, callback) {
    // Si no hay origin (p.ej. requests desde curl o servidores), permitirlo
    if (!origin) return callback(null, true);

    // Comparamos en minúsculas para evitar problemas de mayúsculas/minúsculas
    const originLower = origin.toLowerCase();

    // Si el origin contiene alguno de los hosts permitidos, permitirlo
    const allowed = allowedHosts.some(h => originLower.includes(h));
    if (allowed) {
      // callback(null, true) hará que cors refleje exactamente el origin recibido
      return callback(null, true);
    }

    // Si no está permitido, devolver error (se puede ajustar según necesites)
    return callback(new Error("Not allowed by CORS"));
  }
}));

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

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Nuevo mensaje de ${name}`,
      text: message,
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
