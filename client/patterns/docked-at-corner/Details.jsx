import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';
import SampleCode from '../../SampleCode';

const Details = () => {
    return (
        <DetailsLayout title="Docked at corner">
            <div className="ph4 pv5">
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
            </div>
            <div className="bt b--black-20 relative">
                <h3 className="absolute bg-white f4 left-2 lh-copy ma0 ph2 top-0" style={{ transform: 'translate(0px, -50%)' }}>Use cases</h3>

                <div className="pa4">
                    <div className="mb4 w4 pa2 relative ba b--black-30 br2">
                        Inbox
                        <div
                            className="absolute top-0 right-0 br-pill bg-blue white pa1 flex items-center justify-center"
                            style={{ height: '24px', transform: 'translate(50%, -50%)', width: '24px' }}
                        >
                            5
                        </div>
                    </div>
                    <div className="w-40 h4 pa3 relative ba b--black-30 br2">
                        Modal
                        <div
                            className="absolute top-0 right-0 br-pill bg-red white pa1 flex items-center justify-center"
                            style={{ height: '24px', transform: 'translate(50%, -50%)', width: '24px' }}
                        >
                            &times;
                        </div>
                    </div>
                </div>
            </div>
        </DetailsLayout>
    );
};

export default Details;
