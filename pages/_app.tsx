import Head from 'next/head';

// Design
import '@1milligram/design/lib/styles/index.css';
import '../styles/index.scss';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
