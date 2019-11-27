import React from 'react';

import Circle from '../../placeholders/Circle';
import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'center',
                    padding: '8px',
                }}
            >
                <Circle />
                <div style={{ margin: '4px 0', width: '50%' }}>
                    <Line />
                </div>
                <div style={{ margin: '4px 0', width: '40%' }}>
                    <Line />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
