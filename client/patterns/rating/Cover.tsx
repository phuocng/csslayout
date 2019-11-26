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
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <div style={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: '12px', padding: '2px' }}>★</div>
                    <div style={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: '12px', padding: '2px' }}>★</div>
                    <div style={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: '12px', padding: '2px' }}>★</div>
                    <div style={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: '12px', padding: '2px' }}>☆</div>
                    <div style={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: '12px', padding: '2px' }}>☆</div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
