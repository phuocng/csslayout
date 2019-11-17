import React from 'react';

import Dot from '../../placeholders/Dot';
import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';

const Cover = () => {
    return (
        <Frame>
            <div className="h-100 flex">
                <div className="b--black-30 br flex flex-column justify-center items-center" style={{ flex: 1 }}>
                    <div className="mb1"><Dot /></div>
                </div>
                <div className="flex flex-column justify-center" style={{ flex: 1 }}>
                    <div className="pa2">
                        <div className="mb1 w-100"><Line /></div>
                        <div className="mb1 w-100"><Line /></div>
                        <div className="mb1 w-80"><Line /></div>
                        <div className="mb1 w-80"><Line /></div>
                        <div className="w-60"><Line /></div>
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
