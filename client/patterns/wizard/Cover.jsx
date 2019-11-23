import React from 'react';

import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';

const Cover = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column items-center justify-center">
                <div className="flex w-80">
                    <div className="flex items-center justify-center" style={{ flex: 1 }}>
                        <div style={{ flex: 1 }} />
                        <div className="w1 h1 f7 flex items-center justify-center white br-pill bg-black-30">1</div>
                        <div style={{ flex: 1 }}><Line /></div>
                    </div>
                    <div className="flex items-center justify-center" style={{ flex: 1 }}>
                        <div style={{ flex: 1 }}><Line /></div>
                        <div className="w1 h1 f7 flex items-center justify-center white br-pill bg-black-30">2</div>
                        <div style={{ flex: 1 }}><Line /></div>
                    </div>
                    <div className="flex items-center justify-center" style={{ flex: 1 }}>
                        <div style={{ flex: 1 }}><Line /></div>
                        <div className="w1 h1 f7 flex items-center justify-center white br-pill bg-black-30">3</div>
                        <div style={{ flex: 1 }} />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
