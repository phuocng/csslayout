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
        <PatternLayout pattern={Pattern.ValidationIcon}>
            <Head>
                <meta name="description" content="Add validation icons to input with CSS" />
                <meta name="og:description" content="Add validation icons to input with CSS" />
                <meta name="twitter:description" content="Add validation icons to input with CSS" />
                <meta name="keywords" content="css validation icon" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <!-- The input -->
    <input class="${prefix}${container}__input" />

    <!-- The icon container -->
    <span class="${prefix}${container}__icon">
        <!-- The SVG icon represents any state such as valid, invalid, loading, etc. -->
        ...
    </span>
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    /* Used to position the validation icon */
    position: relative;
}

.${prefix}${container}__input {
    /* Border */
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;

    /* Take the full width */
    width: 100%;

    /* Don't overlap the icon */
    padding-right: 24px;
}

.${prefix}${container}__icon {
    /* Positioned at the right side */
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translate(0, -50%);

    z-index: 10;
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
                            marginBottom: '16px',
                            position: 'relative',
                            width: '200px',
                        }}
                    >
                        <input
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                borderRadius: '4px',
                                height: '32px',
                                paddingRight: '24px',
                                width: '100%',
                            }}
                        />
                        <i
                            style={{
                                position: 'absolute',
                                right: '8px',
                                top: '50%',
                                transform: 'translate(0, -50%)',
                                zIndex: 10,
                            }}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                style={{
                                    fill: 'none',
                                    height: '16px',
                                    stroke: 'rgba(0, 0, 0, 0.5)',
                                    strokeLinecap: 'round',
                                    strokeLinejoin: 'round',
                                    strokeWidth: 2,
                                    width: '16px',
                                }}
                            >
                                <path d={`M23.5,0.499l-16.5,23l-6.5-6.5`} />
                            </svg>
                        </i>
                    </div>

                    <div
                        style={{
                            marginBottom: '16px',
                            position: 'relative',
                            width: '200px',
                        }}
                    >
                        <input
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                borderRadius: '4px',
                                height: '32px',
                                paddingRight: '24px',
                                width: '100%',
                            }}
                        />
                        <i
                            style={{
                                position: 'absolute',
                                right: '8px',
                                top: '50%',
                                transform: 'translate(0, -50%)',
                                zIndex: 10,
                            }}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                style={{
                                    fill: 'none',
                                    height: '16px',
                                    stroke: '#e7040f',
                                    strokeLinecap: 'round',
                                    strokeLinejoin: 'round',
                                    strokeWidth: 2,
                                    width: '16px',
                                }}
                            >
                                <path d={`M0.5,0.499l23,23 M23.5,0.499l-23,23`} />
                            </svg>
                        </i>
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;
