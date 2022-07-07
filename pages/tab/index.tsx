import * as React from 'react';
import Head from 'next/head';

import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';
import { removeIndent } from '../../utils/removeIndent';

interface TabProps {
    tabIndex: number;
}

const Details: React.FC<{}> = () => {
    const [activeTab, setActiveTab] = React.useState(0);

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
        <PatternLayout pattern={Pattern.Tab}>
            <Head>
                <meta name="description" content="Create tabs with CSS flexbox" />
                <meta name="og:description" content="Create tabs with CSS flexbox" />
                <meta name="twitter:description" content="Create tabs with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css navigation, css tab" />
            </Head>
            <BrowserFrame
                html={`
<div class="tabs">
    <!-- Active tab -->
    <div class="tabs__tab--active">
        ...
    </div>

    <!-- Inactive tab -->
    <div class="tabs__tab--inactive">
        ...
    </div>
</div>
`}
                css={removeIndent`
                    .tabs {
                        /* Center the content */
                        align-items: center;
                        display: flex;
                        justify-content: center;
                    }

                    .tabs__tab--active {
                        /* Border */
                        border: 1px solid rgba(0, 0, 0, 0.3);
                        /* Hide the bottom border */
                        border-bottom-color: transparent;

                        /* Border radius */
                        border-top-left-radius: 2px;
                        border-top-right-radius: 2px;
                    }

                    .tabs__tab--inactive {
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
        </PatternLayout>
    );
};

export default Details;
