import * as React from 'react';
import Head from 'next/head';

import { PrefixContext } from '../../context/prefixContext';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Line from '../../placeholders/Line';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'wizard';
    return (
        <PatternLayout pattern={Pattern.Wizard}>
            <Head>
                <meta name="description" content="Create a wizard with CSS flexbox" />
                <meta name="og:description" content="Create a wizard with CSS flexbox" />
                <meta name="twitter:description" content="Create a wizard with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css stepper, css wizard" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <!-- Step -->
    <div class="${prefix}${container}__step">
        <div class="${prefix}${container}__dot">
            <!-- The left connector -->
            <div class="${prefix}${container}__connector"></div>

            <!-- The step number -->
            <div class="${prefix}${container}__number">
                ...
            </div>

            <!-- The right connector -->
            <div class="${prefix}${container}__connector"></div>
        </div>

        <!-- Title of step -->
        ...
    </div>

    <!-- Repeat other steps -->
    ...
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    display: flex;
}

.${prefix}${container}__step {
    /* Make all steps have the same width */
    flex: 1;
}

.${prefix}${container}__dot {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;
}

.${prefix}${container}__connector {
    flex: 1;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.3);
}

.${prefix}${container}__step:first-child .${prefix}${container}__connector,
.${prefix}${container}__step:last-child .${prefix}${container}__connector {
    background-color: transparent;
}

.${prefix}${container}__number {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Rounded border */
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 9999px;
    height: 32px;
    width: 32px;

    /* OPTIONAL: Spacing between it and connectors */
    margin-left: 4px;
    margin-right: 4px;
}
`
                }
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
                                <div style={{ flex: 1 }}>
                                    <Line />
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', padding: '0 16px' }}>
                                <Block justify="center" numberOfBlocks={5} />
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
                                <div style={{ flex: 1 }}>
                                    <Line />
                                </div>
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
                                <div style={{ flex: 1 }}>
                                    <Line />
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', padding: '0 16px' }}>
                                <Block justify="center" numberOfBlocks={5} />
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
                                <div style={{ flex: 1 }}>
                                    <Line />
                                </div>
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
                                <Block justify="center" numberOfBlocks={5} />
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;
