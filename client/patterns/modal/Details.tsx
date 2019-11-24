import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Modal">
            <div className="ph4 pv5">
                <BrowserFrame
                    content={
                        <div className="h-100 flex flex-column items-center justify-center">
                            <div className="b--black-30 ba br2 w-50">
                                <div className="flex items-center justify-between bb b--black-30 pa3">
                                    <div className="w-60"><Rectangle /></div>
                                    <div className="black-70">
                                        <Circle />
                                    </div>
                                </div>
                                <div className="pa3">
                                    <div className="mb3"><Block numberOfBlocks={10} /></div>
                                    <Block numberOfBlocks={5} />
                                </div>
                                <div className="flex justify-end bt b--black-30 pa3">
                                    <div className="w-30 mr2"><Rectangle height={32} /></div>
                                    <div className="w-30"><Rectangle height={32} /></div>
                                </div>
                            </div>
                        </div>
                    }
                    source={`
<div style="
    /* Border */
    border: 1px solid rgba(0, 0, 0.3);
    border-radius: 4px;
">
    <!-- Header -->
    <div style="
        display: flex;
        justify-content: space-between;
        /* Border */
        border-bottom: 1px solid rgba(0, 0, 0.3);
    ">
        <!-- Title -->
        ...
        <!-- Close icon sticks to the right -->
        ...
    </div>

    <!-- Content -->
    ...

    <!-- Footer -->
    <div style="
        display: flex;
        /* Push the buttons to the right */
        justify-content: flex-end;
        /* Border */
        border-top: 1px solid rgba(0, 0, 0.3);
    ">
        ...
    </div>
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
