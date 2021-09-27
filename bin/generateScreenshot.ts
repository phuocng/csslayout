#!/usr/bin/env node

// Run this script from the root folder
// $ npm run screenshot slug-of-pattern-here

const puppeteer = require('puppeteer');

const main = () => {
    const args = process.argv;
    if (!args || !Array.isArray(args) || args.length < 2) {
        console.log('Please specific the pattern: npm run screenshot slug-of-pattern-here');
        return;
    }

    const pattern = args[2];
    
    (async () => {
        const browser = await puppeteer.launch();    
           
        const page = await browser.newPage();
        await page.goto(`http://localhost:3000/patterns/${pattern}`);

        await page.waitForSelector('.demo__live');
        const element = await page.$('.demo__live');
        await element.screenshot({
            path: `public/assets/patterns/${pattern}.png`
        });
        await page.close();
        
        await browser.close();
    })();
};

main();
