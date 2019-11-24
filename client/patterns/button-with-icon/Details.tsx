import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Button with icon">
            <div className="ph4 pv5">
                <BrowserFrame
                    content={
                        <div className="h-100 flex flex-column items-center justify-center">
                            <div className="w5">
                                <button className="w-100 h3 flex flex-row items-center ba b--black-30 br2 ph2">
                                    <div className="mr2"><Circle size={32} /></div>
                                    <Rectangle />
                                </button>
                            </div>
                        </div>
                    }
                    source={`
<button style="
    /* Content is centered */
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
">
    <!-- Icon -->
    ...

    <!-- Label -->
    ...
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
