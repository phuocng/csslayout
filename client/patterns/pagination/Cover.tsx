import React from 'react';

import Circle from '../../placeholders/Circle';
import Frame from '../../placeholders/Frame';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column items-center justify-center pa2">
                <div className="b--black-30 ba br-pill flex">
                    <div className="b--black-30 br flex items-center justify-center pa2">
                        <Circle size={4} />
                    </div>
                    <div className="b--black-30 br flex items-center justify-center pa2">
                        <Circle size={4} />
                    </div>
                    <div className="flex items-center justify-center pa2">
                        <Circle size={4} />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
