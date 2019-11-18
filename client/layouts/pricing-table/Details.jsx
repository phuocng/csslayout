import React from 'react';

import DetailsLayout from '../../DetailsLayout';
import Circle from '../../placeholders/Circle';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';
import SampleCode from '../../SampleCode';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Details = () => {
    useDocumentTitle('CSS Layout ∙ Pricing table');

    return (
        <DetailsLayout>
            <h1 className="f1 tc">Pricing table</h1>
            <BrowserFrame
                content={
                    <div className="h-100 flex items-center justify-center pa3">
                        <div className="w-60 flex items-center justify-center">
                            <div className="ba br2 b--black-30 flex flex-column items-center justify-center pa3 mh2" style={{ flex: 1 }}>
                                <div className="mb3 w-60"><Rectangle /></div>
                                <div className="mb3"><Circle size={64} /></div>
                                <div className="mb3 w-100">
                                    <Block numberOfBlocks={10} />
                                </div>
                                <div className="w-40"><Rectangle height={32} /></div>
                            </div>
                            <div className="ba br2 b--black-30 flex flex-column items-center justify-center pa3 mh2" style={{ flex: 1 }}>
                                <div className="mb3 w-60"><Rectangle /></div>
                                <div className="mb3"><Circle size={64} /></div>
                                <div className="mb3 w-100">
                                    <Block numberOfBlocks={20} />
                                </div>
                                <div className="w-40"><Rectangle height={32} /></div>
                            </div>
                            <div className="ba br2 b--black-30 flex flex-column items-center justify-center pa3 mh2" style={{ flex: 1 }}>
                            <div className="mb3 w-60"><Rectangle /></div>
                                <div className="mb3"><Circle size={64} /></div>
                                <div className="mb3 w-100">
                                    <Block numberOfBlocks={10} />
                                </div>
                                <div className="w-40"><Rectangle height={32} /></div>
                            </div>
                        </div>
                    </div>
                }
                source={
<SampleCode
lang="html"
code={`
<div style="
    /* Content is centered horizontally */
    align-items: center;
    display: flex;
    justify-content: center;
">
    <!-- Pricing column -->
    <div style="
        /* Content is centered vertically */
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;

        /* Make all columns have the same width */
        flex: 1;

        /* OPTIONAL: Space between columns */
        margin: 0 8px;

        /* OPTIONAL: Border */
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 4px;
    ">
        <!-- Title -->
        ...

        <!-- Price -->
        ...

        <!-- Description -->
        ...

        <!-- Button -->
        ...
    </div>

    <!-- Repeated pricing columns -->
    ...
</div>
`}
/>
                }
            />
        </DetailsLayout>
    );
};

export default Details;
