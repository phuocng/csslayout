import React from 'react';

import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';

const Cover = () => {
    return (
        <Frame>
            <div className="h-100 flex">
                <div className="b--black-30 br flex flex-column justify-end pa1 w-30">
                    <div className="mb1"><Line /></div>
                    <div className="w-80"><Line /></div>
                </div>
                <div className="flex-grow-1 pa2 b--black-30 br bw2">
                    <div className="mb2"><Line /></div>
                    <div className="mb2"><Line /></div>
                    <div className="mb2"><Line /></div>
                    <div className="w-80"><Line /></div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
