import React from 'react';

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
                <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                    {
                        Array(9).fill(0).map((_, index) => {
                            return (
                                <div key={index} style={{ flexBasis: '33%', padding: '4px' }}>
                                    <Rectangle height={20} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
