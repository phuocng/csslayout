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
                        alignItems: 'center',
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        borderRadius: '8px',
                        display: 'flex',
                        padding: '4px',
                        width: '100%',
                    }}
                >
                    <div style={{ marginRight: '4px', width: '16px' }}><Rectangle /></div>
                    <div style={{ marginRight: '4px', width: '16px' }}><Rectangle /></div>
                    <div style={{ marginLeft: 'auto', width: '16px' }}><Rectangle /></div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
