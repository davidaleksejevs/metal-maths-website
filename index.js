//defining stuff idk?
const express = require("express");
const app = express();
const port = 3000;
// random shit that has nothing to do with the routes
app.set("view engine", "ejs");
app.use(express.static("public"));
//in here is functions that i will use

function randNum(digits) {
  const num = Math.floor(Math.random() * digits);
  return num;
}
//
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/practice", (req, res) => {
  const num1 = randNum(100);
  const num2 = randNum(100);
  res.render("practice", { num1, num2 });
});

const userRouter = require("./routes/users");
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
