import React from 'react';

import Frame from '../../placeholders/Frame';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
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
                        borderRadius: '9999px',
                        height: '32px',
                        position: 'relative',
                        width: '32px',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#FF4136',
                            borderRadius: '9999px',
                            bottom: 0,
                            height: '8px',
                            position: 'absolute',
                            right: 0,
                            transform: 'translate(50%, 50%)',
                            width: '8px',
                        }}
                    />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
