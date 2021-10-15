import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" href="/favicon.png" type="image/png" />
                    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                    <link rel="mask-icon" href="/mask-favicon.svg" color="#1975FF" />

                    <meta content="A collection of popular layouts and patterns made with CSS" name="description" />
                    <meta
                        content="css display, css flexbox, css grid, css layouts, flex, flexbox, flexbox cheatsheet, web design, web template"
                        name="keywords"
                    />
                    <meta content="Nguyen Huu Phuoc" name="author" />
                    <meta content="@nghuuphuoc" name="twitter:site" />
                    <meta content="summary" name="twitter:card" />
                    <meta
                        content="A collection of popular layouts and patterns made with CSS"
                        name="twitter:description"
                    />
                    <meta content="A collection of popular layouts and patterns made with CSS" name="twitter:title" />

                    <meta content="A collection of popular layouts and patterns made with CSS" property="og:title" />
                    <meta
                        content="A collection of popular layouts and patterns made with CSS"
                        property="og:description"
                    />
                    <meta content="article" property="og:type" />
                    <meta content="https://csslayout.io" property="og:url" />
                    <meta content="CSS Layout" property="og:site_name" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?&family=Source+Code+Pro:wght@400&family=Inter:wght@400;700&display=swap"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
