import * as React from 'react';

import Circle from '../../placeholders/Circle';
import Frame from '../../placeholders/Frame';

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
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        padding: '4px',
                        width: '100%',
                    }}
                >
                    <Circle />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
