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
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'center',
                    padding: '8px',
                }}
            >
                <div
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        borderRadius: '4px',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        width: '80%',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <div style={{ flex: 1, padding: '4px 4px 2px 4px' }}><Triangle size={6} corner="t" /></div>
                        <div style={{ flex: 1, padding: '2px 4px 4px 4px' }}><Triangle size={6} corner="b" /></div>
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
