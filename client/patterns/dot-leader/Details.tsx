/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import Heading from '../../components/Heading';
import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Dot leader">
            <Helmet>
                <meta name="description" content="Create dot leaders with CSS flexbox" />
                <meta name="keywords" content="css dot leader, css flexbox" />
            </Helmet>
            <div style={{ padding: '64px 32px' }}>
                <BrowserFrame
                    content={(
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                height: '100%',
                                justifyContent: 'center',
                            }}
                        >
                            <div style={{ width: '400px' }}>
                                <div
                                    style={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        marginBottom: '8px',
                                        width: '100%',
                                    }}
                                >
                                    <div style={{ width: '60%' }}><Rectangle /></div>
                                    <div style={{ borderBottom: '1px dotted rgba(0, 0, 0, 0.3)', flex: 1, margin: '0 4px' }} />
                                    <Circle />
                                </div>
                                <div
                                    style={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        marginBottom: '8px',
                                        width: '100%',
                                    }}
                                >
                                    <div style={{ width: '40%' }}><Rectangle /></div>
                                    <div style={{ borderBottom: '1px dotted rgba(0, 0, 0, 0.3)', flex: 1, margin: '0 4px' }} />
                                    <Circle />
                                </div>
                                <div
                                    style={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        width: '100%',
                                    }}
                                >
                                    <div style={{ width: '30%' }}><Rectangle /></div>
                                    <div style={{ borderBottom: '1px dotted rgba(0, 0, 0, 0.3)', flex: 1, margin: '0 4px' }} />
                                    <Circle />
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;
">
    <!-- Left side -->
    <div>...</div>

    <!-- Dots -->
    <div style="
        /* Bottom border */
        border-bottom: 1px dotted rgba(0, 0, 0, 0.3);

        /* Take remaining width */
        flex: 1;

        /* Spacing */
        margin: 0px 4px;
    " />

    <!-- Right side -->
    <div>...</div>
</div>
`}
                />
            </div>

            <section>
                <Heading title="Use cases" />

                <div style={{ padding: '32px' }}>
                    <div style={{ marginBottom: '16px', width: '60%' }}>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '8px',
                                width: '100%',
                            }}
                        >
                            <div>Chapter 1</div>
                            <div style={{ borderBottom: '1px dotted rgba(0, 0, 0, 0.3)', flex: 1, margin: '0 4px' }} />
                            <div>5</div>
                        </div>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '8px',
                                width: '100%',
                            }}
                        >
                            <div>Chapter 2</div>
                            <div style={{ borderBottom: '1px dotted rgba(0, 0, 0, 0.3)', flex: 1, margin: '0 4px' }} />
                            <div>40</div>
                        </div>
                    </div>
                    <div style={{ width: '300px' }}>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '8px',
                                width: '100%',
                            }}
                        >
                            <div>Egg</div>
                            <div style={{ borderBottom: '1px dotted rgba(0, 0, 0, 0.3)', flex: 1, margin: '0 4px' }} />
                            <div>3$</div>
                        </div>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '8px',
                                width: '100%',
                            }}
                        >
                            <div>Coffee</div>
                            <div style={{ borderBottom: '1px dotted rgba(0, 0, 0, 0.3)', flex: 1, margin: '0 4px' }} />
                            <div>5$</div>
                        </div>
                    </div>
                </div>
            </section>
            <RelatedPatterns patterns={[Pattern.Menu, Pattern.PropertyList, Pattern.SplitNavigation]} />
        </DetailsLayout>
    );
};

export default Details;
