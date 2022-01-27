import * as React from 'react';
import Head from 'next/head';

import { PrefixContext } from '../../context/prefixContext';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

interface TabProps {
    tabIndex: number;
}

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'tabs';

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
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <!-- Active tab -->
    <div class="${prefix}${container}__tab--active">
        ...
    </div>

    <!-- Inactive tab -->
    <div class="${prefix}${container}__tab--inactive">
        ...
    </div>
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;
}

.${prefix}${container}__tab--active {
    /* Border */
    border: 1px solid rgba(0, 0, 0, 0.3);
    /* Hide the bottom border */
    border-bottom-color: transparent;

    /* Border radius */
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
}

.${prefix}${container}__tab--inactive {
    /* Has only the bottom border */
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
`
                }
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
