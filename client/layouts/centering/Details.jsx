import React from 'react';

import DetailsLayout from '../../DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';
import SampleCode from '../../SampleCode';

const Details = () => {
    return (
        <DetailsLayout title="Centering">
            <BrowserFrame
                content={
                    <div className="h-100 flex flex-column items-center justify-center">
                        <Circle size={64} />
                        <div className="w-40 mt3"><Rectangle /></div>
                        <div className="w-30 mt2"><Rectangle /></div>
                        <div className="w-20 mt2"><Rectangle /></div>
                    </div>
                }
                source={
<SampleCode
lang="html"
code={`
<div style="
    align-items: center;
    display: flex;
    justify-content: center;
">
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
