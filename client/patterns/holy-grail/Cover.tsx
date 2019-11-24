import React from 'react';

import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column">
                <div className="flex-shrink-0 bb b--black-30">
                    <div className="w-100 flex items-center pa2">
                        <div className="w1"><Line /></div>
                        <div className="w1 ml-auto"><Line /></div>
                        <div className="w1 ml1"><Line /></div>
                    </div>
                </div>
                <div className="flex-grow-1 flex flex-row">
                    <div className="b--black-30 br pa2 w-30">
                        <div className="mb1"><Line /></div>
                        <div className="w-80"><Line /></div>
                    </div>
                    <div className="pa2 flex-auto">
                        <div className="mb1"><Line /></div>
                        <div className="mb1 w-60"><Line /></div>
                        <div className="mb2 w-80"><Line /></div>

                        <div className="mb1"><Line /></div>
                        <div className="mb1 w-60"><Line /></div>
                        <div className="mb1 w-80"><Line /></div>
                    </div>
                    <div className="b--black-30 bl pa2 w-30">
                        <div className="mb1"><Line /></div>
                        <div className="w-80"><Line /></div>
                    </div>
                </div>
                <div className="flex-shrink-0 bt b--black-30">
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
