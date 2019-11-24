import React from 'react';

import Circle from '../../placeholders/Circle';
import Frame from '../../placeholders/Frame';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column items-center justify-center">
                <div className="flex items-center justify-center">
                    <div
                        className="ph2 pv1 ba b--black-30 br2 br--top"
                        style={{ borderBottomColor: 'transparent' }}
                    >
                        <Circle size={8} />
                    </div>
                    <div className="ph2 pv1 bb b--black-30"><Circle size={8} /></div>
                    <div className="ph2 pv1 bb b--black-30"><Circle size={8} /></div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
