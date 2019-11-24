import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';
import Square from '../../placeholders/Square';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Media object">
            <div className="ph4 pv5">
                <BrowserFrame
                    content={
                        <div className="h-100 flex items-start pa3">
                            <div className="w4 h4 mr3">
                                <Square />
                            </div>
                            <div className="flex-auto">
                                <div className="w-80 mb4">
                                    <Rectangle />
                                </div>
                                <div className="mb4"><Block numberOfBlocks={20} /></div>
                                <div className="mb4"><Block numberOfBlocks={15} /></div>
                            </div>
                        </div>
                    }
                    source={`
<div style="
    /* Align sub-items to top */
    align-items: start;
    display: flex;
">
    <!-- Media object -->
    <div style="
        margin-right: 16px;

        /* Set the width for the media object */
        width: 200px;
    ">
        ...
    </div>

    <!-- Main content -->
    <div style="
        /* Take the remaining width */
        flex: 1;
    ">
        ...
    </div>
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
