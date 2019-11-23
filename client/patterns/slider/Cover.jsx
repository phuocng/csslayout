import React from 'react';

import Circle from '../../placeholders/Circle';
import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';

const Cover = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column items-center justify-center">
                <div className="flex items-center h1 w-80">
                    <div className="w-20"><Line /></div>
                    <Circle />
                    <div style={{ flex: 1 }}><Line /></div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
