import * as React from 'react';

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
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        height: '16px',
                        width: '80%',
                    }}
                >
                    <div style={{ width: '20%' }}>
                        <Line />
                    </div>
                    <Circle />
                    <div style={{ flex: 1 }}>
                        <Line />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
