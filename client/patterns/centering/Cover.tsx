import React from 'react';

import Circle from '../../placeholders/Circle';
import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column items-center justify-center">
                <Circle />
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
