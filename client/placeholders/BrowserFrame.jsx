import React, { useState } from 'react';

const BrowserFrame = ({ content, source }) => {
    const [isContentActive, setContentActive] = useState(true);
    const flip = () => setContentActive(isActive => !isActive);

    return (
        <div className="br2 ba b--black-20">
            <div className="flex pa3 bb b--black-20 items-center bg-black-05">
                <div className="br-100 mr1 w1 h1 bg-red" />
                <div className="br-100 mr1 w1 h1 bg-gold" />
                <div className="br-100 mr1 w1 h1 bg-red" />
                <div className="ml-auto">
                    <button className="bn pointer bg-dark-blue br2 ph2 pv1 white" onClick={flip}>
                        {isContentActive ? 'Source' : 'Demo'}
                    </button>
                </div>
            </div>
            <div
                className="relative"
                style={{
                    height: '512px',
                    transition: 'transform 1s',
                    transformStyle: 'preserve-3d',
                    transform: isContentActive ? '' : 'rotateY(180deg)',
                }}
            >
                <div className="overflow-scroll absolute top-0 left-0 h-100 w-100" style={{ backfaceVisibility: 'hidden' }}>
                    {content}
                </div>
                <div
                    className="absolute top-0 left-0 h-100 w-100"
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                    }}
                >
                    {source}
                </div>
            </div>
        </div>
    );
};

export default BrowserFrame;
