import React, { useState } from 'react';

import useInterval from '../../hooks/useInterval';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    const [progress, setProgress] = useState(0);
    useInterval(() => {
        setProgress((v) => v === 100 ? 0 : v + 1);
    }, 1 * 100);

    return (
        <DetailsLayout title="Progress bar">
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
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    borderRadius: '9999px',
                                    height: '16px',
                                    width: '50%',
                                }}
                            >
                                <div
                                    style={{
                                        alignItems: 'center',
                                        backgroundColor: '#357EDD',
                                        borderRadius: '9999px',
                                        color: '#FFF',
                                        display: 'flex',
                                        fontSize: '12px',
                                        height: '100%',
                                        justifyContent: 'center',
                                        padding: '4px',
                                        width: `${progress}%`,
                                    }}
                                >
                                    {progress}%
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Colors */
    background-color: rgba(0, 0, 0, .1);

    /* Rounded border */
    border-radius: 9999px;
">
    <div style="
        /* Content is centered */
        align-items: center;
        display: flex;
        justify-content: center;

        /* Colors */
        background-color: #357edd;
        color: #fff;

        /* Rounded border */
        border-radius: 9999px;

        /* Width based on the number of percentages */
        width: 40%;
    ">
        <!-- The number of percentages -->
        40%
    </div>
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
