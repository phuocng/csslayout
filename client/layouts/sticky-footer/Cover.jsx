import React from 'react';

import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';

const Cover = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column">
                <div className="flex-shrink-0 b--black-30 br bw2">
                    <div className="w-100 flex items-center pa2">
                        <div className="w1"><Line /></div>
                        <div className="w1 ml-auto"><Line /></div>
                        <div className="w1 ml1"><Line /></div>
                    </div>
                    <Line />
                </div>
                <div className="flex-grow-1 b--black-30 br bw2">
                    <div className="pa2">
                        <div className="w3 mb2"><Line /></div>
                        <div className="w3 mb2"><Line /></div>
                        <div className="w2"><Line /></div>
                    </div>
                </div>
                <div className="flex-shrink-0">
                    <Line />
                    <div className="w-100 flex items-center pa2">
                        <div className="w1"><Line /></div>
                        <div className="w1 ml1"><Line /></div>
                        <div className="w1 ml1"><Line /></div>
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
