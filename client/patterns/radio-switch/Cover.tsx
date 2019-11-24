import React from 'react';

import Frame from '../../placeholders/Frame';
import Rectangle from '../../placeholders/Rectangle';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column items-center justify-center pa2">
                <div className="w-80 flex items-center justify-center b--black-30 br-pill ba pa1">
                    <div className="pa1" style={{ flex: 1 }}>
                        <Rectangle />
                    </div>
                    <div className="pa1 br-pill bg-black-10 h-100" style={{ flex: 1 }} />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
