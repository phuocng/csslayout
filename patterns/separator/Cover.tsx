import * as React from 'react';

import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';
import Rectangle from '../../placeholders/Rectangle';

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
                    <div style={{ flex: 1 }}>
                        <Line />
                    </div>
                    <div style={{ margin: '0 4px', width: '25%' }}>
                        <Rectangle />
                    </div>
                    <div style={{ flex: 1 }}>
                        <Line />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
