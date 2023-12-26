const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");

const MainPage = require("../views/pages/MainPage");

// router.get("/", (req, res) => {
//   renderTemplate(MainPage, {}, req, res);
// });

module.exports = router;
