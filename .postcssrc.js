const production = {
  plugins: [
    require("autoprefixer")({
      flexbox: "no-2009"
    }),
    require("postcss-nested"),
    require("postcss-uncss")({
      html: ["./index.html"],
      ignore: ["#mobile-nav-toggle", ".header-scrolled"]
    })
  ]
};

const dev = {
  plugins: [
    require("autoprefixer")({
      flexbox: "no-2009"
    }),
    require("postcss-nested")
  ]
};

const config = {
  production,
  dev
};

if (process.env.NODE_ENV === "production") {
  module.exports = config["production"];
} else {
  module.exports = config["dev"];
}
