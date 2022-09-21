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
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            border: '1px solid #d1d5db',
                            borderRadius: '4px',
                            padding: '4px 8px',
                        }}
                    >
                        &lt;
                    </div>
                    <div
                        style={{
                            border: '1px solid #d1d5db',
                            borderRadius: '4px',
                            padding: '4px 8px',
                        }}
                    >
                        &gt;
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
