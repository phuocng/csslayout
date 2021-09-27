import * as React from 'react';

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
                        backgroundColor: '#ccc',
                        backgroundImage: 'radial-gradient(#fff 50%, transparent 50%)',
                        backgroundPosition: '-5px -5px',
                        backgroundRepeat: 'repeat',
                        backgroundSize: '10px 10px',
                        height: '100%',
                        padding: '5px',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#ccc',
                            height: '100%',
                            width: '100%',
                        }}
                    />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
