import React from 'react';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Feature comparison">
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
                            <div style={{ width: '60%' }}>
                                <div
                                    style={{
                                        alignItems: 'center',
                                        borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                        display: 'flex',
                                        padding: '12px 0',
                                        width: '100%',
                                    }}
                                >
                                    <div style={{ flex: 1, marginRight: '16px' }}>
                                        <Rectangle />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', marginRight: '16px', width: '75px' }}>
                                        <Rectangle />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', width: '50px' }}>
                                        <Rectangle />
                                    </div>
                                </div>

                                <div
                                    style={{
                                        alignItems: 'center',
                                        borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                        display: 'flex',
                                        padding: '8px 0',
                                        width: '100%',
                                    }}
                                >
                                    <div style={{ flex: 1, marginRight: '16px' }}>
                                        <Block numberOfBlocks={4} />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', marginRight: '16px', width: '75px' }}>
                                        <Circle size={8} />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', width: '50px' }}>
                                        <Circle size={8} />
                                    </div>
                                </div>

                                <div
                                    style={{
                                        alignItems: 'center',
                                        borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                        display: 'flex',
                                        padding: '8px 0',
                                        width: '100%',
                                    }}
                                >
                                    <div style={{ flex: 1, marginRight: '16px' }}>
                                        <Block numberOfBlocks={5} />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', marginRight: '16px', width: '75px' }} />
                                    <div style={{ display: 'flex', justifyContent: 'center', width: '50px' }}>
                                        <Circle size={8} />
                                    </div>
                                </div>

                                <div
                                    style={{
                                        alignItems: 'center',
                                        borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                        display: 'flex',
                                        padding: '8px 0',
                                        width: '100%',
                                    }}
                                >
                                    <div style={{ flex: 1, marginRight: '16px' }}>
                                        <Block numberOfBlocks={4} />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', marginRight: '16px', width: '75px' }}>
                                        <Circle size={8} />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', width: '50px' }} />
                                </div>

                                <div
                                    style={{
                                        alignItems: 'center',
                                        borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                        display: 'flex',
                                        padding: '8px 0',
                                        width: '100%',
                                    }}
                                >
                                    <div style={{ flex: 1, marginRight: '16px' }}>
                                        <Block numberOfBlocks={6} />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', marginRight: '16px', width: '75px' }}>
                                        <Circle size={8} />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', width: '50px' }} />
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    align-items: center;
    display: flex;

    /* Bottom border */
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);

    /* Spacing */
    padding: 12px 0px;
">
    <!-- Feature name -->
    <div style="
        /* Take available width */
        flex: 1;

        /* Spacing */
        margin-right: 16px;
    ">
        ...
    </div>

    <!-- The model -->
    <div style="
        /* Center the content */
        display: flex;
        justify-content: center;

        /* Spacing */
        margin-right: 16px;
    ">
        <!--
        For the first row: display the model name (Basic, Pro, etc.)
        From the second row: display a yes/no icon indicating the feature is available or not
        -->
        ...
    </div>

    <!-- Repeated other models -->
    ...
</div>

<!-- Repeated items -->
...
`}
                />
            </div>

            <RelatedPatterns patterns={[Pattern.FeatureList, Pattern.PricingTable]} />
        </DetailsLayout>
    );
};

export default Details;
