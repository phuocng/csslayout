import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Badge">
            <div className="ph4 pv5">
                <BrowserFrame
                    content={(
                        <div className="h-100 flex flex-column items-center justify-center">
                            <div className="flex flex-column items-center justify-center white bg-black-30 br-pill w2 h2 f4">
                                1
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Content is centered */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Colors */
    background-color: rgba(0, 0, 0, .3);
    color: #FFF;

    /* Rounded border */
    border-radius: 9999px;
    height: 32px;
    width: 32px;
">
    ...
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
