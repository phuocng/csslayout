import React from 'react';

import Frame from '../placeholders/Frame';

const StepperCover = () => {
    return (
        <Frame>
            <div className="h-100 flex items-center justify-center pa2">
                <div className="b--black-30 ba br2 flex w-100">
                    <div className="w-20 br b--black-30 tc">-</div>
                    <div className="flex-grow-1 bg-white"></div>
                    <div className="w-20 bl b--black-30 tc">+</div>
                </div>
            </div>
        </Frame>
    );
};

export default StepperCover;
