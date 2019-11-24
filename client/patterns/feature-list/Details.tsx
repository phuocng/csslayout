import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Feature list">
            <div className="ph4 pv5">
                <BrowserFrame
                    content={(
                        <div className="flex h-100 items-center justify-center">
                            <div className="w-60">
                                <div className="flex flex-row mb4">
                                    <div className="mh3"><Circle size={128} /></div>
                                    <div style={{ flex: 1 }}>
                                        <div className="mb4"><Rectangle height={8} /></div>
                                        <Block numberOfBlocks={10} />
                                    </div>
                                </div>
                                <div className="flex flex-row flex-row-reverse mb4">
                                    <div className="mh3"><Circle size={128} /></div>
                                    <div style={{ flex: 1 }}>
                                        <div className="mb4"><Rectangle height={8} /></div>
                                        <Block numberOfBlocks={15} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<!-- Feature item -->
<div style="
    display: flex;

    /* OPTIONAL: Reverse the order of image and content */
    flex-direction: row-reverse;

    /* OPTIONAL: Spacing between items */
    margin: 16px 0;
">
    <!-- Image -->
    <div style="
        width: 128px;
    ">
        ...
    </div>

    <!-- Right side -->
    <div style="
        /* Take the remaining width */
        flex: 1;
    ">
        ...
    </div>
</div>

<!-- Repeated items -->
...
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
