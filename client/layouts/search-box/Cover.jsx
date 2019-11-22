import React from 'react';

import Circle from '../../placeholders/Circle';
import Frame from '../../placeholders/Frame';

const Cover = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column items-center justify-center pa2">
                <div className="w-100 flex flex-row items-center justify-end ba b--black-30 br2 pa1">
                    <Circle />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
