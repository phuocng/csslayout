import React from 'react';

import DetailsLayout from '../../DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';
import SampleCode from '../../SampleCode';

const Details = () => {
    return (
        <DetailsLayout title="Breadcrumb">
            <BrowserFrame
                content={
                    <div className="h-100 flex flex-column items-center justify-center">
                        <div className="flex items-center">
                            <div className="w4"><Rectangle height={16} /></div>
                            <div className="mh1 f2 black-30">/</div>
                            <div className="w2"><Rectangle height={16} /></div>
                            <div className="mh1 f2 black-30">/</div>
                            <div className="w3"><Rectangle height={16} /></div>
                            <div className="mh1 f2 black-30">/</div>
                            <div className="w2"><Rectangle height={16} /></div>
                        </div>
                    </div>
                }
                source={
<SampleCode
lang="html"
code={`
<div style="
    /* Content is centered vertically */
    align-items: center;
    display: flex;
">
    <!-- Breadcrumb item -->
    <a>...</a>

    <!-- Separator -->
    <div style="margin: 0 8px;">/</span>

    <!-- Repeated items and separators -->
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
