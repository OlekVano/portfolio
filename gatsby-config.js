module.exports = {
  siteMetadata: {
    siteUrl: `https://olekvano.netlify.app`,
    title: 'Oleksiy Vano\'s portfolio',
    author: 'Oleksiy Vano',
    description: 'Oleksiy Vano\'s portfolio website',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Oleksiy Vano's Portfolio`,
        short_name: `Oleksiy Vano's Portfolio`,
        description: `I am Oleksiy Vano, a 16-year-old self-taught developer of Ukrainian origin.\nI started learning programming by myself when I was 14 years old out of curiosity and I fell in love with it.\nI speak 4 languages: Ukrainian, Russian, English and Portuguese.`,
        lang: `en`,
        icon: `src/images/icon-3.png`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#fff`,
      },
    }
  ],
}
