import * as React from 'react';

import Frame from '../../placeholders/Frame';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'center',
                    padding: '0.5rem',
                }}
            >
                <div
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        borderRadius: '0.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                    }}
                >
                    <div
                        style={{
                            height: '1rem',
                            position: 'relative',
                        }}
                    >
                        <div
                            style={{
                                borderColor: 'transparent transparent rgba(0, 0, 0, 0.3) transparent',
                                borderStyle: 'solid',
                                borderWidth: '0 0.5rem 0.5rem 0.5rem',
                                height: 0,
                                left: '50%',
                                position: 'absolute',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 0,
                            }}
                        />
                    </div>
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            flex: 1,
                            padding: '0.25rem',
                            justifyContent: 'center',
                        }}
                    >
                        99
                    </div>
                    <div
                        style={{
                            height: '1rem',
                            position: 'relative',
                        }}
                    >
                        <div
                            style={{
                                borderColor: 'rgba(0, 0, 0, 0.3) transparent transparent transparent',
                                borderStyle: 'solid',
                                borderWidth: '0.5rem 0.5rem 0 0.5rem',
                                height: 0,
                                left: '50%',
                                position: 'absolute',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 0,
                            }}
                        />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
