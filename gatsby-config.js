module.exports = {
  plugins: [
    `gatsby-transformer-remark`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: "Barbatos",
    description: "Demo portfolio",
    copyright:
      "Copyright 2022 All Rights Reserved | Website Designed by Darshan Chobarakar",
    contact: "dchobarkar@gmail.com",
  },
}
