import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Card">
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
                                padding: '16px',
                            }}
                        >
                            <div
                                style={{
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '256px',
                                }}
                            >
                                <Rectangle height={150} />
                                <div style={{ flex: 1, padding: '16px' }}>
                                    <div style={{ marginBottom: '16px' }}><Block numberOfBlocks={15} /></div>
                                    <div style={{ width: '128px' }}>
                                        <Rectangle height={32} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    display: flex;
    flex-direction: column;
">
    <!-- Cover -->
    <div style="
        height: 150px;
        width: 100%;
    ">
        ...
    </div>

    <!-- Content -->
    <div style="
        /* Take available height */
        flex: 1;
    ">
        ...
    </div>
    ...
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
