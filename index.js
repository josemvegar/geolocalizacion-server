const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 3000; // Puedes usar otro puerto si lo prefieres

app.use(cors());
app.use(bodyParser.json());

app.post("/api/ubicacion", (req, res) => {
  const { latitude, longitude, timestamp } = req.body;
  console.log("📍 Ubicación recibida:");
  console.log(`Latitud: ${latitude}`);
  console.log(`Longitud: ${longitude}`);
  console.log(`Timestamp: ${timestamp}`);

  // Aquí podrías guardar en una base de datos, o reenviarlo por webhook
  res.status(200).json({ mensaje: "Ubicación almacenada correctamente" });
});

app.listen(PORT, () => {
  console.log(`🌍 Servidor de geolocalización activo en el puerto ${PORT}`);
});
