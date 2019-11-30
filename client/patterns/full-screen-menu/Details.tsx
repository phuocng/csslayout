import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Full screen menu">
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
                            <button
                                style={{
                                    backgroundColor: 'transparent',
                                    borderColor: 'transparent',
                                    padding: 0,
                                    position: 'absolute',
                                    right: '16px',
                                    top: '16px',
                                }}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    style={{
                                        fill: 'none',
                                        height: 24,
                                        stroke: '#000',
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round',
                                        strokeWidth: 1,
                                        width: 24,
                                    }}
                                >
                                    <path
                                        d={`M7,16.999l10-10
                                        M17,16.999l-10-10
                                        M12,0.499c6.351,0,11.5,5.149,11.5,11.5s-5.149,11.5-11.5,11.5
                                        S0.5,18.35,0.5,11.999S5.649,0.499,12,0.499z`}
                                    />
                                </svg>
                            </button>
                            <div
                                style={{
                                    alignItems: 'center',
                                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    justifyContent: 'center',
                                    left: 0,
                                    position: 'absolute',
                                    top: 0,
                                    width: '100%',
                                }}
                            >
                                <ul
                                    style={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        listStyleType: 'none',
                                        margin: 0,
                                        padding: 0,
                                    }}
                                >
                                    <li style={{ marginBottom: '16px', width: '256px' }}><Rectangle /></li>
                                    <li style={{ marginBottom: '16px', width: '144px' }}><Rectangle /></li>
                                    <li style={{ marginBottom: '16px', width: '128px' }}><Rectangle /></li>
                                    <li style={{ width: '160px' }}><Rectangle /></li>
                                </ul>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Full screen overlay */
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;

    /* Content is centered */
    align-items: center;
    display: flex;
    justify-content: center;
">
    <!-- The close button -->
    <button style="
        /* Shown at top right corner */
        position: absolute;
        right: 16px;
        top: 16px;
    ">
        ...
    </button>

    <!-- The navigation menu -->
    <ul>
        ...
    </ul>
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
