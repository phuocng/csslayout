import React, { useState } from 'react';

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
        <DetailsLayout title="Spin button">
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
                    )}
                    source={`
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
                />
            </div>
            <RelatedPatterns patterns={[Pattern.StepperInput]} />
        </DetailsLayout>
    );
};

export default Details;
