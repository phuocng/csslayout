/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    const [value, setValue] = useState(0);
    const decrease = () => setValue(value - 1);
    const increase = () => setValue(value + 1);
    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = parseInt(e.target.value, 10);
        const newValue = isNaN(v) ? 0 : v;
        setValue(newValue);
    };

    return (
        <DetailsLayout title="Stepper input">
            <Helmet>
                <meta name="description" content="Create a stepper input with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css stepper input" />
            </Helmet>
            <div style={{ padding: '64px 32px' }}>
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
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    height: '32px',
                                    width: '128px',
                                }}
                            >
                                <button
                                    style={{
                                        alignItems: 'center',
                                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                        borderColor: 'transparent',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        width: '32px',
                                    }}
                                    onClick={decrease}
                                >
                                    -
                                </button>
                                <div
                                    style={{
                                        borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                        flex: 1,
                                        height: '100%',
                                    }}
                                >
                                    <input
                                        type="text"
                                        style={{
                                            borderColor: 'transparent',
                                            height: '100%',
                                            padding: '8px',
                                            width: '100%',
                                        }}
                                        value={value}
                                        onChange={change}
                                    />
                                </div>
                                <button
                                    style={{
                                        alignItems: 'center',
                                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                        borderColor: 'transparent',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        width: '32px',
                                    }}
                                    onClick={increase}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    display: flex;

    /* Border */
    border: 1px solid rgba(0, 0, 0, .3);

    /* Size */
    height: 32px;
    width: 128px;
">
    <!-- Minus button -->
    <button style="
        /* Center the content */
        align-items: center;
        display: flex;
        justify-content: center;

        /* Size */
        width: 32px;
    ">-</button>

    <!-- Input container -->
    <div style="flex: 1">
        <input type="text" style="
            /* Take full size of its container */
            height: 100%;
            width: 100%;
        " />
    </div>

    <!-- Plus button -->
    <button style="
        /* Center the content */
        align-items: center;
        display: flex;
        justify-content: center;

        /* Size */
        width: 32px;
    ">+</button>
</div>
`}
                />
            </div>
            <RelatedPatterns patterns={[Pattern.SpinButton]} />
        </DetailsLayout>
    );
};

export default Details;
