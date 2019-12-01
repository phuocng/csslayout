import React from 'react';

import Circle from '../../placeholders/Circle';
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
                        display: 'flex',
                        marginBottom: '8px',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '9999px',
                            display: 'flex',
                            justifyContent: 'center',
                            marginRight: '8px',
                            padding: '4px',
                        }}
                    >
                        <Circle />
                    </div>
                    <div style={{ flex: 1 }}>
                        <Rectangle />
                    </div>
                </div>
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        marginBottom: '8px',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '9999px',
                            display: 'flex',
                            justifyContent: 'center',
                            marginRight: '8px',
                            padding: '4px',
                        }}
                    >
                        <Circle backgroundColor='transparent' />
                    </div>
                    <div style={{ flex: 1 }}>
                        <Rectangle />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
