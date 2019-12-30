/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Timeline">
            <Helmet>
                <meta name="description" content="Create a timeline with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css timeline" />
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
                                    position: 'relative',
                                    width: '60%',
                                }}
                            >
                                <div
                                    style={{
                                        borderRight: '2px solid #aaa',
                                        height: '100%',
                                        left: '16px',
                                        position: 'absolute',
                                        top: 0,
                                    }}
                                />
                                <ul
                                    style={{
                                        listStyleType: 'none',
                                        margin: 0,
                                        padding: 0,
                                    }}
                                >
                                    <li style={{ marginBottom: '8px' }}>
                                        <div style={{ alignItems: 'center', display: 'flex', marginBottom: '4px' }}>
                                            <Circle backgroundColor='#aaa' size={32} />
                                            <div style={{ flex: 1, marginLeft: '16px' }}>
                                                <div style={{ width: '80%' }}><Rectangle /></div>
                                            </div>
                                        </div>
                                        <div style={{ marginLeft: '48px' }}>
                                            <Block numberOfBlocks={10} blockHeight={2} />
                                        </div>
                                    </li>
                                    <li style={{ marginBottom: '8px' }}>
                                        <div style={{ alignItems: 'center', display: 'flex', marginBottom: '4px' }}>
                                            <Circle backgroundColor='#aaa' size={32} />
                                            <div style={{ flex: 1, marginLeft: '16px' }}>
                                                <div style={{ width: '60%' }}><Rectangle /></div>
                                            </div>
                                        </div>
                                        <div style={{ marginLeft: '48px' }}>
                                            <Block numberOfBlocks={15} blockHeight={2} />
                                        </div>
                                    </li>
                                    <li style={{ marginBottom: '8px' }}>
                                        <div style={{ alignItems: 'center', display: 'flex', marginBottom: '4px' }}>
                                            <Circle backgroundColor='#aaa' size={32} />
                                            <div style={{ flex: 1, marginLeft: '16px' }}>
                                                <div style={{ width: '60%' }}><Rectangle /></div>
                                            </div>
                                        </div>
                                        <div style={{ marginLeft: '48px' }}>
                                            <Block numberOfBlocks={10} blockHeight={2} />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Used to position the left vertical line */
    position: relative;
">
    <!-- Left vertical line -->
    <div style="
        /* Border */
        border-right: 2px solid #aaa;

        /* Positioned at the left */
        left: 16px;
        position: absolute;
        top: 0px;

        /* Take full height */
        height: 100%;
    " />

    <!-- The timeline items container -->
    <ul style="
        /* Reset styles */
        list-style-type: none;
        margin: 0px;
        padding: 0px;
    ">
        <!-- Each timeline item -->
        <li style="margin-bottom: 8px;">
            <!-- The circle and title -->
            <div style="
                /* Center the content horizontally */
                align-items: center;
                display: flex;
            ">
                <!-- The circle -->
                <div style="
                    /* Rounded border */
                    background-color: rgb(170, 170, 170);
                    border-radius: 9999px;

                    /* Size */
                    height: 32px;
                    width: 32px;
                " />

                <!-- The title -->
                <div style="
                    /* Take available width */
                    flex: 1;
                ">
                    ...
                </div>
            </div>

            <!-- The description -->
            <div style="
                /* Make it align with the title */
                margin-left: 48px;
            ">
                ...
            </div>
        </li>

        <!-- Repeat other items -->
        ...
    </ul>
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
