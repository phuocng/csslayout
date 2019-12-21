import React from 'react';

import Frame from '../../placeholders/Frame';
import Rectangle from '../../placeholders/Rectangle';

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
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        borderRadius: '9999px',
                        display: 'inline-flex',
                        justifyContent: 'center',
                        padding: '4px 8px',
                        width: '80%',
                    }}
                >
                    <div style={{ flex: 1, marginRight: '4px' }}>
                        <Rectangle />
                    </div>
                    <button
                        style={{
                            backgroundColor: 'transparent',
                            borderColor: 'transparent',
                            cursor: 'pointer',
                            height: '16px',
                            position: 'relative',
                            width: '16px',
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
            </div>
        </Frame>
    );
};

export default Cover;
