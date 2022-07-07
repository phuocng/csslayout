import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';
import { removeIndent } from '../../utils/removeIndent';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.Menu}>
            <Head>
                <meta name="description" content="Create a menu with CSS flexbox" />
                <meta name="og:description" content="Create a menu with CSS flexbox" />
                <meta name="twitter:description" content="Create a menu with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css menu" />
            </Head>
            <BrowserFrame
                html={`
<div class="menu">
    <!-- Normal menu item -->
    <div class="menu__item">
        ...
    </div>

    <!-- With hot key -->
    <div class="menu__item">
        <!-- Label -->
        ...
        <!-- Hot key -->
        <div class="menu__hotkey">
            ...
        </div>
    </div>

    <!-- With image and hot key -->
    <div class="menu__item">
        <!-- Image -->
        ...

        <!-- Label -->
        ...

        <!-- Hot key -->
        <div class="menu__hotkey">
            ...
        </div>
    </div>

    <!-- Divider -->
    <div class="menu__divider"></div>
</div>
`}
                css={removeIndent`
                    .menu {
                        display: flex;
                        flex-direction: column;

                        /* Border */
                        border: 1px solid rgba(0, 0, 0, 0.3);
                        border-radius: 4px;
                    }

                    .menu__item {
                        /* Center the content horizontally */
                        align-items: center;
                        display: flex;
                    }

                    .menu__hotkey {
                        /* Push the hot key to the right */
                        margin-left: auto;
                    }

                    .menu__divider {
                        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
                        height: 1px;
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
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '4px',
                            width: '40%',
                        }}
                    >
                        <div
                            className="p-menu-item"
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                height: '32px',
                                padding: '0 8px',
                            }}
                        >
                            <div style={{ width: '40%' }}>
                                <Rectangle />
                            </div>
                        </div>
                        <div
                            className="p-menu-item"
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                height: '32px',
                                padding: '0 8px',
                            }}
                        >
                            <Circle />
                            <div style={{ marginLeft: '4px', width: '50%' }}>
                                <Rectangle />
                            </div>
                        </div>
                        <div
                            className="p-menu-item"
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                height: '32px',
                                justifyContent: 'space-between',
                                padding: '0 8px',
                            }}
                        >
                            <div style={{ width: '30%' }}>
                                <Rectangle />
                            </div>
                            <div>Ctrl + X</div>
                        </div>
                        <div
                            className="p-menu-item"
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                height: '32px',
                                justifyContent: 'space-between',
                                padding: '0 8px',
                            }}
                        >
                            <div style={{ width: '70%' }}>
                                <Rectangle />
                            </div>
                            <div>Ctrl + C</div>
                        </div>
                        <div
                            className="p-menu-item"
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                height: '32px',
                                justifyContent: 'space-between',
                                padding: '0 8px',
                            }}
                        >
                            <div style={{ width: '20%' }}>
                                <Rectangle />
                            </div>
                            <Circle />
                        </div>
                        <div
                            className="p-menu-item"
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                height: '32px',
                                justifyContent: 'space-between',
                                padding: '0 8px',
                            }}
                        >
                            <div style={{ alignItems: 'center', display: 'flex', width: '80%' }}>
                                <Circle />
                                <div style={{ marginLeft: '4px', width: '50%' }}>
                                    <Rectangle />
                                </div>
                            </div>
                            <Circle />
                        </div>
                        <div style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.3)', height: '1px' }} />
                        <div
                            className="p-menu-item"
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                height: '32px',
                                justifyContent: 'space-between',
                                padding: '0 8px',
                            }}
                        >
                            <div style={{ width: '40%' }}>
                                <Rectangle />
                            </div>
                            <div>Ctrl + V</div>
                        </div>
                    </div>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />

            <RelatedPatterns
                patterns={[
                    Pattern.DotLeader,
                    Pattern.MegaMenu,
                    Pattern.NestedDropdowns,
                    Pattern.PropertyList,
                    Pattern.SplitNavigation,
                ]}
            />
        </PatternLayout>
    );
};

export default Details;
