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
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        borderRadius: '9999px',
                        height: '48px',
                        padding: '4px',
                        width: '48px',
                    }}
                >
                    <svg
                        viewBox="0 0 24 24"
                        style={{
                            fill: 'none',
                            height: '100%',
                            stroke: '#FFF',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 1,
                            width: '100%',
                        }}
                    >
                        <path
                            d={`M12,3.5c2.347,0,4.25,1.903,4.25,4.25S14.347,12,12,12s-4.25-1.903-4.25-4.25S9.653,3.5,12,3.5z
                            M5,20.5
                            c0-3.866,3.134-7,7-7s7,3.134,7,7H5z`}
                        />
                    </svg>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
