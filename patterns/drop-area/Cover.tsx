import * as React from 'react';

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
                        border: '4px dashed rgba(0, 0, 0, 0.3)',
                        borderRadius: '4px',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'center',
                        width: '100%',
                    }}
                >
                    <div style={{ marginBottom: '4px', width: '60%' }}>
                        <Line />
                    </div>
                    <div style={{ marginBottom: '4px', width: '50%' }}>
                        <Line />
                    </div>
                    <div style={{ width: '30%' }}>
                        <Line />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
