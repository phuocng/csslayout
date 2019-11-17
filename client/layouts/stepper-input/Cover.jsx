import React from 'react';

import Frame from '../../placeholders/Frame';

const Cover = () => {
    return (
        <Frame>
            <div className="h-100 flex items-center justify-center pa2">
                <div className="b--black-30 ba br2 flex w-100 h1">
                    <div className="b--black-30 br flex items-center justify-center w1">-</div>
                    <div className="flex-grow-1 bg-white"></div>
                    <div className="b--black-30 bl flex items-center justify-center w1">+</div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
