import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details = () => {
    return (
        <DetailsLayout title="Card">
            <div className="ph4 pv5">
                <BrowserFrame
                    content={
                        <div className="h-100 flex flex-column items-center justify-center pa3">
                            <div className="b--black-30 ba br2 flex flex-column w5">
                                <Rectangle height={150} />
                                <div className="pa3" style={{ flex: 1 }}>
                                    <div className="mb3"><Block numberOfBlocks={15} /></div>
                                    <div className="w4">
                                        <Rectangle height={32} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    source={`
<div style="
    display: flex;
    flex-direction: column;
">
    <!-- Cover -->
    <div style="
        height: 150px;
        width: 100%;
    ">
        ...
    </div>

    <!-- Content -->
    <div style="
        /* Take available height */
        flex: 1;
    ">
        ...
    </div>
    ...
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
