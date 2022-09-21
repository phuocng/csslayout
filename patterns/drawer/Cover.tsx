import * as React from 'react';

import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div
                style={{
                    backgroundColor: '#d1d5db',
                    height: '100%',
                    position: 'relative',
                    width: '100%',
                }}
            >
                <div
                    style={{
                        backgroundColor: '#fff',
                        height: '100%',
                        left: 0,
                        padding: '4px',
                        position: 'absolute',
                        top: 0,
                        width: '40%',
                    }}
                >
                    <div style={{ marginBottom: '4px' }}>
                        <Line />
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <Line />
                    </div>
                    <div style={{ marginBottom: '4px' }}>
                        <Line />
                    </div>
                    <div style={{ width: '80%' }}>
                        <Line />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
