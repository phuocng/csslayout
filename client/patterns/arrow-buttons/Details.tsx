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
        <DetailsLayout pattern={Pattern.ArrowButtons}>
            <Helmet>
                <meta name="description" content="Create arrow buttons with CSS" />
                <meta name="keywords" content="css arrow buttons" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<!-- Up arrow button -->
<button style="
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Spacing */
    padding: 8px;
">
    <!-- Arrow -->
    <div style="
        /* Transparent background */
        background-color: transparent;

        /* Edges */
        border-left: 1px solid rgba(0, 0, 0, 0.3);
        border-top: 1px solid rgba(0, 0, 0, 0.3);
        transform: translateY(25%) rotate(45deg);

        /* Size */
        height: 12px;
        width: 12px;
    "></div>

    <!-- Content -->
    ...
</button>

<!-- Right arrow button -->
<button style="
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Spacing */
    padding: 8px;
">
    <!-- Content -->
    ...

    <!-- Arrow -->
    <div style="
        /* Transparent background */
        background-color: transparent;

        /* Edges */
        border-right: 1px solid rgba(0, 0, 0, 0.3);
        border-top: 1px solid rgba(0, 0, 0, 0.3);
        transform: translateX(-25%) rotate(45deg);

        /* Size */
        height: 12px;
        width: 12px;
    "></div>
</button>

<!-- Down arrow button -->
<button style="
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Spacing */
    padding: 8px;
">
    <!-- Arrow -->
    <div style="
        /* Transparent background */
        background-color: transparent;

        /* Edges */
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        border-right: 1px solid rgba(0, 0, 0, 0.3);
        transform: translateY(-25%) rotate(45deg);

        /* Size */
        height: 12px;
        width: 12px;
    "></div>

    <!-- Content -->
    ...
</button>

<!-- Left arrow button -->
<button style="
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Spacing */
    padding: 8px;
">
    <!-- Arrow -->
    <div style="
        /* Transparent background */
        background-color: transparent;

        /* Edges */
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        border-left: 1px solid rgba(0, 0, 0, 0.3);
        transform: translateX(25%) rotate(45deg);

        /* Size */
        height: 12px;
        width: 12px;
    "></div>

    <!-- Content -->
    ...
</button>
`}
css={`
`}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            height: '100%',
                            justifyContent: 'center',
                            padding: '8px',
                        }}
                    >
                        <div
                            style={{
                                height: '200px',
                                position: 'relative',
                                width: '200px',
                            }}
                        >
                            <div
                                style={{
                                    left: '50%',
                                    position: 'absolute',
                                    top: 0,
                                    transform: 'translate(-50%, -50%)',
                                }}
                            >
                                <button
                                    style={{
                                        alignItems: 'center',
                                        backgroundColor: 'transparent',
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        padding: '8px',
                                    }}
                                >
                                    <div
                                        style={{
                                            backgroundColor: 'transparent',
                                            borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                            borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                                            height: '12px',
                                            transform: 'translateY(25%) rotate(45deg)',
                                            width: '12px',
                                        }}
                                    />
                                    <div style={{ marginLeft: '8px' }}>Up</div>
                                </button>
                            </div>
                            <div
                                style={{
                                    position: 'absolute',
                                    right: 0,
                                    top: '50%',
                                    transform: 'translate(50%, -50%)',
                                }}
                            >
                                <button
                                    style={{
                                        alignItems: 'center',
                                        backgroundColor: 'transparent',
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        padding: '8px',
                                    }}
                                >
                                    <div style={{ marginRight: '8px' }}>Right</div>
                                    <div
                                        style={{
                                            backgroundColor: 'transparent',
                                            borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                            borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                                            height: '12px',
                                            transform: 'translateX(-25%) rotate(45deg)',
                                            width: '12px',
                                        }}
                                    />
                                </button>
                            </div>
                            <div
                                style={{
                                    bottom: 0,
                                    left: '50%',
                                    position: 'absolute',
                                    transform: 'translate(-50%, 50%)',
                                }}
                            >
                                <button
                                    style={{
                                        alignItems: 'center',
                                        backgroundColor: 'transparent',
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        padding: '8px',
                                    }}
                                >
                                    <div
                                        style={{
                                            backgroundColor: 'transparent',
                                            borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                            borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                            height: '12px',
                                            transform: 'translateY(-25%) rotate(45deg)',
                                            width: '12px',
                                        }}
                                    />
                                    <div style={{ marginLeft: '8px' }}>Down</div>
                                </button>
                            </div>
                            <div
                                style={{
                                    left: 0,
                                    position: 'absolute',
                                    top: '50%',
                                    transform: 'translate(-50%, -50%)',
                                }}
                            >
                                <button
                                    style={{
                                        alignItems: 'center',
                                        backgroundColor: 'transparent',
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        padding: '8px',
                                    }}
                                >
                                    <div
                                        style={{
                                            backgroundColor: 'transparent',
                                            borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                            borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                            height: '12px',
                                            transform: 'translateX(25%) rotate(45deg)',
                                            width: '12px',
                                        }}
                                    />
                                    <div style={{ marginLeft: '8px' }}>Left</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>

            <RelatedPatterns patterns={[Pattern.CloseButton, Pattern.PopoverArrow, Pattern.TriangleButtons]} />
        </DetailsLayout>
    );
};

export default Details;
