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
                        position: 'relative',
                        width: '60%',
                    }}
                >
                    <div
                        style={{
                            border: '4px solid transparent',
                            borderTopColor: '#00439e',
                            bottom: '100%',
                            height: 0,
                            left: '50%',
                            position: 'absolute',
                            transform: 'translate(-50%, 4px)',
                            width: 0,
                            zIndex: 10,
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: '#00439e',
                            borderRadius: '2px',
                            bottom: '100%',
                            height: '24px',
                            left: '50%',
                            position: 'absolute',
                            transform: 'translate(-50%, -4px)',
                            width: '80px',
                            zIndex: 10,
                        }}
                    />
                    <Rectangle height={16} />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
