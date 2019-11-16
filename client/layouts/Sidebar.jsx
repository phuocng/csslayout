import React from 'react';

import DetailsLayout from '../DetailsLayout';
import BrowserFrame from '../placeholders/BrowserFrame';
import Block from '../placeholders/Block';
import SampleCode from '../SampleCode';
import useDocumentTitle from '../useDocumentTitle';

const Sidebar = () => {
    useDocumentTitle('CSS Layout ∙ Sidebar');

    return (
        <DetailsLayout>
            <h1 className="f1 tc">Sidebar</h1>
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
                source={
<SampleCode
lang="html"
code={`
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
                }
            />
        </DetailsLayout>
    );
};

export default Sidebar;
