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
                        backgroundColor: '#d1d5db',
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                        borderRadius: '9999px',
                        display: 'flex',
                        height: '16px',
                        justifyContent: 'flex-end',
                        width: '32px',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#FFF',
                            borderRadius: '9999px',
                            height: '100%',
                            width: '16px',
                        }}
                    />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
