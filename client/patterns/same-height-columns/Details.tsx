import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details = () => {
    return (
        <DetailsLayout title="Same height columns">
            <div className="ph4 pv5">
                <BrowserFrame
                    content={
                        <div className="h-100 flex flex-column items-center justify-center pa3">
                            <div className="flex h-100 w-100">
                                <div className="b--black-20 ba br2 mh2 flex flex-column" style={{ flex: 1 }}>
                                    <Rectangle height={200} />
                                    <div className="pa3" style={{ flex: 1 }}>
                                        <Block numberOfBlocks={10} />
                                    </div>
                                    <div className="pa3 w4">
                                        <Rectangle height={32} />
                                    </div>
                                </div>
                                <div className="b--black-20 ba br2 mh2 flex flex-column" style={{ flex: 1 }}>
                                    <Rectangle height={200} />
                                    <div className="pa3" style={{ flex: 1 }}>
                                        <div className="mb3"><Block numberOfBlocks={15} /></div>
                                        <Block numberOfBlocks={5} />
                                    </div>
                                    <div className="pa3 w4">
                                        <Rectangle height={32} />
                                    </div>
                                </div>
                                <div className="b--black-20 ba br2 mh2 flex flex-column" style={{ flex: 1 }}>
                                    <Rectangle height={200} />
                                    <div className="pa3" style={{ flex: 1 }}>
                                        <div className="mb3"><Block numberOfBlocks={5} /></div>
                                        <Block numberOfBlocks={10} />
                                    </div>
                                    <div className="pa3 w4">
                                        <Rectangle height={32} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    source={`
<div style="display: flex;">
    <!-- Column -->
    <div style="
        flex: 1;
        /* Space between columns */
        margin: 0 8px;

        /* Layout each column */
        display: flex;
        flex-direction: column;
    ">
        <!-- Cover -->
        ...

        <!-- Content -->
        <div style="
            /* Take available height */
            flex: 1;
        ">
            ...
        </div>

        <!-- Button sticks to the bottom -->
        ...
    </div>

    <!-- Repeat with other columns -->
    ...
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
