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
                    padding: '0.5rem',
                }}
            >
                <div
                    style={{
                        columnCount: 3,
                        columnGap: '0.25rem',
                        width: '80%',
                    }}
                >
                    <div style={{ breakInside: 'avoid', marginBottom: '0.25rem' }}>
                        <Rectangle height={16} />
                    </div>
                    <div style={{ breakInside: 'avoid', marginBottom: '0.25rem' }}>
                        <Rectangle height={12} />
                    </div>
                    <div style={{ breakInside: 'avoid', marginBottom: '0.25rem' }}>
                        <Rectangle height={8} />
                    </div>
                    <div style={{ breakInside: 'avoid', marginBottom: '0.25rem' }}>
                        <Rectangle height={24} />
                    </div>
                    <div style={{ breakInside: 'avoid', marginBottom: '0.25rem' }}>
                        <Rectangle height={16} />
                    </div>
                    <div style={{ breakInside: 'avoid', marginBottom: '0.25rem' }}>
                        <Rectangle height={12} />
                    </div>
                    <div style={{ breakInside: 'avoid', marginBottom: '0.25rem' }}>
                        <Rectangle height={16} />
                    </div>
                    <div style={{ breakInside: 'avoid', marginBottom: '0.25rem' }}>
                        <Rectangle height={12} />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
