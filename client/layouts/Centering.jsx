import React from 'react';

import DetailsLayout from '../DetailsLayout';
import BrowserFrame from '../placeholders/BrowserFrame';

const Centering = () => {
    return (
        <DetailsLayout name="Centering">
            <BrowserFrame>
                <div className="h-100 flex flex-column items-center justify-center">
                    <div className="f1 b">CENTER</div>
                </div>
            </BrowserFrame>
        </DetailsLayout>
    );
};

export default Centering;
