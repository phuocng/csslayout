import React from 'react';

import Circle from '../../placeholders/Circle';
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
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '4px',
                        width: '100%',
                    }}
                >
                    <div style={{ width: '60%' }}><Rectangle height={4} /></div>
                    <div style={{ borderBottom: '1px dotted rgba(0, 0, 0, 0.3)', flex: 1, margin: '0 4px' }} />
                    <Circle size={8} />
                </div>
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '4px',
                        width: '100%',
                    }}
                >
                    <div style={{ width: '40%' }}><Rectangle height={4} /></div>
                    <div style={{ borderBottom: '1px dotted rgba(0, 0, 0, 0.3)', flex: 1, margin: '0 4px' }} />
                    <Circle size={8} />
                </div>
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                    }}
                >
                    <div style={{ width: '30%' }}><Rectangle height={4} /></div>
                    <div style={{ borderBottom: '1px dotted rgba(0, 0, 0, 0.3)', flex: 1, margin: '0 4px' }} />
                    <Circle size={8} />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
