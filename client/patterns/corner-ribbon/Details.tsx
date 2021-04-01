/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Heading from '../../components/Heading';
import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.CornerRibbon}>
            <Helmet>
                <meta name="description" content="Create a corner ribbon with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css ribbon" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="container">
    <!-- The container -->
    <div class="container__wrapper">
        <!-- The ribbon -->
        <div class="container__ribbon">
            ...
        </div>
    </div>
</div>
`}
css={`
.container {
    position: relative;
}

.container__wrapper {
    /* Displayed at the top left corner */
    left: 0px;
    position: absolute;
    top: 0px;

    /* Size */
    height: 100px;
    width: 100px;

    /* Hide the part of its children which is displayed outside */
    overflow: hidden;
}

.container__ribbon {
    /* Position */
    left: -64px;
    position: absolute;
    top: 32px;

    /* Size */
    height: 24px;
    width: 206px;

    /* Displayed diagonally */
    transform: rotate(-45deg);

    /* Background color */
    background-color: rgba(0, 0, 0, 0.3);

    /* Centerize the text content */
    text-align: center;
}
`}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            height: '100%',
                            justifyContent: 'center',
                        }}
                    >
                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                borderRadius: '4px',
                                height: '256px',
                                position: 'relative',
                                width: '256px',
                            }}
                        >
                            <div
                                style={{
                                    height: '100px',
                                    left: 0,
                                    overflow: 'hidden',
                                    position: 'absolute',
                                    top: 0,
                                    width: '100px',
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                        height: '24px',
                                        left: '-64px',
                                        position: 'absolute',
                                        textAlign: 'center',
                                        top: '32px',
                                        transform: 'rotate(-45deg)',
                                        width: '206px',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>

            <section>
                <Heading title="Use cases" />

                <div style={{ padding: '32px' }}>
                    <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                        You can add a ribbon to a <Link to='/patterns/pricing-table'> pricing table</Link> to
                        indicate the most popular option.
                    </div>

                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            width: '60%',
                        }}
                    >
                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                borderRadius: '4px',
                                flex: 1,
                                height: '200px',
                                margin: '0 8px',
                            }}
                        />
                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                borderRadius: '4px',
                                flex: 1,
                                height: '300px',
                                margin: '0 8px',
                                position: 'relative',
                            }}
                        >
                            <div
                                style={{
                                    height: '100px',
                                    left: 0,
                                    overflow: 'hidden',
                                    position: 'absolute',
                                    top: 0,
                                    width: '100px',
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: '#00449E',
                                        color: '#FFF',
                                        fontWeight: 'bold',
                                        left: '-64px',
                                        padding: '2px 0',
                                        position: 'absolute',
                                        textAlign: 'center',
                                        top: '32px',
                                        transform: 'rotate(-45deg)',
                                        width: '210px',
                                    }}
                                >
                                    Popular
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                borderRadius: '4px',
                                flex: 1,
                                height: '250px',
                                margin: '0 8px',
                            }}
                        />
                    </div>
                </div>
            </section>

            <RelatedPatterns patterns={[Pattern.FixedAtCorner, Pattern.Ribbon]} />
        </DetailsLayout>
    );
};

export default Details;
