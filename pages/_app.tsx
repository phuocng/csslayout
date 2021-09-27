import React from 'react';
import Head from 'next/head';

// Design
import '@1milligram/design/lib/styles/index.css';
import '../styles/index.scss';

const MyApp: React.FC<{
    Component: any;
    pageProps: any;
}> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
