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
                            flexDirection: 'column',
                            height: '100%',
                            justifyContent: 'center',
                            left: 0,
                            position: 'absolute',
                            top: 0,
                            width: '100%',
                        }}
                    >
                        <div style={{ marginBottom: '4px', width: '60%' }}><Rectangle /></div>
                        <div style={{ marginBottom: '4px', width: '40%' }}><Rectangle /></div>
                        <div style={{ marginBottom: '4px', width: '50%' }}><Rectangle /></div>
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
