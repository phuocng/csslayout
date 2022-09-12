const fs = require('fs');
const markdownIt = require('markdown-it');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const htmlmin = require('html-minifier');

module.exports = function(eleventyConfig) {
    // Copy the `img` and `css` folders to the output
    eleventyConfig.addPassthroughCopy('assets');

    eleventyConfig.addPlugin(syntaxHighlight);

    let markdownLibrary = markdownIt({
        html: true,
        linkify: true
    });
    eleventyConfig.setLibrary('md', markdownLibrary);

    // Get the first `n` elements of a collection.
    eleventyConfig.addFilter("head", (array, n) => {
        if (!Array.isArray(array) || array.length === 0) {
            return [];
        }
        return (n < 0) ? array.slice(n) : array.slice(0, n);
    });

    eleventyConfig.addCollection('sortByTitle', function(collectionApi) {
        return collectionApi.getAll()
            .filter(function(item) {
                let extension = item.inputPath.split('.').pop();
                return extension === 'md';
            })
            .sort(function(a, b) {
                return a.data.title - b.data.title;
            });
    });

    eleventyConfig.addCollection('categories', function(collectionApi) {
        const categories = [];
        collectionApi.getAll()
            .filter(function(item) {
                let extension = item.inputPath.split('.').pop();
                return extension === 'md';
            })
            .forEach((item) => {
                const category = item.data.category;
                if (category && !categories.includes(category)) {
                    categories.push(category);
                }
            });
        return categories.sort();
    });

    eleventyConfig.addCollection('groupByCategories', function(collectionApi) {
        const categories = {};
        collectionApi.getAll()
            .filter(function(item) {
                let extension = item.inputPath.split('.').pop();
                return extension === 'md';
            })
            .forEach((item) => {
                const category = item.data.category;
                if (!category) {
                    return;
                }
                Array.isArray(categories[category])
                    ? categories[category].push(item)
                    : categories[category] = [item];
            });
        return categories;
    });

    eleventyConfig.addTransform('minify-html', function(content) {
        if (this.outputPath && this.outputPath.endsWith('.html')) {
            return htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
        }    
        return content;
    });

    return {
        // Control which files Eleventy will process
        // e.g.: *.md, *.njk, *.html, *.liquid
        templateFormats: [
            'md',
            'njk',
            'html',
            'liquid',
        ],
        // Pre-process *.md files with: (default: `liquid`)
        markdownTemplateEngine: 'njk',

        // Pre-process *.html files with: (default: `liquid`)
        htmlTemplateEngine: 'njk',

        // These are all optional (defaults are shown):
        dir: {
            input: 'contents',
            includes: '_includes',
            data: '_data',
            output: '_site'
        }
    };
};