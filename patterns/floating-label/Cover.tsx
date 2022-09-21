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
                        height: '32px',
                        position: 'relative',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#BBB',
                            height: '8px',
                            left: '8px',
                            padding: '0 8px',
                            position: 'absolute',
                            top: 0,
                            transform: 'translate(0, -50%)',
                            width: '40%',
                        }}
                    />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
