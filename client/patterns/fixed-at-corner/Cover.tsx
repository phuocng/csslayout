import React from 'react';

import Frame from '../../placeholders/Frame';
import Triangle from '../../placeholders/Triangle';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div className="relative">
                <div className="absolute top-0 left-0">
                    <Triangle size={32} />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
