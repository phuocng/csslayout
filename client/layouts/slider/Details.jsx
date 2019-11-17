import React from 'react';

import DetailsLayout from '../../DetailsLayout';
import Circle from '../../placeholders/Circle';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';
import SampleCode from '../../SampleCode';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Details = () => {
    useDocumentTitle('CSS Layout ∙ Slider');

    return (
        <DetailsLayout>
            <h1 className="f1 tc">Slider</h1>
            <BrowserFrame
                content={
                    <div className="h-100 flex flex-column items-center justify-center">
                        <div className="flex items-center h1 w5">
                            <div className="w-20"><Rectangle height={2} /></div>
                            <Circle size={32} />
                            <div style={{ flex: 1 }}><Rectangle height={2} /></div>
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

    /* Size */
    height: 32px;
">
    <!-- Left side -->
    <div style="
        /* Width based on the current value */
        height: 2px;
        width: 20%;

        /* Colors */
        background-color: rgba(0, 0, 0, .3);
    " />
    
    <!-- Circle -->
    <div style="
        /* Size */
        height: 32px;
        width: 32px;

        /* Rounded border */
        border-radius: 9999px;

        /* Colors */
        background-color: rgba(0, 0, 0, .3);
    " />

    <!-- Right side -->
    <div style="
        /* Take the remaining width */
        flex: 1;
        height: 2px;

        /* Colors */
        background-color: rgba(0, 0, 0, .3);
    " />
</div>
`}
/>
                }
            />
        </DetailsLayout>
    );
};

export default Details;
