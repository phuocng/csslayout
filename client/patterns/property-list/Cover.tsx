import React from 'react';

import Circle from '../../placeholders/Circle';
import Frame from '../../placeholders/Frame';
import Rectangle from '../../placeholders/Rectangle';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column items-center justify-center pa3">
                <div className="w-100">
                    <div className="bb b--black-30 pv1 flex items-center justify-between">
                        <div className="w-60"><Rectangle height={8} /></div>
                        <Circle size={12} />
                    </div>
                    <div className="bb b--black-30 pv1 flex items-center justify-between">
                        <div className="w-20"><Rectangle height={8} /></div>
                        <Circle size={12} />
                    </div>
                    <div className="bb b--black-30 pv1 flex items-center justify-between">
                        <div className="w-40"><Rectangle height={8} /></div>
                        <Circle size={12} />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
