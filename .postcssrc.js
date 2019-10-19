const production = {
  plugins: [
    require("autoprefixer"),
    require("postcss-nested"),
    require("postcss-uncss")({
      html: ["./index.html"]
    })
  ]
};

const dev = {
  plugins: [require("autoprefixer"), require("postcss-nested")]
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
