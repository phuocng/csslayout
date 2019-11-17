import React from 'react';

import Frame from '../../placeholders/Frame';

const Cover = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column items-center justify-center pa2">
                <div className="ba b--blue bg-blue br-pill h1 w2 flex justify-end">
                    <div className="bg-white br-pill w1 h-100" />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
