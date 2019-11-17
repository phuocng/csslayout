import React from 'react';

import Dot from '../../placeholders/Dot';
import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';

const Cover = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column items-center justify-center">
                <Dot />
                <div className="w-50 mv1">
                    <Line />
                </div>
                <div className="w-40 mv1">
                    <Line />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
