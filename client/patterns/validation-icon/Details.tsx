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
        <DetailsLayout pattern={Pattern.ValidationIcon}>
            <Helmet>
                <meta name="description" content="Add validation icons to input with CSS" />
                <meta name="keywords" content="css validation icon" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="container">
    <!-- The input -->
    <input class="container__input" />

    <!-- The icon container -->
    <span class="container__icon">
        <!-- The SVG icon represents any state such as valid, invalid, loading, etc. -->
        ...
    </span>
</div>
`}
css={`
.container {
    /* Used to position the validation icon */
    position: relative;
}

.container__input {
    /* Border */
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;

    /* Take the full width */
    width: 100%;

    /* Don't overlap the icon */
    padding-right: 24px;
}

.container__icon {
    /* Positioned at the right side */
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translate(0, -50%);

    z-index: 10;
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
                                        stroke: "rgba(0, 0, 0, 0.5)",
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
            </div>
        </DetailsLayout>
    );
};

export default Details;
