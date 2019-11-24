import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Simple grid">
            <div className="ph4 pv5">
                <BrowserFrame
                    content={
                        <div className="h-100 flex flex-column items-center justify-center">
                            <div className="w-60">
                                <div className="flex" style={{ margin: '0 -8px 8px -8px' }}>
                                    <div className="ph2" style={{ flex: '1' }}>
                                        <Rectangle height={32} />
                                    </div>
                                    <div className="ph2" style={{ flex: '1' }}>
                                        <Rectangle height={32} />
                                    </div>
                                </div>

                                <div className="flex" style={{ margin: '0 -8px 32px -8px' }}>
                                    <div className="ph2" style={{ flex: '0 0 50%' }}>
                                        <Rectangle height={32} />
                                    </div>
                                    <div className="ph2" style={{ flex: '1' }}>
                                        <Rectangle height={32} />
                                    </div>
                                    <div className="ph2" style={{ flex: '1' }}>
                                        <Rectangle height={32} />
                                    </div>
                                </div>

                                <div className="flex" style={{ margin: '0 -8px 8px -8px' }}>
                                    <div className="ph2" style={{ flex: '1' }}>
                                        <Rectangle height={32} />
                                    </div>
                                    <div className="ph2" style={{ flex: '1' }}>
                                        <Rectangle height={32} />
                                    </div>
                                    <div className="ph2" style={{ flex: '1' }}>
                                        <Rectangle height={32} />
                                    </div>
                                </div>

                                <div className="flex" style={{ margin: '0 -8px 32px -8px' }}>
                                    <div className="ph2" style={{ flex: '0 0 33.3333%' }}>
                                        <Rectangle height={32} />
                                    </div>
                                    <div className="ph2" style={{ flex: '1' }}>
                                        <Rectangle height={32} />
                                    </div>
                                </div>

                                <div className="flex" style={{ margin: '0 -8px 8px -8px' }}>
                                    <div className="ph2" style={{ flex: '1' }}>
                                        <Rectangle height={32} />
                                    </div>
                                    <div className="ph2" style={{ flex: '1' }}>
                                        <Rectangle height={32} />
                                    </div>
                                    <div className="ph2" style={{ flex: '1' }}>
                                        <Rectangle height={32} />
                                    </div>
                                    <div className="ph2" style={{ flex: '1' }}>
                                        <Rectangle height={32} />
                                    </div>
                                </div>

                                <div className="flex" style={{ margin: '0 -8px 0 -8px' }}>
                                    <div className="ph2" style={{ flex: '0 0 25%' }}>
                                        <Rectangle height={32} />
                                    </div>
                                    <div className="ph2" style={{ flex: '1' }}>
                                        <Rectangle height={32} />
                                    </div>
                                    <div className="ph2" style={{ flex: '0 0 33.3333%' }}>
                                        <Rectangle height={32} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
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
