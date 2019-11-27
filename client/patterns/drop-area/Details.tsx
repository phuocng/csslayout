import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Drop area">
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
                                    alignItems: 'center',
                                    border: '4px dashed rgba(0, 0, 0, 0.3)',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '80%',
                                    justifyContent: 'center',
                                    width: '80%',
                                }}
                            >
                                <div style={{ width: '40%' }}>
                                    <Block justify='center' numberOfBlocks={10} />
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Content is centered */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Border */
    border: 4px dashed rgba(0, 0, 0, 0.3),
    border-radius: 4px;
">
    ...
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
