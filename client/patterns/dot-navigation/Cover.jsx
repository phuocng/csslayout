import React from 'react';

import Frame from '../../placeholders/Frame';

const Cover = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column items-center justify-center">
                <div className="flex items-center">
                    <div className="mh1 br-pill ba b--black-30" style={{ height: '8px', width: '8px' }} />
                    <div className="mh1 br-pill bg-black-30" style={{ height: '8px', width: '8px' }} />
                    <div className="mh1 br-pill ba b--black-30" style={{ height: '8px', width: '8px' }} />
                    <div className="mh1 br-pill ba b--black-30" style={{ height: '8px', width: '8px' }} />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
