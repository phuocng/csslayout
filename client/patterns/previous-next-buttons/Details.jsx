import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';
import SampleCode from '../../SampleCode';

const Details = () => {
    return (
        <DetailsLayout title="Previous and next buttons">
            <div className="ph4 pv5">
                <BrowserFrame
                    content={
                        <div className="h-100 flex flex-column items-center justify-center">
                            <div className="w-50">
                                <div className="flex items-center justify-between pa2 w-100 h2">
                                    <a className="b--black-30 ba br2 flex flex-row pa2 items-center w-30">
                                        <div className="mr2">&lt;</div>
                                        <Rectangle />
                                    </a>
                                    <a className="b--black-30 ba br2 flex flex-row pa2 items-center w-30">
                                        <Rectangle />
                                        <div className="ml2">&gt;</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    }
                    source={
<SampleCode
lang="html"
code={`
<div style="
    align-items: center;
    display: flex;
    justify-content: space-between;
">
    <!-- Previous link sticks to the left -->
    <a>..</a>

    <!-- Next link sticks to the right -->
    <a>..</a>
</div>
`}
/>
                    }
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
