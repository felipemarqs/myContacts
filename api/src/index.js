//IMPORTAÇÕES//


//Express
const express = require("express");

//Middlewares
const errorHandler = require("./app/middlewares/errorHandler");
const cors = require("./app/middlewares/cors");


//Iniciando o express
const app = express();

//Definindo a porta
const port = 3001;

//Importando as rotas
const routes = require("./routes");

//Usando o express.json
app.use(express.json());
//CORS
app.use(cors);
//Routes
app.use(routes);
//Error Handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`😜 Server is listening on: http://localhost:${port}.`);
});
