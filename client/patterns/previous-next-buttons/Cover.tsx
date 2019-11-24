import React from 'react';

import Frame from '../../placeholders/Frame';
import Rectangle from '../../placeholders/Rectangle';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column items-center justify-center">
                <div className="flex items-center justify-between pa2 w-100">
                    <div className="b--black-30 ba br2 flex flex-row items-center pa1 w-40">
                        <div className="mr1">&lt;</div>
                        <Rectangle />
                    </div>
                    <div className="b--black-30 ba br2 flex flex-row items-center pa1 w-40">
                        <Rectangle />
                        <div className="ml1">&gt;</div>
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
