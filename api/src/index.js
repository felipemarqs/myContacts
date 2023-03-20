const express = require("express");

const errorHandler = require("./app/middlewares/errorHandler");
const cors = require("./app/middlewares/cors");

const app = express();

const port = 3001;

const routes = require("./routes");

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
