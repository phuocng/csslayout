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
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            border: '1px solid #d1d5db',
                            borderBottomColor: 'transparent',
                            borderTopLeftRadius: '4px',
                            borderTopRightRadius: '4px',
                            padding: '4px 8px',
                        }}
                    >
                        <Circle size={8} />
                    </div>
                    <div style={{ borderBottom: '1px solid #d1d5db', padding: '4px 8px' }}>
                        <Circle size={8} />
                    </div>
                    <div style={{ borderBottom: '1px solid #d1d5db', padding: '4px 8px' }}>
                        <Circle size={8} />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
