/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Pattern from '../../constants/Pattern';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    const [visible, setVisible] = useState(false);
    const toggle = () => setVisible((v) => !v);

    return (
        <DetailsLayout pattern={Pattern.TogglePasswordVisibility}>
            <Helmet>
                <meta name="description" content="Create a toggle password visibility with CSS flexbox" />
                <meta name="keywords" content="css flexbox, toggle password visibility" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="container">
    <!-- Text input -->
    <input type="text" class="input" />

    <!-- Toggle button sticks to the right -->
    <button>
        ...
    </button>
</div>
`}
css={`
.container {
    display: flex;

    /* Border */
    border: 1px solid rgba(0, 0, 0, 0.3);
}

.input {
    border-color: transparent;
    /* Take available width */
    flex: 1;
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
                        <div style={{ width: '256px' }}>
                            <div
                                style={{
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '4px',
                                    display: 'flex',
                                }}
                            >
                                <input
                                    type={visible ? 'text' : 'password'}
                                    autoComplete="off"
                                    style={{
                                        borderColor: 'transparent',
                                        flex: 1,
                                        marginLeft: '1px',
                                        padding: '4px',
                                    }}
                                />
                                <button
                                    style={{ borderColor: 'transparent', marginRight: '1px', padding: '8px' }}
                                    onClick={toggle}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            fill: 'none',
                                            height: '24px',
                                            stroke: "rgba(0, 0, 0, 0.4)",
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            strokeWidth: 1,
                                            width: '24px',
                                        }}
                                    >
                                        <path
                                            d={
                                                visible
                                                ? `M19.518,8.288C20.993,9.357,22.331,10.603,23.5,12c0,0-5.148,6.5-11.5,6.5c-1.017-0.006-2.028-0.162-3-0.464 M4.468,15.7C2.998,14.634,1.666,13.392,0.5,12c0,0,5.148-6.5,11.5-6.5c0.844,0.004,1.683,0.113,2.5,0.325 M8,12 c0-2.209,1.791-4,4-4 M16,12c0,2.209-1.791,4-4,4 M21.75,2.25l-19.5,19.5`
                                                : `M23.5,12c0,0-5.148,6.5-11.5,6.5S0.5,12,0.5,12S5.648,5.5,12,5.5S23.5,12,23.5,12z M12,8c2.209,0,4,1.791,4,4 s-1.791,4-4,4s-4-1.791-4-4S9.791,8,12,8z M12,10c1.105,0,2,0.895,2,2s-0.895,2-2,2s-2-0.895-2-2`
                                            }
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;
