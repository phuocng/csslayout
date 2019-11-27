import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Modal">
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
                            <div
                                style={{
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '4px',
                                    width: '50%',
                                }}
                            >
                                <div
                                    style={{
                                        alignItems: 'center',
                                        borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        padding: '16px',
                                    }}
                                >
                                    <div style={{ width: '60%' }}><Rectangle /></div>
                                    <div style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                                        <Circle />
                                    </div>
                                </div>
                                <div style={{ padding: '16px' }}>
                                    <div style={{ marginBottom: '16px' }}><Block numberOfBlocks={10} /></div>
                                    <Block numberOfBlocks={5} />
                                </div>
                                <div
                                    style={{
                                        borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        padding: '16px',
                                    }}
                                >
                                    <div style={{ marginRight: '8px', width: '30%' }}><Rectangle height={32} /></div>
                                    <div style={{ width: '30%' }}><Rectangle height={32} /></div>
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Border */
    border: 1px solid rgba(0, 0, 0.3);
    border-radius: 4px;
">
    <!-- Header -->
    <div style="
        display: flex;
        justify-content: space-between;
        /* Border */
        border-bottom: 1px solid rgba(0, 0, 0.3);
    ">
        <!-- Title -->
        ...
        <!-- Close icon sticks to the right -->
        ...
    </div>

    <!-- Content -->
    ...

    <!-- Footer -->
    <div style="
        display: flex;
        /* Push the buttons to the right */
        justify-content: flex-end;
        /* Border */
        border-top: 1px solid rgba(0, 0, 0.3);
    ">
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
