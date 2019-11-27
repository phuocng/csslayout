import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Previous and next buttons">
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
                            <div style={{ width: '50%' }}>
                                <div
                                    style={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        height: '32px',
                                        justifyContent: 'space-between',
                                        padding: '8px',
                                        width: '100%',
                                    }}
                                >
                                    <a
                                        style={{
                                            alignItems: 'center',
                                            border: '1px solid rgba(0, 0, 0, 0.3)',
                                            borderRadius: '4px',
                                            display: 'flex',
                                            padding: '8px',
                                            width: '30%',
                                        }}
                                    >
                                        <div style={{ marginRight: '8px' }}>&lt;</div>
                                        <Rectangle />
                                    </a>
                                    <a
                                        style={{
                                            alignItems: 'center',
                                            border: '1px solid rgba(0, 0, 0, 0.3)',
                                            borderRadius: '4px',
                                            display: 'flex',
                                            padding: '8px',
                                            width: '30%',
                                        }}
                                    >
                                        <Rectangle />
                                        <div style={{ marginLeft: '8px' }}>&gt;</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    align-items: center;
    display: flex;
    justify-content: space-between;
">
    <!-- Previous link sticks to the left -->
    <a>..</a>

    <!-- Next link sticks to the right -->
    <a>..</a>
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
