const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
});

module.exports = withMDX({
    // `true` will transform `/about` to `/about/index.html`
    trailingSlash: true,
    pageExtensions: ['js', 'jsx', 'tsx', 'mdx'],
});
