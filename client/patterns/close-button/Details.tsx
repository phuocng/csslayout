/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Close button">
            <Helmet>
                <meta name="description" content="Create a close button with CSS flexbox" />
                <meta name="keywords" content="css close button, css flexbox" />
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
                                padding: '8px',
                            }}
                        >
                            <button
                                style={{
                                    backgroundColor: 'transparent',
                                    borderColor: 'transparent',
                                    cursor: 'pointer',
                                    height: '32px',
                                    position: 'relative',
                                    width: '32px',
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                        height: '1px',
                                        left: 0,
                                        position: 'absolute',
                                        top: '50%',
                                        transform: 'translate(0%, -50%) rotate(45deg)',
                                        width: '100%',
                                    }}
                                />
                                <div
                                    style={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                        height: '100%',
                                        left: '50%',
                                        position: 'absolute',
                                        top: 0,
                                        transform: 'translate(-50%, 0%) rotate(45deg)',
                                        width: '1px',
                                    }}
                                />
                            </button>
                        </div>
                    )}
                    source={`
<button style="
    /* Reset */
    background-color: transparent;
    border-color: transparent;

    /* Cursor */
    cursor: pointer;

    /* Size */
    height: 32px;
    width: 32px;

    /* Used to position the inner */
    position: relative;
">
    <div style="
        /* Background color */
        background-color: rgba(0, 0, 0, 0.3);

        /* Position */
        left: 0px;
        position: absolute;
        top: 50%;
        transform: translate(0%, -50%) rotate(45deg);

        /* Size */
        height: 1px;
        width: 100%;
    " />

    <div style="
        /* Background color */
        background-color: rgba(0, 0, 0, 0.3);

        /* Position */
        left: 50%;
        position: absolute;
        top: 0px;
        transform: translate(-50%, 0%) rotate(45deg);

        /* Size */
        height: 100%;
        width: 1px;
    " />
</button>
`}
                />
            </div>

            <RelatedPatterns patterns={[Pattern.ArrowButtons, Pattern.Chip, Pattern.Modal, Pattern.Notification]} />
        </DetailsLayout>
    );
};

export default Details;
