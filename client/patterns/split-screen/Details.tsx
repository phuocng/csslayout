import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Split screen">
            <div className="ph4 pv5">
                <BrowserFrame
                    content={(
                        <div className="h-100 flex">
                            <div
                                className="b--black-30 br flex flex-column justify-center items-center"
                                style={{ flex: 1 }}
                            >
                                <div className="mb3"><Circle size={128} /></div>
                                <div className="w-60"><Rectangle /></div>
                            </div>
                            <div className="flex flex-column justify-center" style={{ flex: 1 }}>
                                <div className="pa4">
                                    <div className="mb4"><Rectangle /></div>
                                    <div className="mb4"><Block numberOfBlocks={15} /></div>
                                    <Block numberOfBlocks={10} />
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="display: flex;">
    <!-- Left content -->
    <div style="flex: 1;">
        ...
    </div>

    <!-- Right content -->
    <div style="flex: 1;">
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
