import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Pagination">
            <div className="ph4 pv5">
                <BrowserFrame
                    content={
                        <div className="h-100 flex flex-column items-center justify-center pa3">
                            <div className="b--black-30 ba br2 flex">
                                <div className="b--black-30 br flex items-center justify-center pa2 w4">
                                    <Rectangle />
                                </div>
                                <div className="b--black-30 br flex items-center justify-center pa2">
                                    <Circle size={16} />
                                </div>
                                <div className="b--black-30 br flex items-center justify-center pa2">
                                    <Circle size={16} />
                                </div>
                                <div className="b--black-30 br flex items-center justify-center pa2">
                                    <Circle size={16} />
                                </div>
                                <div className="b--black-30 br flex items-center justify-center pa2">
                                    <Circle size={16} />
                                </div>
                                <div className="flex items-center justify-center pa2 w3">
                                    <Rectangle />
                                </div>
                            </div>
                        </div>
                    }
                    source={`
<div style="
    display: flex;

    /* Border */
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
">
    <!-- Pagination item -->
    <div style="
        /* Content is centered */
        align-items: center;
        display: flex;
        justify-content: center;

        /* Right border */
        border-right: 1px solid rgba(0, 0, 0, 0.3);
    ">
        ...
    </div>

    <!-- Don't set the right border for the last item -->
    <div style="
        /* Content is centered */
        align-items: center;
        display: flex;
        justify-content: center;

        /* No right border */
        border-right: none;
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
