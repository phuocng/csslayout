import React, { useState } from 'react';

import SampleCode from '../components/SampleCode';

interface BrowserFrameProps {
    content: React.ReactNode;
    source: string;
}

const BrowserFrame: React.FC<BrowserFrameProps> = ({ content, source }) => {
    const [isContentActive, setContentActive] = useState(true);
    const flip = () => setContentActive((isActive) => !isActive);

    return (
        <div
            style={{
                border: '1px solid rgba(0, 0, 0, 0.2)',
                borderRadius: '4px',
                boxShadow: '0 16px 40px -8px rgba(0, 0, 0, .5)',
            }}
        >
            <div
                style={{
                    alignItems: 'center',
                    backgroundColor: 'rgba( 0, 0, 0, 0.05)',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    padding: '8px 16px',
                }}
            >
                <div
                    style={{
                        backgroundColor: '#FF4136',
                        borderRadius: '100%',
                        height: '16px',
                        marginRight: '4px',
                        width: '16px',
                    }}
                />
                <div
                    style={{
                        backgroundColor: '#FFB700',
                        borderRadius: '100%',
                        height: '16px',
                        marginRight: '4px',
                        width: '16px',
                    }}
                />
                <div
                    style={{
                        backgroundColor: '#FF4136',
                        borderRadius: '100%',
                        height: '16px',
                        marginRight: '4px',
                        width: '16px',
                    }}
                />
                <div style={{ marginLeft: 'auto' }}>
                    <button
                        style={{
                            backgroundColor: '#00449E',
                            borderColor: 'transparent',
                            borderRadius: '4px',
                            color: '#FFF',
                            cursor: 'pointer',
                            padding: '4px 8px',
                        }}
                        onClick={flip}
                    >
                        {isContentActive ? 'Source' : 'Demo'}
                    </button>
                </div>
            </div>
            <div
                style={{
                    height: '512px',
                    position: 'relative',
                    transform: isContentActive ? '' : 'rotateY(180deg)',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 1s',
                }}
            >
                <div
                    style={{
                        WebkitBackfaceVisibility: 'hidden',
                        backfaceVisibility: 'hidden',
                        height: '100%',
                        left: 0,
                        opacity: isContentActive ? 1 : 0,
                        overflow: 'scroll',
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                    }}
                >
                    {content}
                </div>
                <div
                    style={{
                        WebkitBackfaceVisibility: 'hidden',
                        backfaceVisibility: 'hidden',
                        height: '100%',
                        left: 0,
                        opacity: isContentActive ? 0 : 1,
                        position: 'absolute',
                        top: 0,
                        transform: 'rotateY(180deg)',
                        width: '100%',
                    }}
                >
                    <SampleCode lang="html" code={source} />
                </div>
            </div>
        </div>
    );
};

export default BrowserFrame;
