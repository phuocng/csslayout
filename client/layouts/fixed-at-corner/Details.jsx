import React from 'react';

import DetailsLayout from '../../DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Triangle from '../../placeholders/Triangle';
import SampleCode from '../../SampleCode';
import useDocumentTitle from '../../useDocumentTitle';

const Details = () => {
    useDocumentTitle('CSS Layout ∙ Fixed at corner');

    return (
        <DetailsLayout>
            <h1 className="f1 tc">Fixed at corner</h1>
            <BrowserFrame
                content={
                    <div className="relative h-100">
                        <div className="absolute top-0 left-0">
                            <Triangle size={64} corner="tl" />
                        </div>
                        <div className="absolute top-0 right-0">
                            <Triangle size={64} corner="tr" />
                        </div>
                        <div className="absolute bottom-0 right-0">
                            <Triangle size={64} corner="br" />
                        </div>
                        <div className="absolute bottom-0 left-0">
                            <Triangle size={64} corner="bl" />
                        </div>
                    </div>
                }
                source={
<SampleCode
lang="html"
code={`
<div style="
    position: relative;
">
    <!-- Top-left corner -->
    <div style="
        left: 0;
        position: absolute;
        top: 0;
    ">
        ...
    </div>

    <!-- Top-right corner -->
    <div style="
        position: absolute;
        top: 0;
        right: 0;
    ">
        ...
    </div>

    <!-- Bottom-right corner -->
    <div style="
        bottom: 0;
        position: absolute;
        right: 0;
    ">
        ...
    </div>

    <!-- Bottom-left corner -->
    <div style="
        bottom: 0;
        left: 0;
        position: absolute;
    ">
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
