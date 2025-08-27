// --------------------- DEPENDENCIAS ---------------------
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// Cargamos variables de entorno (.env)
dotenv.config();

// --------------------- APP ---------------------
const app = express();
const PORT = process.env.PORT || 5000;

// --------------------- CORS (simple y seguro) ---------------------
// Usa coincidencia EXACTA, en minúsculas y con esquema.
const allowedOrigins = new Set([
  "https://adyavp.github.io",      // producción (GitHub Pages)
  "http://localhost:5173",         // dev Vite
  "http://localhost:3000",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:3000",
]);

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && allowedOrigins.has(String(origin).toLowerCase())) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  // Importante: permitir credenciales SOLO si usas cookies (aquí no)
  // res.setHeader("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") return res.sendStatus(204); // preflight OK
  next();
});

// No dupliques CORS con app.use(cors()) si ya lo manejas arriba.
// (Si te hace falta para Postman sin Origin, puedes dejarlo, pero sobra.)

// Parseo JSON
app.use(bodyParser.json());

// --------------------- HEALTHCHECK ---------------------
app.get("/health", (_req, res) => {
  res.status(200).json({ ok: true, time: new Date().toISOString() });
});

// --------------------- PRE-OPCIONES ESPECÍFICAS (opcional) ---------------------
// Algunos proxies/navegadores agradecen la ruta explícita
app.options("/api/contact", (_req, res) => res.sendStatus(204));

// --------------------- RUTA PRINCIPAL ---------------------
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};
  console.log("[/api/contact] payload:", { name, email, hasMessage: !!message });

  // 1) Responder INMEDIATO para que el navegador NO corte por timeout/red móvil
  //    Si todo está bien de red/CORS, el móvil DEBE recibir este JSON.
  res.status(200).json({ success: true, message: "Recibido. Enviando en segundo plano..." });

  // 2) Enviar correo en segundo plano (no bloquea la respuesta)
  setImmediate(async () => {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS, // usa App Password de Gmail si tienes 2FA
        },
      });

      const mailOptions = {
        from: `"Portafolio Web" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email || process.env.EMAIL_USER,
        subject: `Nuevo mensaje de ${name || "Contacto"}`,
        text: message || "",
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("[/api/contact] Mail sent:", info?.messageId || "ok");
    } catch (error) {
      // Aunque el envío falle, el cliente ya recibió 200; dejamos log para revisar en Render
      console.error("[/api/contact] Error enviando correo:", error);
    }
  });
});

// --------------------- SERVIDOR ---------------------
app.listen(PORT, () => {
  console.log(`Servidor corriendo en Render en el puerto ${PORT}`);
});
