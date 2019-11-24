import React from 'react';

import Frame from '../../placeholders/Frame';
import Rectangle from '../../placeholders/Rectangle';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column items-center justify-center">
                <div className="flex items-center justify-between ba b--black-30 br2 w-80 pa2">
                    <div className="w-60"><Rectangle /></div>
                    <div className="black-70">&times;</div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
