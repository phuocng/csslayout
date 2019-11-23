import React from 'react';

import Frame from '../../placeholders/Frame';

const Cover = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column items-center justify-center">
                <div className="w2 h2 relative ba b--black-30 br2">
                    <div
                        className="absolute top-0 right-0 br-pill bg-dark-blue"
                        style={{ height: '16px', transform: 'translate(50%, -50%)', width: '16px' }}
                    />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
