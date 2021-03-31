/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Pattern from '../../constants/Pattern';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.ResizableElement}>
            <Helmet>
                <meta name="description" content="Create resizable indicators with CSS" />
                <meta name="keywords" content="css resizable, css resize cursor" />
            </Helmet>
            <div className='p-8 pb-20'>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    You can move the mouse over each squares located at the corners and the middle of sides to see
                    the cursors which indicate the associated side can be resized.
                </div>
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
                                    border: '1px dashed rgba(0, 0, 0, 0.3)',
                                    height: '200px',
                                    position: 'relative',
                                    width: '200px',
                                }}
                            >
                                <div
                                    style={{
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        cursor: 'nwse-resize',
                                        height: '12px',
                                        left: 0,
                                        position: 'absolute',
                                        top: 0,
                                        transform: 'translate(-50%, -50%)',
                                        width: '12px',
                                    }}
                                />
                                <div
                                    style={{
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        cursor: 'ns-resize',
                                        height: '12px',
                                        left: '50%',
                                        position: 'absolute',
                                        top: 0,
                                        transform: 'translate(-50%, -50%)',
                                        width: '12px',
                                    }}
                                />
                                <div
                                    style={{
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        cursor: 'nesw-resize',
                                        height: '12px',
                                        position: 'absolute',
                                        right: 0,
                                        top: 0,
                                        transform: 'translate(50%, -50%)',
                                        width: '12px',
                                    }}
                                />
                                <div
                                    style={{
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        cursor: 'ew-resize',
                                        height: '12px',
                                        position: 'absolute',
                                        right: 0,
                                        top: '50%',
                                        transform: 'translate(50%, -50%)',
                                        width: '12px',
                                    }}
                                />
                                <div
                                    style={{
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        bottom: 0,
                                        cursor: 'nwse-resize',
                                        height: '12px',
                                        position: 'absolute',
                                        right: 0,
                                        transform: 'translate(50%, 50%)',
                                        width: '12px',
                                    }}
                                />
                                <div
                                    style={{
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        bottom: 0,
                                        cursor: 'ns-resize',
                                        height: '12px',
                                        position: 'absolute',
                                        right: '50%',
                                        transform: 'translate(50%, 50%)',
                                        width: '12px',
                                    }}
                                />
                                <div
                                    style={{
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        bottom: 0,
                                        cursor: 'nesw-resize',
                                        height: '12px',
                                        left: 0,
                                        position: 'absolute',
                                        transform: 'translate(-50%, 50%)',
                                        width: '12px',
                                    }}
                                />
                                <div
                                    style={{
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        cursor: 'ew-resize',
                                        height: '12px',
                                        left: 0,
                                        position: 'absolute',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '12px',
                                    }}
                                />
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Border */
    border: 1px dashed rgba(0, 0, 0, 0.3);

    /* Used to position the squares */
    position: relative;
">
    <!-- The content -->
    ...

    <!-- The top left square -->
    <div style="
        /* Border */
        border: 1px solid rgba(0, 0, 0, 0.3);

        /* Resize cursor */
        cursor: nwse-resize;

        /* Positioned at the top left corner */
        left: 0px;
        position: absolute;
        top: 0px;
        transform: translate(-50%, -50%);

        /* Size */
        height: 12px;
        width: 12px;
    "/>

    <!-- The top square -->
    <div style="
        /* Border */
        border: 1px solid rgba(0, 0, 0, 0.3);

        /* Resize cursor */
        cursor: ns-resize;

        /* Positioned at the middle of top side */
        left: 50%;
        position: absolute;
        top: 0px;
        transform: translate(-50%, -50%);

        /* Size */
        height: 12px;
        width: 12px;
    "/>

    <!-- The top right square -->
    <div style="
        /* Border */
        border: 1px solid rgba(0, 0, 0, 0.3);

        /* Resize cursor */
        cursor: nesw-resize;

        /* Positioned at the top right corner */
        position: absolute;
        right: 0px;
        top: 0px;
        transform: translate(50%, -50%);

        /* Size */
        height: 12px;
        width: 12px;
    "/>

    <!-- The right square -->
    <div style="
        /* Border */
        border: 1px solid rgba(0, 0, 0, 0.3);

        /* Resize cursor */
        cursor: ew-resize;

        /* Positioned at the middle of right side */
        position: absolute;
        right: 0px;
        top: 50%;
        transform: translate(50%, -50%);

        /* Size */
        height: 12px;
        width: 12px;
    "/>

    <!-- The right bottom square -->
    <div style="
        /* Border */
        border: 1px solid rgba(0, 0, 0, 0.3);

        /* Resize cursor */
        cursor: nwse-resize;

        /* Positioned at the right bottom corner */
        bottom: 0px;
        position: absolute;
        right: 0px;
        transform: translate(50%, 50%);

        /* Size */
        height: 12px;
        width: 12px;
    "/>

    <!-- The bottom square -->
    <div style="
        /* Border */
        border: 1px solid rgba(0, 0, 0, 0.3);

        /* Resize cursor */
        cursor: ns-resize;

        /* Positioned at the middle of bottom side */
        bottom: 0px;
        position: absolute;
        right: 50%;
        transform: translate(50%, 50%);

        /* Size */
        height: 12px;
        width: 12px;
    "/>

    <!-- The bottom left square -->
    <div style="
        /* Border */
        border: 1px solid rgba(0, 0, 0, 0.3);

        /* Resize cursor */
        cursor: nesw-resize;

        /* Positioned at the bottom left corner */
        bottom: 0px;
        left: 0px;
        position: absolute;
        transform: translate(-50%, 50%);

        /* Size */
        height: 12px;
        width: 12px;
    "/>

    <!-- The left square -->
    <div style="
        /* Border */
        border: 1px solid rgba(0, 0, 0, 0.3);

        /* Resize cursor */
        cursor: ew-resize;

        /* Positioned at the middle of left side */
        left: 0px;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);

        /* Size */
        height: 12px;
        width: 12px;
    "/>
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
