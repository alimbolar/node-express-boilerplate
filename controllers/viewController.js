const viewController = {};
const { resolveSoa } = require("dns");
const url = require("url");
const fetch = require("node-fetch");

viewController.showHome = function (req, res) {
  res.render("home");
};

viewController.showPage = function (req, res) {
  const existingPages = ["home", "contact"];

  console.log(req.params);

  if (existingPages.includes(req.params.path)) res.render(req.params.path);
  else res.send("Sorry URL does not exist");
  const trimmedPath = url
    .parse(req.url, true)
    .pathname.replace(/^\/+|\/+$/g, "");
  res.render(trimmedPath);
};

viewController.showShop = function (req, res) {
  fetch("https://www.rkumar.in/wp-json/wc/store/products")
    .then((response) => response.json())
    .then((data) => {
      res.render("shop", { products: data });
    });
};

module.exports = viewController;
