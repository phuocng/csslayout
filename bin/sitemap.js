const fs = require('fs');

const layouts = [
    'Holy grail', 'Sidebar', 'Split screen', 'Sticky footer', 'Sticky header',
];

const patterns = [
    'Badge', 'Breadcrumb', 'Button with icon', 'Card', 'Centering', 
    'Dot navigation', 'Feature list', 'Fixed at corner', 'Input addon', 'Media object',
    'Menu', 'Modal', 'Notification', 'Pagination', 'Previous next buttons',
    'Pricing table', 'Progress bar', 'Same height columns', 'Search box', 'Separator',
    'Simple grid', 'Slider', 'Split navigation', 'Stepper input', 'Switch',
    'Tab', 'Wizard',
];

const items = layouts.concat(patterns);

const slug = item => item.toLowerCase().split(' ').join('-');
const output = ['<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">\n']
    .concat(
        items.map((item) => `<url><loc>https://csslayout.io/${slug(item)}</loc></url>\n`)
    )
    .concat(
        ['</urlset>\n']
    )
    .join('');

fs.writeFile('./sitemap.xml', output, (err) => {
    console.log(err || 'Sitemap generated successfully');
});
