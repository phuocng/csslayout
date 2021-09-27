/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import Head from 'next/head';

import { DetailsLayout } from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import { Pattern } from '../../constants/Pattern';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.DropCap}>
            <Head>
                <meta name="description" content="Create a drop cap with CSS" />
                <meta name="og:description" content="Create a drop cap with CSS" />
                <meta name="twitter:description" content="Create a drop cap with CSS" />
                <meta name="keywords" content="css drop cap" />
            </Head>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="container">
    ...
</div>
`}
css={`
/* Styles for the first letter */
.container:first-letter {
    /* Display at the left */
    float: left;
    line-height: 1;

    /* Spacing */
    margin: 0 8px 0 0;
    padding: 0 8px;

    /* Optional */
    font-size: 64px;
    font-weight: 700;
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
                            <div className="p-drop-cap">
                                Cascading Style Sheets (CSS) is a style sheet language used for
                                describing the presentation of a document written in a markup
                                language like HTML. CSS is a cornerstone technology of the World Wide Web,
                                alongside HTML and JavaScript.
                            </div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;
