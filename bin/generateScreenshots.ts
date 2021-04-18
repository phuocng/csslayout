#!/usr/bin/env node

const puppeteer = require('puppeteer');

import Pattern from '../client/constants/Pattern';
import slug from '../client/helpers/slug';

process.setMaxListeners(0);

(async () => {
    const browser = await puppeteer.launch();    

    await Promise.all(
        Object.entries(Pattern).map(async ([_, patternName]) => {            
            const page = await browser.newPage();
            const pattern = slug(patternName);
            await page.goto(`http://localhost:1234/patterns/${pattern}`);

            await page.waitForSelector('.demo');
            const element = await page.$('.demo');
            await element.screenshot({
                path: `public/assets/patterns/${pattern}.png`
            });
            await page.close();
        })
    );
    
    await browser.close();
})();
