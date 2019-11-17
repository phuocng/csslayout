import React from 'react';

import DetailsLayout from '../../DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Block from '../../placeholders/Block';
import Dot from '../../placeholders/Dot';
import Rectangle from '../../placeholders/Rectangle';
import SampleCode from '../../SampleCode';
import useDocumentTitle from '../../useDocumentTitle';

const Details = () => {
    useDocumentTitle('CSS Layout ∙ Split screen');

    return (
        <DetailsLayout>
            <h1 className="f1 tc">Split screen</h1>
            <BrowserFrame
                content={
                    <div className="h-100 flex">
                        <div className="b--black-30 br flex flex-column justify-center items-center" style={{ flex: 1 }}>
                            <div className="mb3"><Dot size={128} /></div>
                            <div className="w-60"><Rectangle /></div>
                        </div>
                        <div className="flex flex-column justify-center" style={{ flex: 1 }}>
                            <div className="pa4">
                                <div className="mb4"><Rectangle /></div>
                                <div className="mb4"><Block numberOfBlocks={15} /></div>
                                <Block numberOfBlocks={10} />
                            </div>
                        </div>
                    </div>
                }
                source={
<SampleCode
lang="html"
code={`
<div style="display: flex;">
    <!-- Left content -->
    <div style="flex: 1;">
        ...
    </div>

    <!-- Right content -->
    <div style="flex: 1;">
        ...
    </div>
</div>
`}
/>
                }
            />
        </DetailsLayout>
    );
};

export default Details;
