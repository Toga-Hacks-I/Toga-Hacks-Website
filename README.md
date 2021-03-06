
[![Netlify Status](https://api.netlify.com/api/v1/badges/8edb03de-d0aa-4f56-8ba2-88093ac6a458/deploy-status)](https://app.netlify.com/sites/togahacks/deploys)

# TogaHacks-I

TogaHacks I Hackathon 2020 website

# Want to contribute?

First of all, thank you so much for your help 🙂! Please see our [code of conduct](https://github.com/Toga-Hacks-I/Toga-Hacks-Website/blob/master/CODE_OF_CONDUCT.md), [create a GitHub issue](https://github.com/Toga-Hacks-I/Toga-Hacks-Website/issues/new/choose) of what you're planning to fix/add, and have it approved by one of our contributors. Then, feel free to [make a PR](https://github.com/Toga-Hacks-I/Toga-Hacks-Website/compare)!

# Recommended environment

1. Download [VSCode](https://code.visualstudio.com/download)
2. Get the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), and [Stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint) extensions

# Usage

To set up:

0. Download the latest git and LTS of Node.js from [here](https://git-scm.com/downloads) and [here](https://nodejs.org/en/download/), respectively. Also, install git-lfs (instructions [here](https://help.github.com/en/github/managing-large-files/installing-git-large-file-storage)).
1. `git clone https://github.com/Toga-Hacks-I/Toga-Hacks-Website.git`
2. `cd Toga-Hacks-Website`
3. `npm i`

To run the live server:

1. `npm run dev`

To deploy to the `dist` folder:

1. `npm run build`

# Known Issues

~~While running the live server, sometimes, none of the Cloudinary images render (although they always do in the production build). If they don't render, just run `$.cloudinary.responsive()` in the console and that should fix it (until you refresh).~~ This issue has been resolved. If this still occurs, simply commit your uncommitted changes, delete the project, re-clone the repo, and run `npm i`

# Credits

Special thanks to Netlify for offering us free Pro-tier static site hosting and BootstrapMade for letting us use their theme.
<br>
<br>
<span>
  <a href="https://www.netlify.com">
    <img src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"/>
  </a>
</span>
<a href="https://bootstrapmade.com/">
  <img src="https://pbs.twimg.com/profile_images/1030105854593392640/TwdUzVQh_400x400.jpg" height="51" hspace="13"/>
</a>
