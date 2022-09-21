import * as React from 'react';

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
                <div style={{ display: 'flex', width: '100%' }}>
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            flex: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <div style={{ flex: 1 }} />
                        <div
                            style={{
                                alignItems: 'center',
                                backgroundColor: '#d1d5db',
                                borderRadius: '9999px',
                                color: '#FFF',
                                display: 'flex',
                                fontSize: '12px',
                                height: '16px',
                                justifyContent: 'center',
                                width: '16px',
                            }}
                        >
                            1
                        </div>
                        <div style={{ flex: 1 }}>
                            <Line />
                        </div>
                    </div>
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            flex: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <div style={{ flex: 1 }}>
                            <Line />
                        </div>
                        <div
                            style={{
                                alignItems: 'center',
                                backgroundColor: '#d1d5db',
                                borderRadius: '9999px',
                                color: '#FFF',
                                display: 'flex',
                                fontSize: '12px',
                                height: '16px',
                                justifyContent: 'center',
                                width: '16px',
                            }}
                        >
                            2
                        </div>
                        <div style={{ flex: 1 }}>
                            <Line />
                        </div>
                    </div>
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            flex: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <div style={{ flex: 1 }}>
                            <Line />
                        </div>
                        <div
                            style={{
                                alignItems: 'center',
                                backgroundColor: '#d1d5db',
                                borderRadius: '9999px',
                                color: '#FFF',
                                display: 'flex',
                                fontSize: '12px',
                                height: '16px',
                                justifyContent: 'center',
                                width: '16px',
                            }}
                        >
                            3
                        </div>
                        <div style={{ flex: 1 }} />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
