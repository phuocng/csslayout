import React from 'react';

import Circle from '../../placeholders/Circle';
import Frame from '../../placeholders/Frame';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column items-center justify-center pa2">
                <div className="w-100 flex flex-row items-center justify-between ba b--black-30 br2 pa1">
                    <div className="flex items-center">
                        <div className="mr1"><Circle size={8} /></div>
                        <div className="mr1"><Circle size={8} /></div>
                        <div className="mr1"><Circle size={8} /></div>
                    </div>
                    <Circle />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
