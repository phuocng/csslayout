import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Line from '../../placeholders/Line';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Wizard">
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
                    )}
                    source={`
<div style="
    display: flex;
">
    <!-- Step -->
    <div style="
        /* Make all steps have the same width */
        flex: 1;
    ">
        <div style="
            /* Content is centered */
            align-items: center;
            display: flex;
            justify-content: center;
        ">
            <!-- The left connector -->
            <div style="
                flex: 1;
                height: 1px;

                background-color: rgba(0, 0, 0, .3);
                /*
                For the first step, you might need to set it to transparent background:
                background-color: transparent;
                */
            " />

            <!-- The step number -->
            <div style="
                /* Content is centered */
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
            ">
                ...
            </div>

            <!-- The right connector -->
            <div style="
                flex: 1;
                height: 1px;

                background-color: rgba(0, 0, 0, .3);
                /*
                For the last step, you might need to set it to transparent background:
                background-color: transparent;
                */
            " />
        </div>

        <!-- Title of step -->
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
