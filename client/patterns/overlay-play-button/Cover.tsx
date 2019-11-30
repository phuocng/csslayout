import React from 'react';

import Frame from '../../placeholders/Frame';
import Triangle from '../../placeholders/Triangle';

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
                        height: '100%',
                        position: 'relative',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            backgroundColor: 'rgba(0, 0, 0, 0.25)',
                            display: 'flex',
                            height: '100%',
                            justifyContent: 'center',
                            left: 0,
                            position: 'absolute',
                            top: 0,
                            width: '100%',
                        }}
                    >
                        <div
                            style={{
                                alignItems: 'center',
                                border: '2px solid #FFF',
                                borderRadius: '9999px',
                                display: 'flex',
                                height: '32px',
                                justifyContent: 'center',
                                width: '32px',
                            }}
                        >
                            <Triangle backgroundColor='#FFF' corner='r' size={8} />
                        </div>
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
