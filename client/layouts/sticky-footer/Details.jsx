import React from 'react';

import DetailsLayout from '../../DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';
import SampleCode from '../../SampleCode';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Details = () => {
    useDocumentTitle('CSS Layout ∙ Sticky footer');

    return (
        <DetailsLayout>
            <h1 className="f1 tc">Sticky footer</h1>
            <div className="lh-copy mb3">
                The footer always sticks to the bottom if the main content is short.
            </div>
            <BrowserFrame
                content={
                    <div className="h-100 flex flex-column">
                        <div className="flex-shrink-0 bb b--black-30 pa3">
                            <div className="w-50"><Rectangle /></div>
                        </div>
                        <div className="flex-grow-1 pa3">
                            <Block numberOfBlocks={20} />
                        </div>
                        <div className="flex-shrink-0 bt b--black-30 pa3">
                        <div className="w-40"><Rectangle /></div>
                        </div>
                    </div>
                }
                source={
<SampleCode
lang="html"
code={`
<div style="
    display: flex;
    flex-direction: column;
    height: 100%;
">
    <header style="flex-shrink: 0;">
        ...
    </header>
    <main style="flex-grow: 1;">
        ...
    </main>
    <footer style="flex-shrink: 0;">
        ...
    </footer>
</div>
`}
/>
                }
            />
        </DetailsLayout>
    );
};

export default Details;
