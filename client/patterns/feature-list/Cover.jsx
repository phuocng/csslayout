import React from 'react';

import Circle from '../../placeholders/Circle';
import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';
import Rectangle from '../../placeholders/Rectangle';

const Cover = () => {
    return (
        <Frame>
            <div className="flex flex-column justify-center h-100 pa2 w-100">
                <div className="flex w-100 mb2">
                    <div className="mh1"><Circle size={32} /></div>
                    <div style={{ flex: 1 }}>
                        <div className="w-100 mb2"><Rectangle height={4} /></div>
                        <div className="w-100 mb1"><Line /></div>
                        <div className="w-100 mb1"><Line /></div>
                        <div className="w-80"><Line /></div>
                    </div>
                </div>
                <div className="flex w-100 flex-row-reverse">
                    <div className="mh1"><Circle size={32} /></div>
                    <div style={{ flex: 1 }}>
                        <div className="w-100 mb2"><Rectangle height={4} /></div>
                        <div className="w-100 mb1"><Line /></div>
                        <div className="w-100 mb1"><Line /></div>
                        <div className="w-80"><Line /></div>
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
