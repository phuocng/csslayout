import React, { useState } from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details = () => {
    const [activeTab, setActiveTab] = useState(0);

    const Tab = ({ tabIndex, children }) => {
        const isActive = tabIndex === activeTab;
        const click = () => setActiveTab(tabIndex);
        return (
            <div
                className={`pointer pa3 b--black-30 ${isActive ? 'ba br2 br--top' : 'bb'}`}
                style={{
                    borderBottomColor: isActive ? 'transparent' : '',
                }}
                onClick={click}
            >
                {children}
            </div>
        );
    };

    return (
        <DetailsLayout title="Tab">
            <div className="ph4 pv5">
                <BrowserFrame
                    content={
                        <div className="h-100 flex flex-column items-center justify-center">
                            <div className="flex items-center justify-center">
                                <Tab tabIndex={0}>
                                    <div className="w3">
                                        <Rectangle height={8} />
                                    </div>
                                </Tab>
                                <Tab tabIndex={1}>
                                    <div className="w2">
                                        <Rectangle height={8} />
                                    </div>
                                </Tab>
                                <Tab tabIndex={2}>
                                    <div className="w4">
                                        <Rectangle height={8} />
                                    </div>
                                </Tab>
                            </div>
                        </div>
                    }
                    source={`
<div style="
    /* Content is centered */
    align-items: center;
    display: flex;
    justify-content: center;
">
    <!-- Active tab -->
    <div style="
        /* Border */
        border: 1px solid rgba(0, 0, 0, 0.3);
        /* Hide the bottom border */
        border-bottom-color: transparent;

        /* Border radius */
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
    ">
        ...
    </div>

    <!-- Inactive tab -->
    <div style="
        /* Has only the bottom border */
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
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
