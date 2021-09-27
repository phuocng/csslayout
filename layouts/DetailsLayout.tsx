import * as React from 'react';
import Head from 'next/head';
import { Heading, Spacer } from '@1milligram/design';

import { Pattern } from '../constants/Pattern';
import { slug } from '../utils/slug';
import { Layout } from './Layout';

interface DetailsLayoutProps {
    pattern: Pattern;
}

export const DetailsLayout: React.FC<DetailsLayoutProps> = ({ pattern, children }) => {
    const patternSlug = slug(pattern);

    return (
        <Layout title={pattern}>
            <Head>
                <title>CSS Layout ∙ {pattern}</title>
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
                </div>

                {children}
            </div>
        </Layout>
    );
};
