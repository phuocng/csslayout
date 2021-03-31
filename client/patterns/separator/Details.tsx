/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Pattern from '../../constants/Pattern';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.Separator}>
            <Helmet>
                <meta name="description" content="Create a separator with CSS flexbox" />
                <meta name="keywords" content="css divider, css flexbox, css separator" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div style="
    /* Content is centered horizontally */
    align-items: center;
    display: flex;

    /* Used to set the position of text */
    position: relative;
">
    <!-- Text -->
    <div style="
        /* We won't see the separator line */
        background: #FFF;

        /* Displayed at the center of container */
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
    ">
        ...
    </div>

    <!-- Separator line -->
    <div style="
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        height: 1px;
        width: 100%;
    " />
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
                                display: 'flex',
                                position: 'relative',
                                width: '60%',
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: '#FFF',
                                    left: '50%',
                                    padding: '0 8px',
                                    position: 'absolute',
                                    top: '50%',
                                    transform: 'translate(-50%, -50%)',
                                }}
                            >
                                <div style={{ width: '128px' }}><Rectangle height={16} /></div>
                            </div>
                            <div
                                style={{
                                    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                    height: '1px',
                                    width: '100%',
                                }}
                            />
                        </div>
                    </div>
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;
