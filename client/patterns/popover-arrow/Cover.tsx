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
                        borderRadius: '4px',
                        height: '60%',
                        position: 'relative',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#FFF',
                            borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                            height: '10px',
                            left: '10px',
                            position: 'absolute',
                            top: 0,
                            transform: 'translate(50%, -50%) rotate(225deg)',
                            width: '10px',
                            zIndex: 0,
                        }}
                    />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
