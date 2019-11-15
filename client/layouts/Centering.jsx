import React from 'react';

import DetailsLayout from '../DetailsLayout';
import BrowserFrame from '../placeholders/BrowserFrame';

const Centering = () => {
    return (
        <DetailsLayout name="Centering">
            <BrowserFrame
                content={
                    <div className="h-100 flex flex-column items-center justify-center">
                        <div className="f1 b">CENTER</div>
                    </div>
                }
                source={
                    <div>source</div>
                }
            />
        </DetailsLayout>
    );
};

export default Centering;
