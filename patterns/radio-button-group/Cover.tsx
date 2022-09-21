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
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        display: 'flex',
                        height: '24px',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#00449E',
                            borderRight: '1px solid #d1d5db',
                            flex: 1,
                        }}
                    />
                    <div
                        style={{
                            borderRight: '1px solid #d1d5db',
                            flex: 1,
                        }}
                    />
                    <div
                        style={{
                            flex: 1,
                        }}
                    />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
