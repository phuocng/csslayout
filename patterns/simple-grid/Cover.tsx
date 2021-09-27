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
                <div style={{ width: '80%' }}>
                    <div style={{ alignItems: 'center', display: 'flex', marginBottom: '4px' }}>
                        <div style={{ flex: '0 0 50%', padding: '0 4px' }}>
                            <Rectangle />
                        </div>
                        <div style={{ flex: '1', padding: '0 4px' }}>
                            <Rectangle />
                        </div>
                    </div>
                    <div style={{ alignItems: 'center', display: 'flex', marginBottom: '4px' }}>
                        <div style={{ flex: '0 0 33%', padding: '0 4px' }}>
                            <Rectangle />
                        </div>
                        <div style={{ flex: '0 0 33%', padding: '0 4px' }}>
                            <Rectangle />
                        </div>
                        <div style={{ flex: '0 0 33%', padding: '0 4px' }}>
                            <Rectangle />
                        </div>
                    </div>
                    <div style={{ alignItems: 'center', display: 'flex' }}>
                        <div style={{ flex: '0 0 25%', padding: '0 4px' }}>
                            <Rectangle />
                        </div>
                        <div style={{ flex: '1', padding: '0 4px' }}>
                            <Rectangle />
                        </div>
                        <div style={{ flex: '0 0 25%', padding: '0 4px' }}>
                            <Rectangle />
                        </div>
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
