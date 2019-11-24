import React from 'react';

import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';
import Rectangle from '../../placeholders/Rectangle';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column items-center justify-center">
                <div className="flex items-center h1 w-80">
                    <div style={{ flex: 1 }}><Line /></div>
                    <div className="w-25 mh1"><Rectangle /></div>
                    <div style={{ flex: 1 }}><Line /></div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
