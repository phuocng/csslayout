import React from 'react';

import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';

const Cover = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column items-center justify-center pa3">
                <div className="b--black-30 ba br2 flex flex-column h-100 w-100">
                    <div className="b--black-30 bb flex items-center ph2" style={{ flex: 1 }}>
                        <Line />
                    </div>
                    <div className="b--black-30 bb flex items-center ph2" style={{ flex: 1 }}>
                        <div className="w-80"><Line /></div>
                    </div>
                    <div className="flex items-center ph2" style={{ flex: 1 }}>
                        <div className="w-60"><Line /></div>
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
