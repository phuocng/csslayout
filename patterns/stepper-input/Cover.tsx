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
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        display: 'flex',
                        height: '24px',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            borderRight: '1px solid #d1d5db',
                            display: 'flex',
                            justifyContent: 'center',
                            width: '16px',
                        }}
                    >
                        -
                    </div>
                    <div style={{ flex: 1 }} />
                    <div
                        style={{
                            alignItems: 'center',
                            borderLeft: '1px solid #d1d5db',
                            display: 'flex',
                            justifyContent: 'center',
                            width: '16px',
                        }}
                    >
                        +
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
