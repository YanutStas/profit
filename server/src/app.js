require("dotenv").config();
require("@babel/register");
const express = require("express");
const morgan = require("morgan");
const path = require("path");

const expressSession = require("express-session");
const FileStore = require("session-file-store")(expressSession);

const indexRouter = require("./routers/indexRouter");
const userRouter = require("./routers/userRouter");
const accountRouter = require("./routers/accountRouter");
const viewsRouter = require('./routers/viewsRouter')

const app = express();
const { PORT } = process.env;

const sessionConfig = {
  name: "Exam",
  store: new FileStore(),
  secret: process.env.SECRET_KEY_SESSION,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 10 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(process.cwd(), "public")));
app.use(expressSession(sessionConfig));

app.use("/", indexRouter);
app.use("/", userRouter);
app.use("/", accountRouter);
app.use("/", viewsRouter);

app.get("*", (request, response) => {
  response.send("Такой странички не существует, что, конечно, обидно, но что же тут поделать");
});

app.listen(PORT, () => {
  console.log(`Зашли и вышли,приключение на ${PORT} порту`);
});
