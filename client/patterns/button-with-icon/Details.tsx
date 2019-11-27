import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Button with icon">
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
                            <div style={{ width: '256px' }}>
                                <button
                                    style={{
                                        alignItems: 'center',
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderRadius: '8px',
                                        display: 'flex',
                                        height: '64px',
                                        padding: '8px',
                                        width: '100%',
                                    }}
                                >
                                    <div style={{ marginRight: '8px' }}><Circle size={32} /></div>
                                    <Rectangle />
                                </button>
                            </div>
                        </div>
                    )}
                    source={`
<button style="
    /* Content is centered */
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
">
    <!-- Icon -->
    ...

    <!-- Label -->
    ...
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
