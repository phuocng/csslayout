/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Pattern from '../../constants/Pattern';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.DropArea}>
            <Helmet>
                <meta name="description" content="Create a dropping area with CSS flexbox" />
                <meta name="keywords" content="css dropping area, css flexbox" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div style="
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Border */
    border: 4px dashed rgba(0, 0, 0, 0.3),
    border-radius: 4px;
">
    ...
</div>
`}
css={``}
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
                        <div
                            style={{
                                alignItems: 'center',
                                border: '4px dashed rgba(0, 0, 0, 0.3)',
                                borderRadius: '4px',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '80%',
                                justifyContent: 'center',
                                width: '80%',
                            }}
                        >
                            <div style={{ width: '40%' }}>
                                <Block justify='center' numberOfBlocks={10} />
                            </div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;
