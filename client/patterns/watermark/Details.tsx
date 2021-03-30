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
        <DetailsLayout pattern={Pattern.Watermark}>
            <Helmet>
                <meta name="description" content="Create a watermark with CSS" />
                <meta name="keywords" content="css watermark" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
                    content={(
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
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    padding: '16px',
                                    position: 'relative',
                                    width: '300px',
                                }}
                            >
                                <div
                                    style={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        height: '100%',
                                        justifyContent: 'center',
                                        left: 0,
                                        position: 'absolute',
                                        top: 0,
                                        width: '100%',
                                    }}
                                >
                                    <div
                                        style={{
                                            color: 'rgba(0, 0, 0, 0.2)',
                                            fontSize: '3rem',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase',
                                            transform: 'rotate(-45deg)',
                                            userSelect: 'none',
                                        }}
                                    >
                                        Draft
                                    </div>
                                </div>

                                <div style={{ marginBottom: '8px' }}>
                                    <Block numberOfBlocks={20} />
                                </div>

                                <div style={{ marginBottom: '8px' }}>
                                    <Block numberOfBlocks={15} />
                                </div>

                                <div style={{ marginBottom: '8px' }}>
                                    <Block numberOfBlocks={10} />
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Used to position the watermark */
    position: relative;
">
    <!-- Watermark container -->
    <div style="
        /* Center the content */
        align-items: center;
        display: flex;
        justify-content: center;

        /* Absolute position */
        left: 0px;
        position: absolute;
        top: 0px;

        /* Take full size */
        height: 100%;
        width: 100%;
    ">
        <!-- The watermark -->
        <div style="
            /* Text color */
            color: rgba(0, 0, 0, 0.2);

            /* Text styles */
            font-size: 3rem;
            font-weight: bold;
            text-transform: uppercase;

            /* Rotate the text */
            transform: rotate(-45deg);

            /* Disable the selection */
            user-select: none;
        ">
            Draft
        </div>
    </div>

    <!-- Other content -->
    ...
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
