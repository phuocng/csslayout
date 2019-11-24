import React from 'react';

import Frame from '../../placeholders/Frame';
import Rectangle from '../../placeholders/Rectangle';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column items-center justify-center">
                <div className="w-80">
                    <div className="flex items-center mb1">
                        <div className="ph1" style={{ flex: '0 0 50%' }}><Rectangle /></div>
                        <div className="ph1" style={{ flex: '1' }}><Rectangle /></div>
                    </div>
                    <div className="flex items-center mb1">
                        <div className="ph1" style={{ flex: '0 0 33%' }}><Rectangle /></div>
                        <div className="ph1" style={{ flex: '0 0 33%' }}><Rectangle /></div>
                        <div className="ph1" style={{ flex: '0 0 33%' }}><Rectangle /></div>
                    </div>
                    <div className="flex items-center">
                        <div className="ph1" style={{ flex: '0 0 25%' }}><Rectangle /></div>
                        <div className="ph1" style={{ flex: '1' }}><Rectangle /></div>
                        <div className="ph1" style={{ flex: '0 0 25%' }}><Rectangle /></div>
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
