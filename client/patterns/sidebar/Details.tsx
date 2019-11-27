import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Sidebar">
            <div style={{ padding: '64px 32px' }}>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>Try to scroll the main content!</div>
                <BrowserFrame
                    content={(
                        <div style={{ display: 'flex', height: '100%' }}>
                            <div
                                style={{
                                    borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    padding: '16px',
                                    width: '30%',
                                }}
                            >
                                <div style={{ marginBottom: '16px' }}><Block numberOfBlocks={5} /></div>
                                <div style={{ width: '80%' }}><Block numberOfBlocks={4} /></div>
                            </div>
                            <div
                                style={{
                                    flex: 1,
                                    overflow: 'scroll',
                                    padding: '16px',
                                }}
                            >
                                <div style={{ marginBottom: '32px' }}><Block numberOfBlocks={20} /></div>
                                <div style={{ marginBottom: '32px' }}><Block numberOfBlocks={20} /></div>
                                <div style={{ marginBottom: '32px' }}><Block numberOfBlocks={20} /></div>
                                <div style={{ marginBottom: '32px' }}><Block numberOfBlocks={20} /></div>
                                <div style={{ width: '80%' }}><Block numberOfBlocks={10} /></div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="display: flex;">
    <!-- Sidebar -->
    <aside style="width: 30%;">
        ...
    </aside>

    <!-- Main -->
    <main style="
        /* Take the remaining width */
        flex: 1;

        /* Make it scrollable */
        overflow: scroll;
    ">
        ...
    </main>
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
