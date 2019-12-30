import React from 'react';

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
                        alignItems: 'center',
                        border: '2px solid rgba(0, 0, 0, 0.3)',
                        borderRadius: '0 50% 50% 50%',
                        display: 'flex',
                        height: '32px',
                        justifyContent: 'center',
                        transform: 'rotate(45deg)',
                        width: '32px',
                    }}
                />
            </div>
        </Frame>
    );
};

export default Cover;
