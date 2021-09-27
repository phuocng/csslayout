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
                        display: 'inline-flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <div style={{ color: 'rgba(0, 0, 0, 0.7)', fontSize: '2.5rem', fontWeight: 500 }}>1k+</div>
                    <div style={{ color: 'rgba(0, 0, 0, 0.4)', fontSize: '.75rem', textTransform: 'uppercase' }}>
                        stars
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
