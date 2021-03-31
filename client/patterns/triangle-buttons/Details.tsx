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
        <DetailsLayout pattern={Pattern.TriangleButtons}>
            <Helmet>
                <meta name="description" content="Create triangle buttons with CSS" />
                <meta name="keywords" content="css triangle buttons" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<!-- Up triangle button -->
<button style="
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Spacing */
    padding: 8px;
">
    <!-- Triangle -->
    <div style="
        border-color: transparent transparent rgba(0, 0, 0, 0.3);
        border-style: solid;
        border-width: 0px 8px 8px;

        /* Size */
        height: 0px;
        width: 0px;
    "></div>

    <!-- Content -->
    ...
</button>

<!-- Right triangle button -->
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

    <!-- Triangle -->
    <div style="
        border-color: transparent transparent transparent rgba(0, 0, 0, 0.3);
        border-style: solid;
        border-width: 8px 0px 8px 8px;

        /* Size */
        height: 0px;
        width: 0px;
    "></div>
</button>

<!-- Down triangle button -->
<button style="
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Spacing */
    padding: 8px;
">
    <!-- Triangle -->
    <div style="
        border-color: rgba(0, 0, 0, 0.3) transparent transparent;
        border-style: solid;
        border-width: 8px 8px 0px;

        /* Size */
        height: 0px;
        width: 0px;
    "></div>

    <!-- Content -->
    ...
</button>

<!-- Left triangle button -->
<button style="
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Spacing */
    padding: 8px;
">
    <!-- Triangle -->
    <div style="
        border-color: transparent rgba(0, 0, 0, 0.3) transparent transparent;
        border-style: solid;
        border-width: 8px 8px 8px 0px;

        /* Size */
        height: 0px;
        width: 0px;
    "></div>

    <!-- Content -->
    ...
</button>
`}
css={``}
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
                                            borderColor: 'transparent transparent rgba(0, 0, 0, 0.3) transparent',
                                            borderStyle: 'solid',
                                            borderWidth: '0px 8px 8px 8px',
                                            height: 0,
                                            width: 0,
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
                                            borderColor: 'transparent transparent transparent rgba(0, 0, 0, 0.3)',
                                            borderStyle: 'solid',
                                            borderWidth: '8px 0px 8px 8px',
                                            height: 0,
                                            width: 0,
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
                                            borderColor: 'rgba(0, 0, 0, 0.3) transparent transparent transparent',
                                            borderStyle: 'solid',
                                            borderWidth: '8px 8px 0px 8px',
                                            height: 0,
                                            width: 0,
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
                                            borderColor: 'transparent rgba(0, 0, 0, 0.3) transparent transparent',
                                            borderStyle: 'solid',
                                            borderWidth: '8px 8px 8px 0px',
                                            height: 0,
                                            width: 0,
                                        }}
                                    />
                                    <div style={{ marginLeft: '8px' }}>Left</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>

            <RelatedPatterns patterns={[Pattern.ArrowButtons]} />
        </DetailsLayout>
    );
};

export default Details;
