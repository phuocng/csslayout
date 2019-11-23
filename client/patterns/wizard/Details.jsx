import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Line from '../../placeholders/Line';
import SampleCode from '../../SampleCode';

const Details = () => {
    return (
        <DetailsLayout title="Wizard">
            <div className="ph4 pv5">
                <BrowserFrame
                    content={
                        <div className="h-100 flex flex-column items-center justify-center">
                            <div className="flex w-80">
                                <div style={{ flex: 1 }}>
                                    <div className="mb3 flex items-center justify-center">
                                        <div style={{ flex: 1 }} />
                                        <div className="flex items-center justify-center mh1"><Circle size={32} /></div>
                                        <div style={{ flex: 1 }}><Line /></div>
                                    </div>
                                    <div className="ph3 flex justify-center"><Block justify='center' numberOfBlocks={5} /></div>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div className="mb3 flex items-center justify-center">
                                        <div style={{ flex: 1 }}><Line /></div>
                                        <div className="flex items-center justify-center mh1"><Circle size={32} /></div>
                                        <div style={{ flex: 1 }}><Line /></div>
                                    </div>
                                    <div className="ph3 flex justify-center"><Block justify='center' numberOfBlocks={5} /></div>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div className="mb3 flex items-center justify-center">
                                        <div style={{ flex: 1 }}><Line /></div>
                                        <div className="flex items-center justify-center mh1"><Circle size={32} /></div>
                                        <div style={{ flex: 1 }} />
                                    </div>
                                    <div className="ph3 flex justify-center"><Block justify='center' numberOfBlocks={5} /></div>
                                </div>
                            </div>
                        </div>
                    }
                    source={
<SampleCode
lang="html"
code={`
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
                    }
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
