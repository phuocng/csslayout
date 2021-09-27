import * as React from 'react';

import Frame from '../../placeholders/Frame';
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
                        justifyContent: 'center',
                        width: '75%',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#4299e1',
                            borderRadius: '9999px',
                            height: '8px',
                            marginRight: '8px',
                            width: '8px',
                        }}
                    />

                    <div style={{ flex: 1 }}>
                        <Rectangle />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
