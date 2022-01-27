import React, { useState } from 'react';
import Head from 'next/head';
import { PrefixProvider } from '../context/prefixContext';

// Design
import '@1milligram/design/lib/styles/index.css';
import '../styles/index.scss';

const MyApp: React.FC<{
    Component: any;
    pageProps: any;
}> = ({ Component, pageProps }) => {
    // const [prefix, setPrefix] = useState('');
    // const [container, setContainer] = useState('');

    return (
        <PrefixProvider>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </PrefixProvider>
    );
};

export default MyApp;
