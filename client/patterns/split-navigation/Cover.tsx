import React from 'react';

import Frame from '../../placeholders/Frame';
import Rectangle from '../../placeholders/Rectangle';

const Cover = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column items-center justify-center">
                <div className="flex items-center w-80 b--black-30 ba br2 pa1">
                    <div className="w1 mr1"><Rectangle /></div>
                    <div className="w1 mr1"><Rectangle /></div>
                    <div className="w1 ml-auto"><Rectangle /></div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
