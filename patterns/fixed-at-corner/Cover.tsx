import * as React from 'react';

import Frame from '../../placeholders/Frame';
import Triangle from '../../placeholders/Triangle';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div style={{ position: 'relative' }}>
                <div style={{ left: 0, position: 'absolute', top: 0 }}>
                    <Triangle size={32} />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
