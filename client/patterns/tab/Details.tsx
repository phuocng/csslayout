import React, { useState } from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

interface TabProps {
    tabIndex: number;
}

const Details: React.FC<{}> = () => {
    const [activeTab, setActiveTab] = useState(0);

    const Tab: React.FC<TabProps> = ({ tabIndex, children }) => {
        const isActive = tabIndex === activeTab;
        const click = () => setActiveTab(tabIndex);
        return (
            <div
                style={{
                    [isActive ? 'border' : 'borderBottom']: '1px solid rgba(0, 0, 0, 0.3)',
                    borderBottomColor: isActive ? 'transparent' : 'rgba(0, 0, 0, 0.3)',
                    borderTopLeftRadius: '4px',
                    borderTopRightRadius: '4px',
                    cursor: 'pointer',
                    padding: '16px',
                }}
                onClick={click}
            >
                {children}
            </div>
        );
    };

    return (
        <DetailsLayout title="Tab">
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
                                    alignItems: 'center',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Tab tabIndex={0}>
                                    <div style={{ width: '64px' }}>
                                        <Rectangle height={8} />
                                    </div>
                                </Tab>
                                <Tab tabIndex={1}>
                                    <div style={{ width: '32px' }}>
                                        <Rectangle height={8} />
                                    </div>
                                </Tab>
                                <Tab tabIndex={2}>
                                    <div style={{ width: '128px' }}>
                                        <Rectangle height={8} />
                                    </div>
                                </Tab>
                            </div>
                        </div>
                    )}
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
