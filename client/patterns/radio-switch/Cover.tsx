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
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        borderRadius: '9999px',
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '4px',
                        width: '80%',
                    }}
                >
                    <div style={{ flex: 1, padding: '4px' }}>
                        <Rectangle />
                    </div>
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                            borderRadius: '9999px',
                            flex: 1,
                            height: '100%',
                            padding: '4px',
                        }}
                    />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
