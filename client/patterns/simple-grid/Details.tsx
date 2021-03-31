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
        <DetailsLayout pattern={Pattern.SimpleGrid}>
            <Helmet>
                <meta name="description" content="Create a simple grid with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css flexbox grid, css grid, css layout" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame                    
html={`
<!-- Row -->
<div style="
    display: flex;

    margin-left: -8px;
    margin-right: -8px;
">
    <!--Cell with given width. Replace 25% with whatever you want -->
    <div style="
        flex: 0 0 25%;
        padding-left: 8px;
        padding-right: 8px;
    ">25%</div>

    <!-- Cell that takes remaining width -->
    <div style="
        flex: 1;
        padding-left: 8px;
        padding-right: 8px;
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
                        <div style={{ width: '60%' }}>
                            <div style={{ display: 'flex', margin: '0 -8px 8px -8px' }}>
                                <div style={{ flex: '1', padding: '0 8px' }}>
                                    <Rectangle height={32} />
                                </div>
                                <div style={{ flex: '1', padding: '0 8px' }}>
                                    <Rectangle height={32} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', margin: '0 -8px 32px -8px' }}>
                                <div style={{ flex: '0 0 50%', padding: '0 8px' }}>
                                    <Rectangle height={32} />
                                </div>
                                <div style={{ flex: '1', padding: '0 8px' }}>
                                    <Rectangle height={32} />
                                </div>
                                <div style={{ flex: '1', padding: '0 8px' }}>
                                    <Rectangle height={32} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', margin: '0 -8px 8px -8px' }}>
                                <div style={{ flex: '1', padding: '0 8px' }}>
                                    <Rectangle height={32} />
                                </div>
                                <div style={{ flex: '1', padding: '0 8px' }}>
                                    <Rectangle height={32} />
                                </div>
                                <div style={{ flex: '1', padding: '0 8px' }}>
                                    <Rectangle height={32} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', margin: '0 -8px 32px -8px' }}>
                                <div style={{ flex: '0 0 33.3333%', padding: '0 8px' }}>
                                    <Rectangle height={32} />
                                </div>
                                <div style={{ flex: '1', padding: '0 8px' }}>
                                    <Rectangle height={32} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', margin: '0 -8px 8px -8px' }}>
                                <div style={{ flex: '1', padding: '0 8px' }}>
                                    <Rectangle height={32} />
                                </div>
                                <div style={{ flex: '1', padding: '0 8px' }}>
                                    <Rectangle height={32} />
                                </div>
                                <div style={{ flex: '1', padding: '0 8px' }}>
                                    <Rectangle height={32} />
                                </div>
                                <div style={{ flex: '1', padding: '0 8px' }}>
                                    <Rectangle height={32} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', margin: '0 -8px 0 -8px' }}>
                                <div style={{ flex: '0 0 25%', padding: '0 8px' }}>
                                    <Rectangle height={32} />
                                </div>
                                <div style={{ flex: '1', padding: '0 8px' }}>
                                    <Rectangle height={32} />
                                </div>
                                <div style={{ flex: '0 0 33.3333%', padding: '0 8px' }}>
                                    <Rectangle height={32} />
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>

            <RelatedPatterns patterns={[Pattern.CardLayout]} />
        </DetailsLayout>
    );
};

export default Details;
