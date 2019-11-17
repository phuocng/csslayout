import React from 'react';

import Frame from '../../placeholders/Frame';
import Rectangle from '../../placeholders/Rectangle';

const Cover = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column items-center justify-center">
                <div className="flex items-center justify-center h2 w-80">
                    <div className="w-20"><Rectangle /></div>
                    <div className="mh1 black">/</div>
                    <div className="w-20"><Rectangle /></div>
                    <div className="mh1 black">/</div>
                    <div className="w-20"><Rectangle /></div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
