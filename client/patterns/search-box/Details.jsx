import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import SampleCode from '../../SampleCode';

const Details = () => {
    return (
        <DetailsLayout title="Search box">
            <BrowserFrame
                content={
                    <div className="h-100 flex flex-column items-center justify-center">
                        <div className="w5">
                            <div className="mb3 b--black-30 ba br1 flex">
                                <input type="text" placeholder="Search" className="pa1 b--transparent" style={{ flex: 1 }} />
                                <div className="pa2">
                                    <Circle />
                                </div>
                            </div>

                            <div className="b--black-30 ba br1 flex flex-row-reverse">
                                <input type="text" placeholder="Search" className="pa1 b--transparent" style={{ flex: 1 }} />
                                <div className="pa2">
                                    <Circle />
                                </div>
                            </div>
                        </div>
                    </div>
                }
                source={
<SampleCode
lang="html"
code={`
<div style="
    display: flex;

    /* If you want to place the icon before the text input */
    flex-direction: row-reverse;

    /* Border */
    border: 1px solid rgba(0, 0, 0, 0.3);
">
    <!-- Text input -->
    <input
        type="text"
        style="
            border-color: transparent;
            /* Take available width */
            flex: 1;
        "
    />

    <!-- Search icon sticks to the left or right -->
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
