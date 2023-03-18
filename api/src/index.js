const express = require("express");
require("express-async-errors")

const app = express();

const port = 3001;

const routes = require("./routes");



app.use(express.json())
app.use(routes);

//Error Handler
app.use((error, req, res, next) => {
  console.log('########## Error Handler ##########')
  console.log(error)
  res.sendStatus(500)
})

app.listen(port, () => {
  console.log(`😜 Server is listening on: http://localhost:${port}.`);
});
