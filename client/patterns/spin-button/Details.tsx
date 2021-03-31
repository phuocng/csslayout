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
import Triangle from '../../placeholders/Triangle';

const Details: React.FC<{}> = () => {
    const [value, setValue] = useState(0);
    const decrease = () => setValue(value - 1);
    const increase = () => setValue(value + 1);
    const change = (e: React.ChangeEvent<HTMLInputElement>) => setValue(parseInt(e.target.value, 10));

    return (
        <DetailsLayout pattern={Pattern.SpinButton}>
            <Helmet>
                <meta name="description" content="Create a spin button with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css spin button" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div style="
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    display: flex;
">
    <!-- Input -->
    <input type="text" style="
        border-color: transparent;
        margin-right: 4px;
        padding: 4px;
        width: 100px;
    " />

    <!-- Buttons container -->
    <div style="
        /* Content is centered vertically */
        display: flex;
        flex-direction: column;
        justify-content: center;
    ">
        <!-- Up button -->
        <button style="
            border-color: transparent;
            /* Make buttons have the same height */
            flex: 1,
        ">
            ...
        </button>

        <!-- Down button -->
        <button style="
            border-color: transparent;
            /* Make buttons have the same height */
            flex: 1,
        ">
            ...
        </button>
    </div>
</div>
`}
css={``}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            justifyContent: 'center',
                        }}
                    >
                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                borderRadius: '2px',
                                display: 'flex',
                            }}
                        >
                            <input
                                type="text"
                                style={{
                                    borderColor: 'transparent',
                                    marginRight: '4px',
                                    padding: '4px',
                                    width: '100px',
                                }}
                                value={value}
                                onChange={change}
                            />
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                }}
                            >
                                <button
                                    style={{
                                        borderColor: 'transparent',
                                        cursor: 'pointer',
                                        flex: 1,
                                        padding: '4px 4px 2px 4px',
                                    }}
                                    onClick={increase}
                                >
                                    <Triangle size={6} corner="t" />
                                </button>
                                <button
                                    style={{
                                        borderColor: 'transparent',
                                        cursor: 'pointer',
                                        flex: 1,
                                        padding: '2px 4px 4px 4px',
                                    }}
                                    onClick={decrease}
                                >
                                    <Triangle size={6} corner="b" />
                                </button>
                            </div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>
            <RelatedPatterns patterns={[Pattern.StepperInput]} />
        </DetailsLayout>
    );
};

export default Details;
