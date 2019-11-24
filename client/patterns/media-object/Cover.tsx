import React from 'react';

import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';
import Square from '../../placeholders/Square';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div className="flex h-100 items-start pa2 w-100">
                <div className="h2 w2 mr2">
                    <Square />
                </div>
                <div className="flex-auto">
                    <div className="w-100 mb1"><Line /></div>
                    <div className="w-100 mb1"><Line /></div>
                    <div className="w-80 mb3"><Line /></div>

                    <div className="w-100 mb1"><Line /></div>
                    <div className="w-100 mb1"><Line /></div>
                    <div className="w-80 mb3"><Line /></div>

                    <div className="w-100 mb1"><Line /></div>
                    <div className="w-100 mb1"><Line /></div>
                    <div className="w-80 mb1"><Line /></div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
