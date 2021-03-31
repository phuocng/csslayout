/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.Ribbon}>
            <Helmet>
                <meta name="description" content="Create a ribbon with CSS" />
                <meta name="keywords" content="css ribbon" />
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
                            <div
                                style={{
                                    alignItems: 'center',
                                    backgroundColor: '#BBB',
                                    display: 'flex',
                                    height: '32px',
                                    justifyContent: 'center',
                                    padding: '0 16px',
                                    position: 'relative',
                                    width: '150px',
                                }}
                            >
                                <Rectangle />
                                <div
                                    style={{
                                        border: '16px solid #CCC',
                                        borderLeftColor: 'transparent',
                                        bottom: '-8px',
                                        left: '-24px',
                                        position: 'absolute',
                                        zIndex: -1,
                                    }}
                                />
                                <div
                                    style={{
                                        border: '8px solid transparent',
                                        borderBottomWidth: 0,
                                        borderRightWidth: 0,
                                        borderTopColor: '#AAA',
                                        left: 0,
                                        position: 'absolute',
                                        top: '100%',
                                    }}
                                />
                                <div
                                    style={{
                                        border: '8px solid transparent',
                                        borderBottomWidth: 0,
                                        borderLeftWidth: 0,
                                        borderTopColor: '#AAA',
                                        position: 'absolute',
                                        right: 0,
                                        top: '100%',
                                    }}
                                />
                                <div
                                    style={{
                                        border: '16px solid #CCC',
                                        borderRightColor: 'transparent',
                                        bottom: '-8px',
                                        position: 'absolute',
                                        right: '-24px',
                                        zIndex: -1,
                                    }}
                                />
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Background color */
    background-color: #BBB;

    /* Size */
    height: 32px;

    /* Use to position the corners */
    position: relative;
">
    <!-- The content -->
    ...

    <!-- The left side -->
    <div style="
        /* Position */
        bottom: -8px;
        position: absolute;
        left: -24px;

        /* Displayed under the container */
        z-index: -1;

        /* Background */
        border: 16px solid #CCC;
        border-left-color: transparent;
    "
    />

    <!-- The left triangle displayed below the content -->
    <div style="
        left: 0;
        position: absolute;
        top: 100%;

        /* Background */
        border: 8px solid transparent;
        border-bottom-width: 0;
        border-right-width: 0;
        border-top-color: #AAA;
    " />

    <!-- The right triangle displayed below the content -->
    <div style="
        position: absolute;
        right: 0;
        top: 100%;

        /* Background */
        border: 8px solid transparent;
        border-bottom-width: 0;
        border-left-width: 0;
        border-top-color: #AAA;
    " />

    <!-- The right side -->
    <div style="
        /* Position */
        bottom: -8px;
        position: absolute;
        right: -24px;

        /* Displayed under the container */
        z-index: -1;

        /* Background */
        border: 16px solid #CCC;
        border-right-color: transparent;
    "
    />
</div>
`}
                />
            </div>

            <RelatedPatterns patterns={[Pattern.CornerRibbon]} />
        </DetailsLayout>
    );
};

export default Details;
