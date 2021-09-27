import * as React from 'react';

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
                <button
                    style={{
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        height: '32px',
                        position: 'relative',
                        width: '32px',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            height: '1px',
                            left: 0,
                            position: 'absolute',
                            top: '50%',
                            transform: 'translate(0%, -50%) rotate(45deg)',
                            width: '100%',
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            height: '100%',
                            left: '50%',
                            position: 'absolute',
                            top: 0,
                            transform: 'translate(-50%, 0%) rotate(45deg)',
                            width: '1px',
                        }}
                    />
                </button>
            </div>
        </Frame>
    );
};

export default Cover;
