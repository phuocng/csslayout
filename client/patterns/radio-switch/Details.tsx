import React, { useState } from 'react';

import Heading from '../../components/Heading';
import RelatedPatterns from '../../components/RelatedPatterns';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    const [isFirstChecked, setFirstChecked] = useState(false);
    const toggle = () => setFirstChecked(c => !c);

    return (
        <DetailsLayout title="Radio switch">
            <div className="ph4 pv5">
                <BrowserFrame
                    content={
                        <div className="h-100 flex flex-column items-center justify-center">
                            <div className="inline-flex br-pill bg-black-10 pa1">
                                <label className={`pointer pv3 ph2 br-pill ${isFirstChecked ? 'bg-blue white' : ''}`}>
                                    <input type="radio" className="dn" checked={isFirstChecked} onChange={toggle} />
                                    <div className={`w3 br1 ${isFirstChecked ? 'bg-white' : 'bg-black-20'}`} style={{ height: '8px' }}  />
                                </label>
                                <label className={`pointer pv3 ph2 br-pill ${isFirstChecked ? '' : 'bg-blue white'}`}>
                                    <input type="radio" className="dn" checked={!isFirstChecked} onChange={toggle} />
                                    <div className={`w3 br1 ${isFirstChecked ? 'bg-black-20' : 'bg-white'}`} style={{ height: '8px' }}  />
                                </label>
                            </div>
                        </div>
                    }
                    source={`
<!-- Container -->
<div style="
    background-color: rgba(0, 0, 0, .1);
    border-radius: 9999px;
    display: inline-flex;
    padding: 4px;
">
    <!-- Radio container -->
    <label style="
        border-radius: 9999px;
        cursor: pointer;
        padding: 4px 8px;

        /* For selected radio only */
        background-color: #357edd;
        color: #fff;
    ">
        <input type="radio" style="display: none" />

        <!-- Text -->
        ...
    </label>

    <!-- Other radio item -->
    ...
</div>
`}
                />
            </div>
            <section>
                <Heading title="Use cases" />

                <div className="pa4">
                    <div className="inline-flex br-pill bg-black-10 pa1">
                        <label className="pointer pv1 ph2 br-pill flex bg-blue white">
                            <input type="radio" className="dn" />
                            Monthly
                        </label>
                        <label className="pointer pv1 ph2 br-pill flex">
                            <input type="radio" className="dn" />
                            Yearly
                        </label>
                    </div>
                </div>
            </section>
            <RelatedPatterns patterns={['Switch']} />
        </DetailsLayout>
    );
};

export default Details;
