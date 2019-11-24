import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Centering">
            <div className="ph4 pv5">
                <BrowserFrame
                    content={
                        <div className="h-100 flex flex-column items-center justify-center">
                            <Circle size={64} />
                            <div className="w-40 mt3"><Rectangle /></div>
                            <div className="w-30 mt2"><Rectangle /></div>
                            <div className="w-20 mt2"><Rectangle /></div>
                        </div>
                    }
                    source={`
<div style="
    align-items: center;
    display: flex;
    justify-content: center;
">
    ...
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
