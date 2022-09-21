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
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <div style={{ color: '#d1d5db', fontSize: '12px', padding: '2px' }}>★</div>
                    <div style={{ color: '#d1d5db', fontSize: '12px', padding: '2px' }}>★</div>
                    <div style={{ color: '#d1d5db', fontSize: '12px', padding: '2px' }}>★</div>
                    <div style={{ color: '#d1d5db', fontSize: '12px', padding: '2px' }}>☆</div>
                    <div style={{ color: '#d1d5db', fontSize: '12px', padding: '2px' }}>☆</div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
