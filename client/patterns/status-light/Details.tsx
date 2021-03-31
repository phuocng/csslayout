/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import Heading from '../../components/Heading';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.StatusLight}>
            <Helmet>
                <meta name="description" content="Create a status light with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css status light" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div style="
    /* Center the content */
    align-items: center;
    display: flex;
">
    <!-- Status light -->
    <div style="
        /* Background color */
        background-color: rgb(66, 153, 225);

        /* Rounded border */
        border-radius: 9999px;

        /* Size */
        height: 8px;
        width: 8px;

        /* Spacing */
        margin-right: 8px;
    "></div>

    <!-- Content -->
    <div style="
        /* Take available width */
        flex: 1;
    ">
        ...
    </div>
</div>
`}
css={``}
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
                                display: 'inline-flex',
                                width: '150px',
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: '#4299e1',
                                    borderRadius: '9999px',
                                    height: '8px',
                                    marginRight: '8px',
                                    width: '8px',
                                }}
                            />

                            <div style={{ flex: 1 }}>
                                <Rectangle />
                            </div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>

            <section>
                <Heading title="Use cases" />

                <div style={{ padding: '48px' }}>
                    <div
                        style={{
                            alignItems: 'center',
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            display: 'flex',
                            height: '500px',
                            justifyContent: 'center',
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    marginBottom: '12px',
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: '#f56565',
                                        borderRadius: '9999px',
                                        height: '8px',
                                        marginRight: '8px',
                                        width: '8px',
                                    }}
                                />

                                In review
                            </div>

                            <div
                                style={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    marginBottom: '12px',
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: '#a0aec0',
                                        borderRadius: '9999px',
                                        height: '8px',
                                        marginRight: '8px',
                                        width: '8px',
                                    }}
                                />

                                Draft
                            </div>

                            <div
                                style={{
                                    alignItems: 'center',
                                    display: 'flex',
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: '#4299e1',
                                        borderRadius: '9999px',
                                        height: '8px',
                                        marginRight: '8px',
                                        width: '8px',
                                    }}
                                />

                                Published
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </DetailsLayout>
    );
};

export default Details;
