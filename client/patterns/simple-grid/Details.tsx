import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Simple grid">
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
                            <div style={{ width: '60%' }}>
                                <div style={{ display: 'flex', margin: '0 -8px 8px -8px' }}>
                                    <div style={{ flex: '1', padding: '0 8px' }}>
                                        <Rectangle height={32} />
                                    </div>
                                    <div style={{ flex: '1', padding: '0 8px' }}>
                                        <Rectangle height={32} />
                                    </div>
                                </div>

                                <div style={{ display: 'flex', margin: '0 -8px 32px -8px' }}>
                                    <div style={{ flex: '0 0 50%', padding: '0 8px' }}>
                                        <Rectangle height={32} />
                                    </div>
                                    <div style={{ flex: '1', padding: '0 8px' }}>
                                        <Rectangle height={32} />
                                    </div>
                                    <div style={{ flex: '1', padding: '0 8px' }}>
                                        <Rectangle height={32} />
                                    </div>
                                </div>

                                <div style={{ display: 'flex', margin: '0 -8px 8px -8px' }}>
                                    <div style={{ flex: '1', padding: '0 8px' }}>
                                        <Rectangle height={32} />
                                    </div>
                                    <div style={{ flex: '1', padding: '0 8px' }}>
                                        <Rectangle height={32} />
                                    </div>
                                    <div style={{ flex: '1', padding: '0 8px' }}>
                                        <Rectangle height={32} />
                                    </div>
                                </div>

                                <div style={{ display: 'flex', margin: '0 -8px 32px -8px' }}>
                                    <div style={{ flex: '0 0 33.3333%', padding: '0 8px' }}>
                                        <Rectangle height={32} />
                                    </div>
                                    <div style={{ flex: '1', padding: '0 8px' }}>
                                        <Rectangle height={32} />
                                    </div>
                                </div>

                                <div style={{ display: 'flex', margin: '0 -8px 8px -8px' }}>
                                    <div style={{ flex: '1', padding: '0 8px' }}>
                                        <Rectangle height={32} />
                                    </div>
                                    <div style={{ flex: '1', padding: '0 8px' }}>
                                        <Rectangle height={32} />
                                    </div>
                                    <div style={{ flex: '1', padding: '0 8px' }}>
                                        <Rectangle height={32} />
                                    </div>
                                    <div style={{ flex: '1', padding: '0 8px' }}>
                                        <Rectangle height={32} />
                                    </div>
                                </div>

                                <div style={{ display: 'flex', margin: '0 -8px 0 -8px' }}>
                                    <div style={{ flex: '0 0 25%', padding: '0 8px' }}>
                                        <Rectangle height={32} />
                                    </div>
                                    <div style={{ flex: '1', padding: '0 8px' }}>
                                        <Rectangle height={32} />
                                    </div>
                                    <div style={{ flex: '0 0 33.3333%', padding: '0 8px' }}>
                                        <Rectangle height={32} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<!-- Row -->
<div style="
    display: flex;

    margin-left: -8px;
    margin-right: -8px;
">
    <!--Cell with given width. Replace 25% with whatever you want -->
    <div style="
        flex: 0 0 25%;
        padding-left: 8px;
        padding-right: 8px;
    ">25%</div>

    <!-- Cell that takes remaining width -->
    <div style="
        flex: 1;
        padding-left: 8px;
        padding-right: 8px;
    ">
        ...
    </div>
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
