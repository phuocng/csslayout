import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Separator">
            <div className="ph4 pv5">
                <BrowserFrame
                    content={
                        <div className="h-100 flex flex-column items-center justify-center">
                            <div className="flex items-center w-60 relative">
                                <div className="absolute bg-white ph2" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                                    <div className="w4"><Rectangle height={16} /></div>
                                </div>
                                <div className="bb b--black-30 w-100" style={{ height: '1px' }} />
                            </div>
                        </div>
                    }
                    source={`
<div style="
    /* Content is centered horizontally */
    align-items: center;
    display: flex;

    /* Used to set the position of text */
    position: relative;
">
    <!-- Text -->
    <div style="
        /* We won't see the separator line */
        background: #FFF;
        
        /* Displayed at the center of container */
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
    ">
        ...
    </div>

    <!-- Separator line -->
    <div style="
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        height: 1px;
        width: 100%;
    " />
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
