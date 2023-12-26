const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const isAuth = require("../middleweare/isAuth");

const { Lot } = require("../../db/models");

const MainPage = require("../views/pages/MainPage");
const AccountPage = require("../views/pages/AccountPage");
const FormLot = require("../views/pages/FormLot");
const FormEditLot = require("../views/components/FormEditLot");
const OneLotPage = require("../views/pages/OneLotPage");
const RegPage = require("../views/pages/RegPage");
const LoginPage = require("../views/pages/LoginPage");

router.get("/", (req, res) => {
  renderTemplate(MainPage, {}, req, res);
});

router.get("/reg", (req, res) => {
  renderTemplate(RegPage, null, req, res);
});

router.get("/login", (req, res) => {
  renderTemplate(LoginPage, null, req, res);
});

router.get("/account", async (req, res) => {
  const lot = await Lot.findAll();
  const lotData = lot.map((d) => d.get({ plain: true }));
  const { employee } = req.session;
  renderTemplate(AccountPage, { employee, lotData }, req, res);
});

router.get("/bidding", (req, res) => {
  renderTemplate(FormLot, {}, req, res);
});

router.get("/account/:id/edit", isAuth, async (req, res) => {
  try {
    const { user } = req.session;
    const lot = (await Lot.findByPk(req.params.id)).get();
    renderTemplate(FormEditLot, { lot, user }, req, res);
  } catch (e) {
    console.error(e);
    res.redirect("/404");
  }
});

router.get("/account/:id/about", async (req, res) => {
  try {
    const { id } = req.params;
    const lot = await Lot.findByPk(id);
    if (!lot) {
      return res.redirect("/404");
    }
    const lotData = lot.get({ plain: true });
    renderTemplate(OneLotPage, { lotData }, req, res);
  } catch (e) {
    console.error(e);
    res.redirect("/404");
  }
});

module.exports = router;
