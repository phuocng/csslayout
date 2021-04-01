/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
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
        <DetailsLayout pattern={Pattern.Menu}>
            <Helmet>
                <meta name="description" content="Create a menu with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css menu" />
            </Helmet>
            <div className='p-8 pb-20'>
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
css={`
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
                </BrowserFrame>
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
