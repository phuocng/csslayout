import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';
import SampleCode from '../../SampleCode';

const Details = () => {
    return (
        <DetailsLayout title="Split navigation">
            <div className="ph4 pv5">
                <BrowserFrame
                    content={
                        <div className="h-100 flex flex-column items-center justify-center">
                            <ul className="list ma0 b--black-30 ba br3 flex items-center pa3 w-60">
                                <li className="w-20 mr1"><Rectangle /></li>
                                <li className="w-10 mr1"><Rectangle /></li>
                                <li className="w-20 mr1"><Rectangle /></li>
                                <li className="w-10 ml-auto"><Rectangle /></li>
                            </ul>
                        </div>
                    }
                    source={
<SampleCode
lang="html"
code={`
<ul style="
    /* Content is centered horizontally */
    align-items: center;
    display: flex;

    /* Reset styles */
    list-stype-type: none;
    margin: 0;
">
    <!-- Navigation item -->
    <li>
        <a href="">...</a>
    </li>

    <!-- Navigation item that sticks to the right -->
    <li style="
        /* Sticks to the right */
        margin-left: auto;
    ">
        <a href="">...</a>
    </li>
</ul>
`}
/>
                    }
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
