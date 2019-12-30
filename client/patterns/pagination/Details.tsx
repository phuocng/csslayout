/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Pagination">
            <Helmet>
                <meta name="description" content="Create a pagination with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css pagination" />
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
                                    display: 'flex',
                                }}
                            >
                                <div
                                    style={{
                                        alignItems: 'center',
                                        borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        padding: '8px',
                                        width: '128px',
                                    }}
                                >
                                    <Rectangle />
                                </div>
                                <div
                                    style={{
                                        alignItems: 'center',
                                        borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        padding: '8px',
                                    }}
                                >
                                    <Circle size={16} />
                                </div>
                                <div
                                    style={{
                                        alignItems: 'center',
                                        borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        padding: '8px',
                                    }}
                                >
                                    <Circle size={16} />
                                </div>
                                <div
                                    style={{
                                        alignItems: 'center',
                                        borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        padding: '8px',
                                    }}
                                >
                                    <Circle size={16} />
                                </div>
                                <div
                                    style={{
                                        alignItems: 'center',
                                        borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        padding: '8px',
                                    }}
                                >
                                    <Circle size={16} />
                                </div>
                                <div
                                    style={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        padding: '8px',
                                        width: '64px',
                                    }}
                                >
                                    <Rectangle />
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    display: flex;

    /* Border */
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
">
    <!-- Pagination item -->
    <div style="
        /* Center the content */
        align-items: center;
        display: flex;
        justify-content: center;

        /* Right border */
        border-right: 1px solid rgba(0, 0, 0, 0.3);
    ">
        ...
    </div>

    <!-- Don't set the right border for the last item -->
    <div style="
        /* Center the content */
        align-items: center;
        display: flex;
        justify-content: center;

        /* No right border */
        border-right: none;
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
