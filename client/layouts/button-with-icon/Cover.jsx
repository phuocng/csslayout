import React from 'react';

import Dot from '../../placeholders/Dot';
import Frame from '../../placeholders/Frame';
import Rectangle from '../../placeholders/Rectangle';

const Cover = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column items-center justify-center pa2">
                <div className="w-100 h2 flex flex-row items-center ba b--black-30 br2 ph1">
                    <div className="mr1"><Dot /></div>
                    <Rectangle />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
