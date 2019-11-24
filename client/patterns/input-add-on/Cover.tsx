import React from 'react';

import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div className="h-100 flex items-center justify-center pa2">
                <div className="b--black-30 ba br2 flex w-100 h1">
                    <div className="b--black-30 br flex items-center justify-center w-30 ph2">
                        <div className="w-100">
                        <Line />
                        </div>
                    </div>
                    <div className="flex-grow-1"></div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
