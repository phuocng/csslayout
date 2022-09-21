import * as React from 'react';

import Circle from '../../placeholders/Circle';
import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';

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
                        border: '1px solid #d1d5db',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            flex: 1,
                            padding: '4px 8px',
                        }}
                    >
                        <Circle size={8} />
                    </div>
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                            flex: 1,
                            padding: '4px 8px',
                            position: 'relative',
                        }}
                    >
                        <Circle size={8} />
                        <div
                            style={{
                                border: '1px solid #d1d5db',
                                borderTopColor: 'transparent',
                                left: 0,
                                padding: '4px',
                                position: 'absolute',
                                top: '100%',
                                width: '100%',
                            }}
                        >
                            <div style={{ marginBottom: '4px' }}>
                                <Line />
                            </div>
                            <div style={{ marginBottom: '4px', width: '60%' }}>
                                <Line />
                            </div>
                            <div style={{ marginBottom: '4px' }}>
                                <Line />
                            </div>
                            <div style={{ width: '80%' }}>
                                <Line />
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            flex: 1,
                            padding: '4px 8px',
                        }}
                    >
                        <Circle size={8} />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
