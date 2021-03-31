/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Pattern from '../../constants/Pattern';

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
        <DetailsLayout pattern={Pattern.Tab}>
            <Helmet>
                <meta name="description" content="Create tabs with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css navigation, css tab" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="tabs">
    <!-- Active tab -->
    <div class="tab--active">
        ...
    </div>

    <!-- Inactive tab -->
    <div class="tab--inactive">
        ...
    </div>
</div>
`}
css={`
.tabs {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;
}

.tab--active {
    /* Border */
    border: 1px solid rgba(0, 0, 0, 0.3);
    /* Hide the bottom border */
    border-bottom-color: transparent;

    /* Border radius */
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
}

.tab--inactive {
    /* Has only the bottom border */
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
`}
                >
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
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;
