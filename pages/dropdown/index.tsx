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
        <PatternLayout pattern={Pattern.Dropdown}>
            <Head>
                <meta name="description" content="Create a dropdown with CSS" />
                <meta name="og:description" content="Create a dropdown with CSS" />
                <meta name="twitter:description" content="Create a dropdown with CSS" />
                <meta name="keywords" content="css dropdown, css menu" />
            </Head>
            <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                Move the mouse over the button to see the dropdown.
            </div>
            <BrowserFrame
                html={`
<div class="dropdown">
    <!-- The trigger element -->
    <button>...</button>

    <!-- The content -->
    <div class="dropdown__content">
        ...
    </div>
</div>
`}
                css={`
                    .dropdown {
                        position: relative;
                    }

                    /* Hide the dropdown's content by default */
                    .dropdown__content {
                        display: none;

                        /* Position it right below the trigger element */
                        left: 0;
                        padding-top: 4px;
                        position: absolute;
                        top: 100%;

                        /* It should be on the top of other elements */
                        background-color: #fff;
                        z-index: 9999;

                        /* Size */
                        height: 200px;
                        width: 200px;
                    }

                    /* Show the content when hover on the container */
                    .dropdown:hover .dropdown__content {
                        display: block;
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
                        className="p-dropdown"
                        style={{
                            position: 'relative',
                        }}
                    >
                        <button
                            style={{
                                alignItems: 'center',
                                border: '1px solid #d1d5db',
                                borderRadius: '4px',
                                display: 'flex',
                                height: '32px',
                                width: '128px',
                            }}
                        >
                            <span style={{ flex: 1, marginRight: '8px' }}>
                                <Rectangle />
                            </span>
                            <Triangle size={8} corner="b" />
                        </button>

                        <div
                            className="p-dropdown-content"
                            style={{
                                backgroundColor: '#FFF',
                                height: '200px',
                                left: 0,
                                paddingTop: '4px',
                                position: 'absolute',
                                top: '100%',
                                width: '200px',
                                zIndex: 9999,
                            }}
                        >
                            <div
                                style={{
                                    alignItems: 'center',
                                    border: '1px solid #d1d5db',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    height: '100%',
                                    justifyContent: 'center',
                                    padding: '16px',
                                    width: '100%',
                                }}
                            >
                                <Block numberOfBlocks={10} justify="center" />
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            marginTop: '16px',
                            width: '256px',
                        }}
                    >
                        <Block numberOfBlocks={20} justify="center" />
                    </div>
                </div>
            </BrowserFrame>
            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.MegaMenu, Pattern.Menu, Pattern.NestedDropdowns]} />
        </PatternLayout>
    );
};

export default Details;
