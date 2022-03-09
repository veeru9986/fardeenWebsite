const path = require(`path`);
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Dream Health",
    titleTemplate: "Dream Health",
    description: "Dream Health",
    image: "/Icon.svg",
    siteUrl: "https://dreamhealth.netlify.app",
    author: "veeresh",
    authorSite: "",
    twitterUsername: "@dreamhealth",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Dream Health`,
        short_name: `Dream Health`,
        description: `Dream Health`,
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL,
        queryLimit: 1000, // Defaults to 100
        singleTypes: [
          {
            name: `home`,
            endpoint: `api/home?populate=deep`,
          },
          {
            name: `navbar`,
            endpoint: `api/navbar?populate=deep`,
          },
          {
            name: `footer`,
            endpoint: `api/footer?populate=deep`,
          },
          {
            name: `service`,
            endpoint: `api/service?populate=deep`,
          },
          {
            name: `signin`,
            endpoint: `api/signin?populate=deep`,
          },
          {
            name: `signup`,
            endpoint: `api/signup?populate=deep`,
          },
          {
            name: `about`,
            endpoint: `api/about?populate=deep`,
          },
        ],
        collectionTypes: [
          {
            name: `test-pages`,
            endpoint: `api/test-pages?populate=deep`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
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
  ],
};
