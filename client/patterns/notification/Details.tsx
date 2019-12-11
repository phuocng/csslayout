import React from 'react';
import { Link } from 'react-router-dom';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Notification">
            <div style={{ padding: '64px 32px' }}>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    You can use the <Link to='/patterns/close-button'>close button</Link> to
                    represent the button for closing the notification.
                </div>
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
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    width: '60%',
                                }}
                            >
                                <div style={{ padding: '16px', width: '80%' }}><Block numberOfBlocks={5} /></div>
                                <button
                                    style={{
                                        alignItems: 'center',
                                        borderColor: 'transparent',
                                        color: 'rgba(0, 0, 0, .3)',
                                        display: 'flex',
                                        fontSize: '36px',
                                        height: '32px',
                                        justifyContent: 'center',
                                        marginRight: '1px',
                                        width: '32px',
                                    }}
                                >
                                    <Circle />
                                </button>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    display: flex;
    justify-content: space-between;
">
    <!-- Content -->
    ...

    <!-- Close button sticks to the right -->
    ...
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
