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
                <div
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        borderRadius: '4px',
                        height: '100%',
                        position: 'relative',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            height: '48px',
                            left: 0,
                            overflow: 'hidden',
                            position: 'absolute',
                            top: 0,
                            width: '48px',
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                height: '16px',
                                left: '-16px',
                                position: 'absolute',
                                textAlign: 'center',
                                top: '8px',
                                transform: 'rotate(-45deg)',
                                width: '70px',
                            }}
                        />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
