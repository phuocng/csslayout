import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Badge">
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
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    borderRadius: '9999px',
                                    color: '#FFF',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    fontSize: '20px',
                                    height: '32px',
                                    justifyContent: 'center',
                                    width: '32px',
                                }}
                            >
                                1
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Content is centered */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Colors */
    background-color: rgba(0, 0, 0, .3);
    color: #FFF;

    /* Rounded border */
    border-radius: 9999px;
    height: 32px;
    width: 32px;
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
