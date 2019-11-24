import React from 'react';

import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';
import Rectangle from '../../placeholders/Rectangle';
import Triangle from '../../placeholders/Triangle';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column items-center justify-center pa2">
                <div className="w-80">
                    <div className="flex items-center justify-between mb2">
                        <div className="w-60"><Rectangle height={4} /></div>
                        <Triangle size={6} corner="b" />
                    </div>
                    <div>
                        <div className="flex items-center justify-between mb1">
                            <div className="w-40"><Rectangle height={4} /></div>
                            <Triangle size={6} corner="t" />
                        </div>
                        <div className="w-100 mb1"><Line /></div>
                        <div className="w-80 mb1"><Line /></div>
                        <div className="w-60 mb1"><Line /></div>
                        <div className="w-40"><Line /></div>
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
