import React from 'react';

import Circle from '../../placeholders/Circle';
import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';
import Rectangle from '../../placeholders/Rectangle';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div className="h-100 flex items-center justify-center ph2">
                <div
                    className="ba br2 b--black-30 flex flex-column items-center justify-center pa1 mr1"
                    style={{ flex: 1 }}
                >
                    <div className="mb1"><Circle /></div>
                    <div className="mb1 w-100">
                        <div className="w-100 mb1"><Line /></div>
                        <div className="w-100 mb1"><Line /></div>
                        <div className="w-80"><Line /></div>
                    </div>
                    <Rectangle />
                </div>
                <div
                    className="ba br2 b--black-30 flex flex-column items-center justify-center pa1 mr1"
                    style={{ flex: 1 }}
                >
                    <div className="mb1"><Circle /></div>
                    <div className="mb1 w-100">
                        <div className="w-100 mb1"><Line /></div>
                        <div className="w-60 mb1"><Line /></div>
                        <div className="w-80 mb1"><Line /></div>
                        <div className="w-100 mb1"><Line /></div>
                        <div className="w-80"><Line /></div>
                    </div>
                    <Rectangle />
                </div>
                <div
                    className="ba br2 b--black-30 flex flex-column items-center justify-center pa1"
                    style={{ flex: 1 }}
                >
                    <div className="mb1"><Circle /></div>
                    <div className="mb1 w-100">
                        <div className="w-100 mb1"><Line /></div>
                        <div className="w-80"><Line /></div>
                    </div>
                    <Rectangle />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
