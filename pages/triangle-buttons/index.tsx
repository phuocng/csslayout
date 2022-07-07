import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import { removeIndent } from '../../utils/removeIndent';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.TriangleButtons}>
            <Head>
                <meta name="description" content="Create triangle buttons with CSS" />
                <meta name="og:description" content="Create triangle buttons with CSS" />
                <meta name="twitter:description" content="Create triangle buttons with CSS" />
                <meta name="keywords" content="css triangle buttons" />
            </Head>
            <BrowserFrame
                html={`
<!-- Up triangle button -->
<button class="container">
    <!-- Triangle -->
    <div class="container__triangle container__triangle--up"></div>

    <!-- Content -->
    ...
</button>

<!-- Right triangle button -->
<button class="container">
    <!-- Content -->
    ...

    <!-- Triangle -->
    <div class="container__triangle container__triangle--right"></div>
</button>

<!-- Down triangle button -->
<button class="container">
    <!-- Triangle -->
    <div class="container__triangle container__triangle--down"></div>

    <!-- Content -->
    ...
</button>

<!-- Left triangle button -->
<button class="container">
    <!-- Triangle -->
    <div class="container__triangle container__triangle--left"></div>

    <!-- Content -->
    ...
</button>
`}
                css={removeIndent`
                    .container {
                        /* Center the content */
                        align-items: center;
                        display: flex;
                        justify-content: center;

                        /* Spacing */
                        padding: 8px;
                    }

                    .container__triangle {
                        border-style: solid;

                        /* Size */
                        height: 0px;
                        width: 0px;
                    }

                    .container__triangle--up {
                        border-color: transparent transparent rgba(0, 0, 0, 0.3);
                        border-width: 0px 8px 8px;
                    }

                    .container__triangle--right {
                        border-color: transparent transparent transparent rgba(0, 0, 0, 0.3);
                        border-width: 8px 0px 8px 8px;
                    }

                    .container__triangle--down {
                        border-color: rgba(0, 0, 0, 0.3) transparent transparent;
                        border-width: 8px 8px 0px;
                    }

                    .container__triangle--left {
                        border-color: transparent rgba(0, 0, 0, 0.3) transparent transparent;
                        border-width: 8px 8px 8px 0px;
                    }
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
            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.ArrowButtons, Pattern.PriceTag, Pattern.Voting]} />
        </PatternLayout>
    );
};

export default Details;
