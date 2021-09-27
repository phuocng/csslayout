import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';
import Triangle from '../../placeholders/Triangle';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.MegaMenu}>
            <Head>
                <meta name="description" content="Create a mega menu with CSS" />
                <meta name="og:description" content="Create a mega menu with CSS" />
                <meta name="twitter:description" content="Create a mega menu with CSS" />
                <meta name="keywords" content="css mega menu" />
            </Head>
            <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                Move the mouse over the second navigation item to see the mega menu.
            </div>
            <BrowserFrame
                html={`
<div class="container">
    <!-- Item -->
    ...

    <!-- An item that triggers displaying the mega menu -->
    <div class="container__trigger">
        <!-- The trigger item's content -->
        <div>...</div>

        <!-- Mega menu -->
        <div class="container__content">
            ...
        </div>
    </div>
</div>
`}
                css={`
                    .container {
                        /* Used to position the mega menu */
                        position: relative;
                    }

                    .container__trigger:hover .container__content {
                        /* Show the mega menu when hovering the trigger item */
                        display: block;
                    }

                    .container__content {
                        /* Border */
                        border: 1px solid rgba(0, 0, 0, 0.3);
                        margin-top: -1px;

                        /* Hidden by default */
                        display: none;

                        /* Absolute position */
                        left: 0px;
                        position: absolute;
                        top: 100%;

                        /* Take full width */
                        width: 100%;

                        /* Displayed on top of other elements */
                        background: #fff;
                        z-index: 9999;
                    }
                `}
            >
                <div style={{ padding: '8px' }}>
                    <div className="p-mega-menu-container">
                        <div
                            style={{
                                alignItems: 'center',
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                display: 'inline-flex',
                                justifyContent: 'center',
                            }}
                        >
                            <div
                                style={{
                                    borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                    padding: '16px',
                                    width: '150px',
                                }}
                            >
                                <Rectangle />
                            </div>
                            <div
                                className="p-mega-menu-trigger"
                                style={{
                                    borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                    width: '180px',
                                }}
                            >
                                <div style={{ display: 'flex', padding: '16px' }}>
                                    <div style={{ flex: 1, marginRight: '8px' }}>
                                        <Rectangle />
                                    </div>
                                    <Triangle size={8} corner="b" />
                                </div>
                                <div className="p-mega-menu-content">
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ flex: 1, padding: '16px' }}>
                                            <Block numberOfBlocks={10} />
                                        </div>
                                        <div style={{ flex: 1, padding: '16px' }}>
                                            <Block numberOfBlocks={6} />
                                        </div>
                                        <div style={{ flex: 1, padding: '16px' }}>
                                            <Block numberOfBlocks={8} />
                                        </div>
                                        <div style={{ flex: 1, padding: '16px' }}>
                                            <Block numberOfBlocks={6} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: '16px',
                                    width: '120px',
                                }}
                            >
                                <Rectangle />
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '16px' }}>
                        <Block numberOfBlocks={10} />
                    </div>
                </div>
            </BrowserFrame>
            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.Dropdown, Pattern.Menu, Pattern.NestedDropdowns]} />
        </PatternLayout>
    );
};

export default Details;
