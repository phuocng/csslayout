import React from 'react';

import Circle from '../../placeholders/Circle';
import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';
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
                    <div style={{ margin: '0 4px' }}><Circle size={32} /></div>
                    <div style={{ flex: 1 }}>
                        <div style={{ marginBottom: '8px', width: '100%' }}><Rectangle height={4} /></div>
                        <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                        <div style={{ width: '80%' }}><Line /></div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row-reverse', width: '100%' }}>
                    <div style={{ margin: '0 4px' }}><Circle size={32} /></div>
                    <div style={{ flex: 1 }}>
                        <div style={{ marginBottom: '8px', width: '100%' }}><Rectangle height={4} /></div>
                        <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                        <div style={{ width: '80%' }}><Line /></div>
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
