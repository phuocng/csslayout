/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import './menu.css';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Menu">
            <Helmet>
                <meta name="description" content="Create a menu with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css menu" />
            </Helmet>
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
                                    <div style={{ width: '40%' }}><Rectangle /></div>
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
                                    <div style={{ marginLeft: '4px', width: '50%' }}><Rectangle /></div>
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
                                    <div style={{ width: '30%' }}><Rectangle /></div>
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
                                    <div style={{ width: '70%' }}><Rectangle /></div>
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
                                    <div style={{ width: '20%' }}><Rectangle /></div>
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
                                        <div style={{ marginLeft: '4px', width: '50%' }}><Rectangle /></div>
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
                                    <div style={{ width: '40%' }}><Rectangle /></div>
                                    <div>Ctrl + V</div>
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    display: flex;
    flex-direction: column;

    /* Border */
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
">
    <!-- Normal menu item -->
    <div style="
        /* Center the content horizontally */
        align-items: center;
        display: flex;
    ">
        ...
    </div>

    <!-- With hot key -->
    <div style="
        align-items: center;
        display: flex;
        /* Push the hot key to the right */
        justify-content: space-between;
    ">
        <!-- Label -->
        ...
        <!-- Hot key -->
        ...
    </div>

    <!-- With image and hot key -->
    <div style="
        align-items: center;
        display: flex;
        /* Push the hot key to the right */
        justify-content: space-between;
    ">
        <div style="
            align-items: center;
            display: flex;
        ">
            <!-- Image -->
            ...
            <!-- Label -->
            ...
        </div>

        <!-- Hot key -->
        ...
    </div>

    <!-- Divider -->
    <div style="
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        height: 1px;
    " />
</div>
`}
                />
            </div>
            <RelatedPatterns
                patterns={[
                    Pattern.DotLeader,
                    Pattern.MegaMenu,
                    Pattern.NestedDropdowns,
                    Pattern.PropertyList,
                    Pattern.SplitNavigation,
                ]}
            />
        </DetailsLayout>
    );
};

export default Details;
