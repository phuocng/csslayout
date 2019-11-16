import React from 'react';

import DetailsLayout from '../DetailsLayout';
import Block from '../placeholders/Block';
import BrowserFrame from '../placeholders/BrowserFrame';
import Rectangle from '../placeholders/Rectangle';
import SampleCode from '../SampleCode';
import useDocumentTitle from '../useDocumentTitle';

const StickyHeader = () => {
    useDocumentTitle('CSS Layout ∙ Sticky header');

    return (
        <DetailsLayout>
            <h1 className="f1 tc">Sticky header</h1>
            <BrowserFrame
                content={
                    <div>
                        <div className="top-0 bg-white bb b--black-30 pa3" style={{ position: 'sticky' }}>
                            <div className="w-50"><Rectangle /></div>
                        </div>
                        <div className="pa3">
                            <div className="mb4"><Block numberOfBlocks={20} /></div>
                            <div className="mb4"><Block numberOfBlocks={40} /></div>
                            <div><Block numberOfBlocks={30} /></div>
                        </div>
                    </div>
                }
                source={
<SampleCode
lang="html"
code={`
<div>
    <header style="
        position: sticky;
        top: 0;
    ">
        ...
    </header>
    <main>
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

export default StickyHeader;
