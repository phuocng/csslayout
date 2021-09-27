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
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        borderRadius: '4px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '8px',
                        width: '80%',
                    }}
                >
                    <div style={{ width: '60%' }}>
                        <Rectangle />
                    </div>
                    <div style={{ color: 'rgba(0, 0, 0, 0.7)' }}>&times;</div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
