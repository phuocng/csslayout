/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Lined paper">
            <Helmet>
                <meta name="description" content="Create lined paper with CSS" />
                <meta name="keywords" content="css linear gradient, css lined paper, css multiple horizontal lines" />
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
                            <div
                                style={{
                                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3) 1px, transparent 0)',
                                    backgroundPositionY: '24px',
                                    backgroundSize: '100% 2em',
                                    height: '200px',
                                    lineHeight: '2em',
                                    width: '75%',
                                }}
                            >
                                <div>
                                    Cascading Style Sheets (CSS) is a style sheet language used for
                                    describing the presentation of a document written in a markup
                                    language like HTML. CSS is a cornerstone technology of the World Wide Web,
                                    alongside HTML and JavaScript.
                                </div>
                                <div style={{ textAlign: 'right' }}>— Wikipedia</div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Lined background */
    background-image: linear-gradient(rgba(0, 0, 0, 0.3) 1px, transparent 0px);
    background-size: 100% 2em;

    /*
    Display the content on top of the lines.
    The line height must be the same as the background size defined above
    */
    background-position-y: 24px;
    line-height: 2em;
">
    ...
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
