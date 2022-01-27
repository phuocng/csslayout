import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { PrefixContext } from '../../context/prefixContext';
import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'button';

    return (
        <PatternLayout pattern={Pattern.ArrowButtons}>
            <Head>
                <meta name="description" content="Create arrow buttons with CSS" />
                <meta name="og:description" content="Create arrow buttons with CSS" />
                <meta name="twitter:description" content="Create arrow buttons with CSS" />
                <meta name="keywords" content="css arrow buttons" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<!-- Up arrow button -->
<button class="${prefix}${container}">
    <!-- Arrow -->
    <div class="${prefix}${container}__arrow ${prefix}${container}__arrow--up"></div>

    <!-- Content -->
    ...
</button>

<!-- Right arrow button -->
<button class="${prefix}${container}">
    <!-- Content -->
    ...

    <!-- Arrow -->
    <div class="${prefix}${container}__arrow ${prefix}${container}__arrow--right"></div>
</button>

<!-- Down arrow button -->
<button class="${prefix}${container}">
    <!-- Arrow -->
    <div class="${prefix}${container}__arrow ${prefix}${container}__arrow--down"></div>

    <!-- Content -->
    ...
</button>

<!-- Left arrow button -->
<button class="${prefix}${container}">
    <!-- Arrow -->
    <div class="${prefix}${container}__arrow ${prefix}${container}__arrow--left"></div>

    <!-- Content -->
    ...
</button>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Spacing */
    padding: 8px;
}

.${prefix}${container}__arrow {
    /* Transparent background */
    background-color: transparent;

    /* Size */
    height: 12px;
    width: 12px;
}

.${prefix}${container}__arrow--up {
    /* Edges */
    border-left: 1px solid rgba(0, 0, 0, 0.3);
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    transform: translateY(25%) rotate(45deg);
}

.${prefix}${container}__arrow--right {
    /* Edges */
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    transform: translateX(-25%) rotate(45deg);
}

.${prefix}${container}__arrow--down {
    /* Edges */
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    transform: translateY(-25%) rotate(45deg);
}

.${prefix}${container}__arrow--left {
    /* Edges */
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    border-left: 1px solid rgba(0, 0, 0, 0.3);
    transform: translateX(25%) rotate(45deg);
}
                `
                }
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

            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.CloseButton, Pattern.PopoverArrow, Pattern.TriangleButtons]} />
        </PatternLayout>
    );
};

export default Details;
