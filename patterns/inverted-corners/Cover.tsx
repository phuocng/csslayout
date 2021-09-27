import * as React from 'react';

import Frame from '../../placeholders/Frame';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div
                style={{
                    height: '100%',
                    padding: '1.5rem',
                }}
            >
                <div
                    style={{
                        backgroundColor: '#52525B',
                        height: '100%',
                        position: 'relative',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'transparent',
                            borderTopLeftRadius: '1rem',
                            bottom: '-2rem',
                            boxShadow: '0 -1rem 0 0 #52525B',
                            height: '2rem',
                            position: 'absolute',
                            width: '1rem',
                        }}
                    />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
