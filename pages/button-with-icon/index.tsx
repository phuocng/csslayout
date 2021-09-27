/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import Head from 'next/head';
import { Pattern } from '../../constants/Pattern';

import { DetailsLayout } from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.ButtonWithIcon}>
            <Head>
                <meta name="description" content="Create an icon button with CSS flexbox" />
                <meta name="og:description" content="Create an icon button with CSS flexbox" />
                <meta name="twitter:description" content="Create an icon button with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css icon button" />
            </Head>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<button class="button">
    <!-- Icon -->
    ...

    <!-- Label -->
    ...
</div>
`}
css={`
.button {
    /* Center the content */
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
`}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            justifyContent: 'center',
                            padding: '8px',
                        }}
                    >
                        <div style={{ width: '256px' }}>
                            <button
                                style={{
                                    alignItems: 'center',
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    height: '64px',
                                    padding: '8px',
                                    width: '100%',
                                }}
                            >
                                <div style={{ marginRight: '8px' }}><Circle size={32} /></div>
                                <Rectangle />
                            </button>
                        </div>
                    </div>
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;
