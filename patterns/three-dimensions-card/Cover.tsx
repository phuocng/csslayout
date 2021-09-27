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
                    padding: '1.5rem',
                }}
            >
                <div
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        height: '2rem',
                        position: 'relative',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            background: 'rgba(0, 0, 0, 0.3)',
                            height: '100%',
                            top: '0.5rem',
                            left: 0,
                            position: 'absolute',
                            transform: 'translate(-100%, 0) skewY(-45deg)',
                            transformOrigin: 'top left',
                            width: '0.5rem',
                        }}
                    />
                    <div
                        style={{
                            background: 'rgba(0, 0, 0, 0.3)',
                            bottom: 0,
                            height: '0.5rem',
                            left: 0,
                            position: 'absolute',
                            transform: 'translate(0, 100%) skewX(-45deg)',
                            transformOrigin: 'top left',
                            width: '100%',
                        }}
                    />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
