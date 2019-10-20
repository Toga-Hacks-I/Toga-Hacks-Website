module.exports = {
  plugins: [
    require("autoprefixer")({
      flexbox: "no-2009"
    }),
    require("postcss-nested"),
    require("postcss-uncss")({
      html: ["./index.html"],
      ignore: [
        ".mobile-nav-active",
        ".menu-item-active",
        ".fa-chevron-down",
        ".fa-chevron-down",
        ".menu-has-children",
        "#mobile-body-overly",
        ".fa-bars",
        "#mobile-nav",
        "#mobile-nav-toggle",
        ".header-scrolled",
        ".header-fixed"
      ]
    })
  ]
};
