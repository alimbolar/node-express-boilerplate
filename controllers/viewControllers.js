const viewController = {};
const url = require("url");

viewController.showHome = function (req, res) {
  res.render("home");
};

viewController.showPage = function (req, res) {
  const trimmedPath = url
    .parse(req.url, true)
    .pathname.replace(/^\/+|\/+$/g, "");

  res.render(trimmedPath);
};

module.exports = viewController;
