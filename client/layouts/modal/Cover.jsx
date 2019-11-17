import React from 'react';

import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';
import Rectangle from '../../placeholders/Rectangle';

const Cover = () => {
    return (
        <Frame>
            <div className="flex flex-column h-100 items-center justify-center pa3">
                <div className="b--black-30 ba br2 w-100">
                    <div className="flex items-center justify-between ph1">
                        <div className="w-60"><Rectangle height={2} /></div>
                        <div className="black-70">&times;</div>
                    </div>
                    <div className="pa1">
                        <div className="w-100 mb1"><Line /></div>
                        <div className="w-80 mb1"><Line /></div>
                        <div className="w-60 mb1"><Line /></div>
                        <div className="w-40"><Line /></div>
                    </div>
                    <div className="flex items-center justify-end pa1">
                        <div className="w-33 mr2"><Rectangle height={8} /></div>
                        <div className="w-33"><Rectangle height={8} /></div>
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
