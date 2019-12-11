import React from 'react';
import { Link } from 'react-router-dom';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Pricing table">
            <div style={{ padding: '64px 32px' }}>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    You can <Link to='/patterns/ribbon'>add</Link> <Link to='/patterns/corner-ribbon'>a ribbon</Link> to
                    indicate the most popular option.
                </div>
                <BrowserFrame
                    content={(
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                height: '100%',
                                justifyContent: 'center',
                                padding: '16px',
                            }}
                        >
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
                                        alignItems: 'center',
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderRadius: '4px',
                                        display: 'flex',
                                        flex: 1,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        margin: '0 8px',
                                        padding: '16px',
                                    }}
                                >
                                    <div style={{ marginBottom: '16px', width: '60%' }}><Rectangle /></div>
                                    <div style={{ marginBottom: '16px' }}><Circle size={64} /></div>
                                    <div style={{ marginBottom: '16px', width: '100%' }}>
                                        <Block numberOfBlocks={10} />
                                    </div>
                                    <div style={{ width: '40%' }}><Rectangle height={32} /></div>
                                </div>
                                <div
                                    style={{
                                        alignItems: 'center',
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderRadius: '4px',
                                        display: 'flex',
                                        flex: 1,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        margin: '0 8px',
                                        padding: '16px',
                                    }}
                                >
                                    <div style={{ marginBottom: '16px', width: '60%' }}><Rectangle /></div>
                                    <div style={{ marginBottom: '16px' }}><Circle size={64} /></div>
                                    <div style={{ marginBottom: '16px', width: '100%' }}>
                                        <Block numberOfBlocks={20} />
                                    </div>
                                    <div style={{ width: '40%' }}><Rectangle height={32} /></div>
                                </div>
                                <div
                                    style={{
                                        alignItems: 'center',
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderRadius: '4px',
                                        display: 'flex',
                                        flex: 1,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        margin: '0 8px',
                                        padding: '16px',
                                    }}
                                >
                                    <div style={{ marginBottom: '16px', width: '60%' }}><Rectangle /></div>
                                    <div style={{ marginBottom: '16px' }}><Circle size={64} /></div>
                                    <div style={{ marginBottom: '16px', width: '100%' }}>
                                        <Block numberOfBlocks={10} />
                                    </div>
                                    <div style={{ width: '40%' }}><Rectangle height={32} /></div>
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Content is centered horizontally */
    align-items: center;
    display: flex;
    justify-content: center;
">
    <!-- Pricing column -->
    <div style="
        /* Content is centered vertically */
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;

        /* Make all columns have the same width */
        flex: 1;

        /* OPTIONAL: Space between columns */
        margin: 0 8px;

        /* OPTIONAL: Border */
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 4px;
    ">
        <!-- Title -->
        ...

        <!-- Price -->
        ...

        <!-- Description -->
        ...

        <!-- Button -->
        ...
    </div>

    <!-- Repeated pricing columns -->
    ...
</div>
`}
                />
            </div>

            <RelatedPatterns patterns={[Pattern.FeatureComparison]} />
        </DetailsLayout>
    );
};

export default Details;
