import * as React from 'react';
import Head from 'next/head';

import { PrefixContext } from '../../context/prefixContext';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'container';
    return (
        <PatternLayout pattern={Pattern.ResizableElement}>
            <Head>
                <meta name="description" content="Create resizable indicators with CSS" />
                <meta name="og:description" content="Create resizable indicators with CSS" />
                <meta name="twitter:description" content="Create resizable indicators with CSS" />
                <meta name="keywords" content="css resizable, css resize cursor" />
            </Head>
            <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                You can move the mouse over each squares located at the corners and the middle of sides to see the
                cursors which indicate the associated side can be resized.
            </div>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <!-- The content -->
    ...

    <!-- The top left square -->
    <div class="${prefix}${container}__resizer ${prefix}${container}__resizer--tl"></div>

    <!-- The top square -->
    <div class="${prefix}${container}__resizer ${prefix}${container}__resizer--tc"></div>

    <!-- The top right square -->
    <div class="${prefix}${container}__resizer ${prefix}${container}__resizer--tr"></div>

    <!-- The right square -->
    <div class="${prefix}${container}__resizer ${prefix}${container}__resizer--rc"></div>

    <!-- The right bottom square -->
    <div class="${prefix}${container}__resizer ${prefix}${container}__resizer--rb"></div>

    <!-- The bottom square -->
    <div class="${prefix}${container}__resizer ${prefix}${container}__resizer--bc"></div>

    <!-- The bottom left square -->
    <div class="${prefix}${container}__resizer ${prefix}${container}__resizer--bl"></div>

    <!-- The left square -->
    <div class="${prefix}${container}__resizer ${prefix}${container}__resizer--lc"></div>
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    /* Border */
    border: 1px dashed rgba(0, 0, 0, 0.3);

    /* Used to position the squares */
    position: relative;
}

.${prefix}${container}__resizer {
    /* Border */
    border: 1px solid rgba(0, 0, 0, 0.3);
    position: absolute;

    /* Size */
    height: 12px;
    width: 12px;
}

.${prefix}${container}__resizer--tl {
    /* Resize cursor */
    cursor: nwse-resize;

    /* Positioned at the top left corner */
    left: 0px;
    top: 0px;
    transform: translate(-50%, -50%);
}

.${prefix}${container}__resizer--tc {
    /* Resize cursor */
    cursor: ns-resize;

    /* Positioned at the middle of top side */
    left: 50%;
    top: 0px;
    transform: translate(-50%, -50%);
}

.${prefix}${container}__resizer--tr {
    /* Resize cursor */
    cursor: nesw-resize;

    /* Positioned at the top right corner */
    right: 0px;
    top: 0px;
    transform: translate(50%, -50%);
}

.${prefix}${container}__resizer--rc {
    /* Resize cursor */
    cursor: ew-resize;

    /* Positioned at the middle of right side */
    right: 0px;
    top: 50%;
    transform: translate(50%, -50%);
}

.${prefix}${container}__resizer--rb {
    /* Resize cursor */
    cursor: nwse-resize;

    /* Positioned at the right bottom corner */
    bottom: 0px;
    right: 0px;
    transform: translate(50%, 50%);
}

.${prefix}${container}__resizer--bc {
    /* Resize cursor */
    cursor: ns-resize;

    /* Positioned at the middle of bottom side */
    bottom: 0px;
    right: 50%;
    transform: translate(50%, 50%);
}

.${prefix}${container}__resizer--bl {
    /* Resize cursor */
    cursor: nesw-resize;

    /* Positioned at the bottom left corner */
    bottom: 0px;
    left: 0px;
    transform: translate(-50%, 50%);
}

.${prefix}${container}__resizer--lc {
    /* Resize cursor */
    cursor: ew-resize;

    /* Positioned at the middle of left side */
    left: 0px;
    top: 50%;
    transform: translate(-50%, -50%);
}
`
                }
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
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;
