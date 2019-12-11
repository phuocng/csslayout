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
        <DetailsLayout title="Feature list">
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
                                <div style={{ display: 'flex', marginBottom: '32px' }}>
                                    <div style={{ margin: '0 16px' }}><Circle size={128} /></div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ marginBottom: '32px' }}><Rectangle height={8} /></div>
                                        <Block numberOfBlocks={10} />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row-reverse', marginBottom: '32px' }}>
                                    <div style={{ margin: '0 16px' }}><Circle size={128} /></div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ marginBottom: '32px' }}><Rectangle height={8} /></div>
                                        <Block numberOfBlocks={15} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<!-- Feature item -->
<div style="
    display: flex;

    /* OPTIONAL: Reverse the order of image and content */
    flex-direction: row-reverse;

    /* OPTIONAL: Spacing between items */
    margin: 16px 0;
">
    <!-- Image -->
    <div style="
        width: 128px;
    ">
        ...
    </div>

    <!-- Right side -->
    <div style="
        /* Take the remaining width */
        flex: 1;
    ">
        ...
    </div>
</div>

<!-- Repeated items -->
...
`}
                />
            </div>

            <RelatedPatterns patterns={[Pattern.FeatureComparison]} />
        </DetailsLayout>
    );
};

export default Details;
