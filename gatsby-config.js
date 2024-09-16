/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Cean and Evelyn`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "@lee-wfaa/gatsby-plugin-password-protect",
      options: {
        enabled: true,
        password: "haru<3",
        publicKey:
          "MO|-#l 2#4v%q^&-IHgA0,,aWF-sWYA{!/=jR]3{>SlX90Z-4SQ,F2xyX7<%X,/+",
        loginHeading: "Please enter the password for this site:",
      },
    },
  ],
};
