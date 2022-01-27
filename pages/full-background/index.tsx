import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { PrefixContext } from '../../context/prefixContext';
import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'container';
    return (
        <PatternLayout pattern={Pattern.FullBackground}>
            <Head>
                <meta name="description" content="Create a full background element with CSS" />
                <meta name="og:description" content="Create a full background element with CSS" />
                <meta name="twitter:description" content="Create a full background element with CSS" />
                <meta name="keywords" content="css background size cover, css full background" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    ...
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    /* Center the content */
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* Take full size */
    height: 100vh;
    width: 100%;

    /* Background */
    background: url('/assets/full-background.jpeg') center center / cover no-repeat;
}
`
                }
            >
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            background: 'url("/assets/full-background.jpeg") center center / cover no-repeat',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    >
                        <div style={{ width: '250px' }}>
                            <Block backgroundColor="#fff" justify="center" numberOfBlocks={10} />
                        </div>
                    </div>
                </div>
            </BrowserFrame>
            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.VideoBackground]} />
        </PatternLayout>
    );
};

export default Details;
