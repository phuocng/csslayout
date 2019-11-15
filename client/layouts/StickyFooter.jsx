import React from 'react';

import DetailsLayout from '../DetailsLayout';
import BrowserFrame from '../placeholders/BrowserFrame';
import SampleCode from '../SampleCode';
import useDocumentTitle from '../useDocumentTitle';

const StickyFooter = () => {
    useDocumentTitle('CSS Layout ∙ Sticky footer');

    return (
        <DetailsLayout name="Sticky footer">
            <div className="lh-copy mb3">
                The footer always sticks to the bottom if the main content is short.
            </div>
            <BrowserFrame
                content={
                    <div className="h-100 flex flex-column ba b--black-30 bw1">
                        <div className="flex-shrink-0 bb b--black-30 bw1 pa3">
                            Header
                        </div>
                        <div className="flex-grow-1 pa3">
                            Content
                        </div>
                        <div className="flex-shrink-0 bt b--black-30 bw1 pa3">
                            Footer
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
    height: '100%';
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

export default StickyFooter;
