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
                }}
            >
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        flex: 1,
                        width: '100%',
                    }}
                />
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        flex: 1,
                        width: '100%',
                    }}
                />
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        flex: 1,
                        width: '100%',
                    }}
                />
            </div>
        </Frame>
    );
};

export default Cover;
