import React from 'react';

import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';
import Rectangle from '../../placeholders/Rectangle';

const Cover = () => {
    return (
        <Frame>
            <div className="flex flex-column h-100 pa2">
                <div className="w-100 mb2">
                    <Rectangle height={32} />
                </div>
                <div style={{ flex: 1 }}>
                    <div className="w-100 mb1"><Line /></div>
                    <div className="w-100 mb1"><Line /></div>
                    <div className="w-80 mb1"><Line /></div>
                    <div className="w-60 mb2"><Line /></div>
                    <div className="w-30">
                        <Rectangle height={8} />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
