const express = require("express");
const conectarDB = require("./config/database");
const cors = require("cors");

//creo el servidor
const app = express();
//conceto con la db
conectarDB();
//habilito cors
app.use(cors());
//hanilitar express.json
app.use(express.json({ extended: true }));

const port = process.env.PORT || 4000;
//importo las rutas
app.use("/api", require("./routes/hello"));
app.use("/api/users", require("./routes/usurios"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/proyect", require("./routes/proyecto"));
app.use("/api/task", require("./routes/task"));

//inicio del servidor
app.listen(port, "0.0.0.0", () => {
  console.log("desde el servidor, en el puerto:", port);
});
