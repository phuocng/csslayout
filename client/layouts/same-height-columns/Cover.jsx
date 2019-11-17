import React from 'react';

import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';
import Square from '../../placeholders/Square';

const Cover = () => {
    return (
        <Frame>
            <div className="flex h-100 pa2">
                <div className="mh1" style={{ flex: 1 }}>
                    <div className="w2 h2 mb1">
                        <Square />
                    </div>
                    <div className="w-100 mb1"><Line /></div>
                    <div className="w-100 mb1"><Line /></div>
                    <div className="w-80 mb1"><Line /></div>
                    <div className="w-60"><Line /></div>
                </div>
                <div className="mh1" style={{ flex: 1 }}>
                    <div className="w2 h2 mb1">
                        <Square />
                    </div>
                    <div className="w-100 mb1"><Line /></div>
                    <div className="w-80 mb1"><Line /></div>
                    <div className="w-60 mb2"><Line /></div>

                    <div className="w-100 mb1"><Line /></div>
                    <div className="w-60"><Line /></div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
