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
                    padding: '8px',
                }}
            >
                <div
                    style={{
                        backgroundColor: '#fff',
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        borderRadius: '4px',
                        height: '75%',
                        position: 'relative',
                        width: '60%',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#fff',
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '4px',
                            height: '100%',
                            left: 0,
                            position: 'absolute',
                            top: 0,
                            transform: 'rotate(15deg)',
                            width: '100%',
                            zIndex: -1,
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: '#fff',
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '4px',
                            height: '100%',
                            left: 0,
                            position: 'absolute',
                            top: 0,
                            transform: 'rotate(30deg)',
                            width: '100%',
                            zIndex: -1,
                        }}
                    />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
