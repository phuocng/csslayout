import React from 'react';

import Circle from '../../placeholders/Circle';
import Frame from '../../placeholders/Frame';
import Rectangle from '../../placeholders/Rectangle';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'center',
                    padding: '8px',
                    width: '100%',
                }}
            >
                <div style={{ display: 'flex', marginBottom: '8px', width: '100%' }}>
                    <div style={{ flex: 1, marginRight: '8px' }}>
                        <Rectangle height={4} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '16px' }}>
                        <Circle size={4} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '16px' }}>
                        <Circle size={4} />
                    </div>
                </div>
                <div style={{ display: 'flex', marginBottom: '8px', width: '100%' }}>
                    <div style={{ flex: 1, marginRight: '8px' }}>
                        <Rectangle height={4} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '16px' }} />
                    <div style={{ display: 'flex', justifyContent: 'center', width: '16px' }}>
                        <Circle size={4} />
                    </div>
                </div>
                <div style={{ display: 'flex', marginBottom: '8px', width: '100%' }}>
                    <div style={{ flex: 1, marginRight: '8px' }}>
                        <Rectangle height={4} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '16px' }}>
                        <Circle size={4} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '16px' }} />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
