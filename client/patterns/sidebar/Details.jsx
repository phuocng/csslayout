import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Block from '../../placeholders/Block';

const Details = () => {
    return (
        <DetailsLayout title="Sidebar">
            <div className="ph4 pv5">
                <div className="lh-copy mb3">Try to scroll the main content!</div>
                <BrowserFrame
                    content={
                        <div className="h-100 flex">
                            <div className="b--black-30 br flex flex-column justify-end pa3 w-30">
                                <div className="mb3"><Block numberOfBlocks={5} /></div>
                                <div className="w-80"><Block numberOfBlocks={4} /></div>
                            </div>
                            <div className="flex-grow-1 pa3 overflow-scroll">
                                <div className="mb4"><Block numberOfBlocks={20} /></div>
                                <div className="mb4"><Block numberOfBlocks={20} /></div>
                                <div className="mb4"><Block numberOfBlocks={20} /></div>
                                <div className="mb4"><Block numberOfBlocks={20} /></div>
                                <div className="w-80"><Block numberOfBlocks={10} /></div>
                            </div>
                        </div>
                    }
                    source={`
<div style="display: flex;">
    <!-- Sidebar -->
    <aside style="width: 30%;">
        ...
    </aside>

    <!-- Main -->
    <main style="
        flex-grow: 1;
        overflow: scroll;
    ">
        ...
    </main>
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
