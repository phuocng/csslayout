import * as React from 'react';
import Head from 'next/head';
import { Heading, Spacer } from '@1milligram/design';

import { Ad } from '../components/Ad';
import { Follow } from '../components/Follow';
import { Pattern } from '../constants/Pattern';
import { slug } from '../utils/slug';
import { Layout } from './Layout';

export const PatternLayout: React.FC<{
    pattern: Pattern;
}> = ({ pattern, children }) => {
    const patternSlug = slug(pattern);

    return (
        <Layout title={pattern}>
            <Head>
                <title>{pattern} - CSS Layout</title>
                <meta name="title" content={`${pattern} - CSS Layout`} />

                <meta property="og:image" content={`https://csslayout.io/assets/patterns/${patternSlug}.png`} />
                <meta property="og:title" content={`${pattern} - CSS Layout`} />
                <meta property="og:url" content={`https://csslayout.io/patterns/${patternSlug}`} />

                <meta property="twitter:image" content={`https://csslayout.io/assets/patterns/${patternSlug}.png`} />
                <meta property="twitter:title" content={`${pattern} - CSS Layout`} />
                <meta property="twitter:url" content={`https://csslayout.io/patterns/${patternSlug}`} />
            </Head>

            <div className="block-container">
                <div className="page-home__hero">
                    <Spacer size="extraLarge" />
                    <Heading level={1}>{pattern}</Heading>
                    <Spacer size="large" />
                    <div className="block-ad">
                        <Ad />
                    </div>
                    <Spacer size="medium" />
                </div>
                {children}
                <Follow />
                <Spacer size="extraLarge" />
            </div>
        </Layout>
    );
};
