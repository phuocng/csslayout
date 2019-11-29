import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Upload button">
            <div style={{ padding: '64px 32px' }}>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    You can click the button to choose a file.
                </div>
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
                            <div style={{ width: '128px' }}>
                                <div
                                    style={{
                                        alignItems: 'center',
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderRadius: '4px',
                                        display: 'flex',
                                        padding: '8px',
                                        position: 'relative',
                                        width: '100%',
                                    }}
                                >
                                    <input
                                        type="file"
                                        style={{
                                            height: '100%',
                                            left: 0,
                                            opacity: 0,
                                            position: 'absolute',
                                            top: 0,
                                            width: '100%',
                                        }}
                                    />
                                    <div style={{ marginRight: '8px' }}>
                                        <svg
                                            viewBox="0 0 24 24"
                                            style={{
                                                fill: "none",
                                                height: '24',
                                                stroke: "rgba(0, 0, 0, 0.4)",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 1,
                                                width: '24',
                                            }}
                                        >
                                            <path
                                                d={`M18.5,7.5c0.275,0,0.341-0.159,0.146-0.354l-6.292-6.292c-0.195-0.196-0.512-0.196-0.707-0.001
                                                c0,0-0.001,0.001-0.001,0.001L5.354,7.147C5.154,7.342,5.225,7.501,5.5,7.501h3v10c0,0.552,0.448,1,1,1h5c0.552,0,1-0.448,1-1V7.5
                                                H18.5z
                                                M23.5,18.5v4c0,0.552-0.448,1-1,1h-21c-0.552,0-1-0.448-1-1v-4`}
                                            />
                                        </svg>
                                    </div>
                                    <Rectangle />
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Used to position the input */
    position: relative;

    /* Content is centered */
    align-items: center;
    display: flex;

    /* Border */
    border: 1px solid rgba(0, 0, 0, 0.3);
">
    <!-- The real file input -->
    <input
        type="file"
        style="
            /* Take the full size */
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;

            /* Make it transparent */
            opacity: 0;
        "
    />

    <!-- The upload icon -->
    <div style="margin-right: 8px">...</div>

    <!-- The label -->
    ...
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
