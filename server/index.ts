// Cargamos las dependencias usando CommonJS
const express = require("express");       // Framework web para Node
const nodemailer = require("nodemailer"); // Para enviar correos
const cors = require("cors");             // Para permitir requests desde otro origen (frontend)
const bodyParser = require("body-parser");// Para poder leer JSON en las requests
const dotenv = require("dotenv");         // Para leer variables de entorno desde .env

dotenv.config(); // Cargamos las variables de entorno (EMAIL_USER, EMAIL_PASS, etc.)

const app = express();
const PORT = process.env.PORT || 5000; // Puerto donde correrá el backend

// --------------------- MIDDLEWARES ---------------------
// Permitir peticiones desde cualquier origen (CORS)
app.use(cors());

// Permitir recibir datos en formato JSON en el body de las requests
app.use(bodyParser.json());

// --------------------- RUTAS ---------------------

// Ruta POST para enviar el correo desde el formulario del frontend
app.post("/send-email", async (req, res) => {
  // Extraemos los datos enviados desde el formulario
  const { name, email, message } = req.body;

  try {
    // Configuración del transporte de correo usando Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Tu correo de Gmail
        pass: process.env.EMAIL_PASS, // App Password de Gmail
      },
    });

    // Opciones del correo a enviar
    const mailOptions = {
      from: email,                   // Quien envía (el visitante)
      to: process.env.EMAIL_USER,    // Tu correo (donde quieres recibirlo)
      subject: `Nuevo mensaje de ${name}`, // Asunto del correo
      text: message,                 // Cuerpo del correo
    };

    // Enviamos el correo
    await transporter.sendMail(mailOptions);

    // Respondemos al frontend que todo salió bien
    res.status(200).json({ success: true, message: "Correo enviado correctamente ✅" });
  } catch (error) {
    // Si hay error, lo mostramos en consola y devolvemos respuesta de fallo
    console.error("Error enviando correo:", error);
    res.status(500).json({ success: false, message: "Error al enviar el correo ❌" });
  }
});

// --------------------- SERVIDOR ---------------------
// Levantamos el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
