# CSS Layout

A collection of popular layouts and patterns made with CSS:

* 🎉Zero dependencies
* 🎉No frameworks
* 🎉No CSS hacks
* 🎉Real use cases
* Good practices (coming soon)
* Accessibility (coming soon)

[![CSS Layout](/public/assets/screenshot.png)](https://csslayout.io/)

## Why

Being a front-end engineer, I have to deal with a lot of layouts and components.
There are a lot of CSS frameworks out there that provide popular layouts/components but 
I usually don't want to include all of them in my project.

So I collect most popular layouts and components that can be built with pure CSS.
They are powered by modern CSS features such as flexbox and grid.

They are great starting points to be picked and customized easily for each specific need.
By composing them, you can have any possible layout that exists in the real life.

The entire website is powered by

~~~ javascript
this
    .madeWith([react,typescript])
    .then(r => lint(tslint))
    .then(r => lazyLoad(@loadable/component))
    .then(r => optimizeAndBundle(webpack))
    .then(r => exportHtml(react-snap))
    .then(r => deploy(Netlify))
    .then(r => {
        expect(r).is(scalableCode);
        expect(r).is(superFastWebsite);
        expect(r).is(seoFriendly);
    })
    .finally(() => {/* Give me 1 star */}) 🎉
~~~

## Running it on local

- Clone the project:

~~~ console
$ git clone https://github.com/phuoc-ng/csslayout
~~~

- Install the dependencies:

~~~ console
$ cd csslayout
$ npm install
~~~

- Run it on the local:

~~~ console
$ npm run dev-server
~~~

Visit http://localhost:1234 to see it in action.

## Contributing

PRs are welcomed. If you thing there are any missing useful layouts or patterns, please create an issue or submit a PR.

It's important to note that you should run the following command to lint the code:

~~~ console
$ npm run lint
~~~

If there is any issue, it will be logged in the `tslint.log` file.

## About

This project is developed by _Nguyen Huu Phuoc_. I love building products and sharing knowledge.

Be my friend on
* [Twitter](https://twitter.com/nghuuphuoc)
* [dev.to](https://dev.to/phuocng)
* [Github](https://github.com/phuoc-ng)

## Products

You might be interested in my products:

<table>
    <tbody>
        <tr valign="top">
            <td width="25%" align="center">
                <h3>1 LOC (3.3k★)</h3>
                <a href="https://1loc.dev">Favorite JavaScript utilities in single line of code</a>
            </td>
            <td width="25%" align="center">
                <h3>Blur Page</h3>
                <a href="https://blur.page">A browser extension to hide sensitive information on a web page</a>
            </td>
            <td width="25%" align="center">
                <h3>Check Browsers Support</h3>
                <a href="https://checkbrowsers.support">A browser extension to check browser compatibility without leaving your tab</a>
            </td>
            <td width="25%" align="center">
                <h3>CSS Layout (2.7k★)</h3>
                <a href="https://csslayout.io">A collection of popular layouts and patterns made with CSS</a>
            </td>
        </tr>
        <tr valign="top">
            <td width="25%" align="center">
                <h3>Fake Numbers</h3>
                <a href="https://fakenumbers.io">Generate fake and valid numbers</a>
            </td>
            <td width="25%" align="center">
                <h3>Form Validation</h3>
                <a href="https://formvalidation.io">The best validation library for JavaScript</a>
            </td>
            <td width="25%" align="center">
                <h3>HTML DOM (3.1k★)</h3>
                <a href="https://htmldom.dev">How to manage HTML DOM with vanilla JavaScript</a>
            </td>
            <td width="25%" align="center">
                <h3>React PDF Viewer</h3>
                <a href="https://react-pdf-viewer.dev">A React component to view a PDF document</a>
            </td>
        </tr>
        <tr valign="top">
            <td width="25%" align="center">
                <h3>this VS that</h3>
                <a href="https://thisthat.dev">The differences between ___ and ___ in the front-end development</a>
            </td>
            <td width="25%" align="center"></td>
            <td width="25%" align="center"></td>
            <td width="25%" align="center"></td>
        </tr>
    </tbody>
</table>
