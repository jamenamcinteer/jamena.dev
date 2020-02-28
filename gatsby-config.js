module.exports = {
  siteMetadata: {
    title: `jamena.dev`,
    description: `Hello, I'm Jamena McInteer. I’m a full stack developer and UI/UX designer from Austin, TX. I like to build beautiful things that make a difference.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `pzup941z9qmd`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        accessToken: '26e4a3544a46ed09a40332a7f4b0e0cc34b8ddea68905f3e40fddeafc5ac4f72'
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#DEBDC2`,
        theme_color: `#DEBDC2`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat`, `IBM Plex Sans`],
        display: "swap",
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseUrl: `jamena.home.blog`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: true,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false,
        // auth: {
        //   wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
        //   wpcom_app_clientId: "54793",
        //   wpcom_user: "ndjamenamarmon@gmail.com",
        //   wpcom_pass: process.env.WORDPRESS_PASSWORD,
        // }
      }
    },
    {
      resolve: "gatsby-source-dev",
      options: {
        // This is your username on Dev.to
        username: 'jamenamcinteer'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
