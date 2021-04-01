/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Pattern from '../../constants/Pattern';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Line from '../../placeholders/Line';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.Wizard}>
            <Helmet>
                <meta name="description" content="Create a wizard with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css stepper, css wizard" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="wizard">
    <!-- Step -->
    <div class="step">
        <div class="step__dot">
            <!-- The left connector -->
            <div class="step__connector"></div>

            <!-- The step number -->
            <div class="step__number">
                ...
            </div>

            <!-- The right connector -->
            <div class="step__connector"></div>
        </div>

        <!-- Title of step -->
        ...
    </div>

    <!-- Repeat other steps -->
    ...
</div>
`}
css={`
.wizard {
    display: flex;
}

.step {
    /* Make all steps have the same width */
    flex: 1;
}

.step__dot {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;
}

.step__connector {
    flex: 1;
    height: 1px;
    background-color: rgba(0, 0, 0, .3);
}

.step:first-child .step__connector,
.step:last-child .step__connector {
    background-color: transparent;
}

.step__number {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Rounded border */
    background-color: rgba(0, 0, 0, .3);
    border-radius: 9999px;
    height: 32px;
    width: 32px;

    /* OPTIONAL: Spacing between it and connectors */
    margin-left: 4px;
    margin-right: 4px;
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
                        <div style={{ display: 'flex', width: '80%' }}>
                            <div style={{ flex: 1 }}>
                                <div
                                    style={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        marginBottom: '16px',
                                    }}
                                >
                                    <div style={{ flex: 1 }} />
                                    <div
                                        style={{
                                            alignItems: 'center',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            margin: '0 4px',
                                        }}
                                    >
                                        <Circle size={32} />
                                    </div>
                                    <div style={{ flex: 1 }}><Line /></div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', padding: '0 16px' }}>
                                    <Block justify='center' numberOfBlocks={5} />
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div
                                    style={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        marginBottom: '16px',
                                    }}
                                >
                                    <div style={{ flex: 1 }}><Line /></div>
                                    <div
                                        style={{
                                            alignItems: 'center',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            margin: '0 4px',
                                        }}
                                    >
                                        <Circle size={32} />
                                    </div>
                                    <div style={{ flex: 1 }}><Line /></div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', padding: '0 16px' }}>
                                    <Block justify='center' numberOfBlocks={5} />
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div
                                    style={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        marginBottom: '16px',
                                    }}
                                >
                                    <div style={{ flex: 1 }}><Line /></div>
                                    <div
                                        style={{
                                            alignItems: 'center',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            margin: '0 4px',
                                        }}
                                    >
                                        <Circle size={32} />
                                    </div>
                                    <div style={{ flex: 1 }} />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', padding: '0 16px' }}>
                                    <Block justify='center' numberOfBlocks={5} />
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;
