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
                <div style={{ position: 'relative' }}>
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            borderRadius: '4px',
                            color: '#FFF',
                            height: '16px',
                            width: '16px',
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            borderRadius: '9999px',
                            color: '#FFF',
                            height: '16px',
                            position: 'absolute',
                            top: 0,
                            transform: 'rotate(0deg) translateX(-32px)',
                            width: '16px',
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            borderRadius: '9999px',
                            color: '#FFF',
                            height: '16px',
                            position: 'absolute',
                            top: 0,
                            transform: 'rotate(60deg) translateX(-32px)',
                            width: '16px',
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            borderRadius: '9999px',
                            color: '#FFF',
                            height: '16px',
                            position: 'absolute',
                            top: 0,
                            transform: 'rotate(120deg) translateX(-32px)',
                            width: '16px',
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            borderRadius: '9999px',
                            color: '#FFF',
                            height: '16px',
                            position: 'absolute',
                            top: 0,
                            transform: 'rotate(180deg) translateX(-32px)',
                            width: '16px',
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            borderRadius: '9999px',
                            color: '#FFF',
                            height: '16px',
                            position: 'absolute',
                            top: 0,
                            transform: 'rotate(240deg) translateX(-32px)',
                            width: '16px',
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            borderRadius: '9999px',
                            color: '#FFF',
                            height: '16px',
                            position: 'absolute',
                            top: 0,
                            transform: 'rotate(300deg) translateX(-32px)',
                            width: '16px',
                        }}
                    />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
