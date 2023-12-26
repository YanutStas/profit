const router = require("express").Router();
const bcrypt = require("bcryptjs");

const { User } = require("../../db/models");

router.post("/reg", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashPassword = bcrypt.hashSync(password, 7);
    const user = await User.create({ username, email, password: hashPassword });
    req.session.user = {
      id: user.id,
      username: user.username,
      email: user.email,
    };
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .send({
        error:
          "Ошибка регистрации. Возможно, такой пользователь уже существует.",
      });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (user) {
      const passwordCorrect = await bcrypt.compare(password, user.password);
      if (passwordCorrect) {
        req.session.user = {
          id: user.id,
          username: user.username,
          email: user.email,
        };
        res.redirect("/");
      } else {
        res.status(401).json({ error: "Неверный пароль" });
      }
    } else {
      res.status(401).json({ error: "Пользователь с таким email не найден" });
    }
  } catch (error) {
    console.error("Ошибка при попытке входа", error);
    res.status(500).json({ error: "Внутренняя ошибка сервера" });
  }
});

//Роутер логаута в этом роутере как-то лучше смотрится
router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.clearCookie("Exam");
      res.redirect("/");
    }
  });
});

module.exports = router;
