/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Full background">
            <Helmet>
                <meta name="description" content="Create a full background element with CSS" />
                <meta name="keywords" content="css background size cover, css full background" />
            </Helmet>
            <div style={{ padding: '64px 32px' }}>
                <BrowserFrame
                    content={(
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
                                    <Block backgroundColor='#fff' justify='center' numberOfBlocks={10} />
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Center the content */
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* Take full size */
    height: 100vh;
    width: 100%;

    /* Background */
    background: url("/assets/full-background.jpeg") center center / cover no-repeat;
">
    ...
</div>
`}
                />
            </div>

            <RelatedPatterns patterns={[Pattern.VideoBackground]} />
        </DetailsLayout>
    );
};

export default Details;
