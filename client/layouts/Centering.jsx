import React from 'react';

import DetailsLayout from '../DetailsLayout';
import BrowserFrame from '../placeholders/BrowserFrame';
import SampleCode from '../SampleCode';
import useDocumentTitle from '../useDocumentTitle';

const Centering = () => {
    useDocumentTitle('CSS Layout ∙ Centering');

    return (
        <DetailsLayout name="Centering">
            <BrowserFrame
                content={
                    <div className="h-100 flex flex-column items-center justify-center">
                        <div className="f1 b">CENTER</div>
                    </div>
                }
                source={
<SampleCode
lang="html"
code={`
<div style="
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
">
    CENTER
</div>
`}
/>
                }
            />
        </DetailsLayout>
    );
};

export default Centering;
