import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';
import SampleCode from '../../SampleCode';

const Details = () => {
    return (
        <DetailsLayout title="Docked at corner">
            <BrowserFrame
                content={
                    <div className="h-100 flex flex-column items-center justify-center">
                        <div className="w4 pa3 relative ba b--black-30 br2">
                            <Rectangle />
                            <div
                                className="absolute top-0 right-0 br-pill bg-dark-blue h2 w2"
                                style={{ transform: 'translate(50%, -50%)' }}
                            />
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
    <!-- Docked at the top right corner -->
    <div style="
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(50%, -50%);

        /* Content is centered */
        align-items: center;
        display: flex;
        justify-content: center;
    ">
        ...
    </div>

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
