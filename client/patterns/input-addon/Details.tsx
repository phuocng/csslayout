/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Input add-on">
            <Helmet>
                <meta name="description" content="Create an input add-on with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css input add-on" />
            </Helmet>
            <div className='p-8 pb-20'>
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
                            <div style={{ width: '256px' }}>
                                <div
                                    style={{
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderRadius: '4px',
                                        display: 'flex',
                                        height: '32px',
                                        marginBottom: '16px',
                                        width: '100%',
                                    }}
                                >
                                    <div
                                        style={{
                                            alignItems: 'center',
                                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                            borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            padding: '8px',
                                            width: '30%',
                                        }}
                                    >
                                        <Rectangle />
                                    </div>
                                    <input
                                        type="text"
                                        style={{
                                            borderColor: 'transparent',
                                            flex: 1,
                                            marginRight: '1px',
                                            padding: '4px',
                                        }}
                                    />
                                </div>
                                <div
                                    style={{
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderRadius: '4px',
                                        display: 'flex',
                                        height: '32px',
                                        marginBottom: '16px',
                                        width: '100%',
                                    }}
                                >
                                    <input
                                        type="text"
                                        style={{
                                            borderColor: 'transparent',
                                            flex: 1,
                                            marginLeft: '1px',
                                            padding: '8px',
                                        }}
                                    />
                                    <div
                                        style={{
                                            alignItems: 'center',
                                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                            borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            padding: '8px',
                                            width: '40%',
                                        }}
                                    >
                                        <Rectangle />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderRadius: '4px',
                                        display: 'flex',
                                        height: '32px',
                                        width: '100%',
                                    }}
                                >
                                    <div
                                        style={{
                                            alignItems: 'center',
                                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                            borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            padding: '8px',
                                            width: '20%',
                                        }}
                                    >
                                        <Rectangle />
                                    </div>
                                    <input
                                        type="text"
                                        style={{
                                            borderColor: 'transparent',
                                            flex: 1,
                                            padding: '8px',
                                        }}
                                    />
                                    <div
                                        style={{
                                            alignItems: 'center',
                                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                            borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            padding: '8px',
                                            width: '30%',
                                        }}
                                    >
                                        <Rectangle />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<!-- Add-on prepended -->
<div style="
    display: flex;

    /* Take full size */
    width: 100%;
">
    <!-- Add-on -->
    <div style="
        /* Center the content */
        align-items: center;
        display: flex;
        justify-content: center;
    ">
        ...
    </div>

    <!-- Input -->
    <input type="text" style="
        /* Take the remaining width */
        flex: 1;
    " />
</div>

<!-- Add-on appended -->
<div style="
    display: flex;

    /* Take full size */
    width: 100%;
">
    <!-- Input -->
    <input type="text" style="
        /* Take the remaining width */
        flex: 1;
    " />

    <!-- Add-on -->
    <div style="
        /* Center the content */
        align-items: center;
        display: flex;
        justify-content: center;
    ">
        ...
    </div>
</div>

<!-- Appended and prepended add-ons -->
<div style="
    display: flex;

    /* Take full size */
    width: 100%;
">
    <!-- Add-on -->
    <div style="
        /* Center the content */
        align-items: center;
        display: flex;
        justify-content: center;
    ">
        ...
    </div>

    <!-- Input -->
    <input type="text" style="
        /* Take the remaining width */
        flex: 1;
    " />

    <!-- Add-on -->
    <div style="
        /* Center the content */
        align-items: center;
        display: flex;
        justify-content: center;
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
