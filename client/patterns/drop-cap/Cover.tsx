import React from 'react';

import Circle from '../../placeholders/Circle';
import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';

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
                <div style={{ display: 'flex', height: '32px', width: '100%' }}>
                    <div
                        style={{
                            alignItems: 'center',
                            border: '2px dashed rgba(0, 0, 0, 0.3)',
                            display: 'flex',
                            marginRight: '8px',
                            justifyContent: 'center',
                            width: '32px',
                        }}
                    >
                        <Circle />
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '80%' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '60%' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '80%' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '40%' }}><Line /></div>
                    </div>
                </div>
                <div style={{ marginTop: '4px' }}>
                    <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                    <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                    <div style={{ marginBottom: '4px', width: '80%' }}><Line /></div>
                    <div style={{ marginBottom: '4px', width: '40%' }}><Line /></div>
                    <div style={{ marginBottom: '4px', width: '60%' }}><Line /></div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
