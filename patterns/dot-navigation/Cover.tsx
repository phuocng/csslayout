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
                <div style={{ alignItems: 'center', display: 'flex' }}>
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '9999px',
                            height: '8px',
                            margin: '0 4px',
                            width: '8px',
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            borderRadius: '9999px',
                            height: '8px',
                            margin: '0 4px',
                            width: '8px',
                        }}
                    />
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '9999px',
                            height: '8px',
                            margin: '0 4px',
                            width: '8px',
                        }}
                    />
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '9999px',
                            height: '8px',
                            margin: '0 4px',
                            width: '8px',
                        }}
                    />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
