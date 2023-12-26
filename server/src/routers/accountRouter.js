const router = require("express").Router();

const isAuth = require("../middleweare/isAuth");

const { Lot } = require("../../db/models");

router.post("/bidding", async (req, res) => {
  const { title, description, startDate, endDate, user_id } = req.body;
  const newLot = await Lot.create({
    title,
    description,
    startDate,
    endDate,
    user_id,
  });
  const lotData = newLot.get({ plain: true });
  res.sendStatus(200);
});

router.delete("/account/:id", isAuth, async (req, res) => {
  const { user } = req.session;
  try {
    const targetLot = await Lot.findByPk(req.params.id);

    if (targetLot.user_id === user.id) {
      await targetLot.destroy();
      res.sendStatus(200);
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

router.put("/account/:id/edit", isAuth, async (req, res) => {
  const { title, description, startDate, endDate, user_id } = req.body;
  const { user } = req.session;
  try {
    const targetLot = await Lot.findByPk(req.params.id);
    if (user.id === targetLot.user_id) {
      targetLot.update({
        title,
        description,
        startDate,
        endDate,
        user_id,
      });
      targetLot.save();
      res.end();
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

module.exports = router;
