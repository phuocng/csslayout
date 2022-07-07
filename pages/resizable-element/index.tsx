import * as React from 'react'
import Head from 'next/head'

import { Pattern } from '../../constants/Pattern'
import { PatternLayout } from '../../layouts/PatternLayout'
import BrowserFrame from '../../placeholders/BrowserFrame'
import { removeIndent } from '../../utils/removeIndent'

const Details: React.FC<{}> = () => {
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
                html={`
<div class="container">
    <!-- The content -->
    ...

    <!-- The top left square -->
    <div class="container__resizer container__resizer--tl"></div>

    <!-- The top square -->
    <div class="container__resizer container__resizer--tc"></div>

    <!-- The top right square -->
    <div class="container__resizer container__resizer--tr"></div>

    <!-- The right square -->
    <div class="container__resizer container__resizer--rc"></div>

    <!-- The right bottom square -->
    <div class="container__resizer container__resizer--rb"></div>

    <!-- The bottom square -->
    <div class="container__resizer container__resizer--bc"></div>

    <!-- The bottom left square -->
    <div class="container__resizer container__resizer--bl"></div>

    <!-- The left square -->
    <div class="container__resizer container__resizer--lc"></div>
</div>
`}
                css={removeIndent`
                    .container {
                        /* Border */
                        border: 1px dashed rgba(0, 0, 0, 0.3);

                        /* Used to position the squares */
                        position: relative;
                    }

                    .container__resizer {
                        /* Border */
                        border: 1px solid rgba(0, 0, 0, 0.3);
                        position: absolute;

                        /* Size */
                        height: 12px;
                        width: 12px;
                    }

                    .container__resizer--tl {
                        /* Resize cursor */
                        cursor: nwse-resize;

                        /* Positioned at the top left corner */
                        left: 0px;
                        top: 0px;
                        transform: translate(-50%, -50%);
                    }

                    .container__resizer--tc {
                        /* Resize cursor */
                        cursor: ns-resize;

                        /* Positioned at the middle of top side */
                        left: 50%;
                        top: 0px;
                        transform: translate(-50%, -50%);
                    }

                    .container__resizer--tr {
                        /* Resize cursor */
                        cursor: nesw-resize;

                        /* Positioned at the top right corner */
                        right: 0px;
                        top: 0px;
                        transform: translate(50%, -50%);
                    }

                    .container__resizer--rc {
                        /* Resize cursor */
                        cursor: ew-resize;

                        /* Positioned at the middle of right side */
                        right: 0px;
                        top: 50%;
                        transform: translate(50%, -50%);
                    }

                    .container__resizer--rb {
                        /* Resize cursor */
                        cursor: nwse-resize;

                        /* Positioned at the right bottom corner */
                        bottom: 0px;
                        right: 0px;
                        transform: translate(50%, 50%);
                    }

                    .container__resizer--bc {
                        /* Resize cursor */
                        cursor: ns-resize;

                        /* Positioned at the middle of bottom side */
                        bottom: 0px;
                        right: 50%;
                        transform: translate(50%, 50%);
                    }

                    .container__resizer--bl {
                        /* Resize cursor */
                        cursor: nesw-resize;

                        /* Positioned at the bottom left corner */
                        bottom: 0px;
                        left: 0px;
                        transform: translate(-50%, 50%);
                    }

                    .container__resizer--lc {
                        /* Resize cursor */
                        cursor: ew-resize;

                        /* Positioned at the middle of left side */
                        left: 0px;
                        top: 50%;
                        transform: translate(-50%, -50%);
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
    )
}

export default Details
