const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const generoRoutes = require("./routes/generoRoutes");
const directorRoutes = require("./routes/directorRoutes");
const productoraRoutes = require("./routes/productoraRoutes");
const tipoRoutes = require("./routes/tipoRoutes");
const mediaRoutes = require("./routes/mediaRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 CONEXIÓN 
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Conectado a MongoDB"))
.catch(err => console.log(err));

app.use("/api/generos", generoRoutes);
app.use("/api/directores", directorRoutes);
app.use("/api/productoras", productoraRoutes);
app.use("/api/tipos", tipoRoutes);
app.use("/api/media", mediaRoutes);

app.get("/", (req, res) => {
  res.send("API de Películas funcionando");
});

// 🔥 PUERTO
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});