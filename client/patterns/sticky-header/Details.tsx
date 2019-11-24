import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Sticky header">
            <div className="ph4 pv5">
                <div className="lh-copy mb3">
                    Try to scroll the main content to see the header sticks to the top of page.
                </div>
                <BrowserFrame
                    content={(
                        <div>
                            <div className="top-0 bg-white bb b--black-30 pa3" style={{ position: 'sticky' }}>
                                <div className="w-50"><Rectangle /></div>
                            </div>
                            <div className="pa3">
                                <div className="mb4"><Block numberOfBlocks={20} /></div>
                                <div className="mb4"><Block numberOfBlocks={40} /></div>
                                <div><Block numberOfBlocks={30} /></div>
                            </div>
                        </div>
                    )}
                    source={`
<div>
    <header style="
        position: sticky;
        top: 0;
    ">
        ...
    </header>
    <main>
        ...
    </main>
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
