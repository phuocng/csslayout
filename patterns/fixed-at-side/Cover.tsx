import * as React from 'react';

import Frame from '../../placeholders/Frame';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div
                style={{
                    height: '100%',
                    position: 'relative',
                    width: '100%',
                }}
            >
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        height: '40%',
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        transform: 'translate(0, -50%)',
                        width: '16px',
                    }}
                />
            </div>
        </Frame>
    );
};

export default Cover;
