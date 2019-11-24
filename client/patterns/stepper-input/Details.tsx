import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    const [value, setValue] = useState(0);
    const decrease = () => setValue(value - 1);
    const increase = () => setValue(value + 1);
    const change = (e: React.ChangeEvent<HTMLInputElement>) => setValue(parseInt(e.target.value, 10));

    return (
        <DetailsLayout title="Stepper input">
            <div className="ph4 pv5">
                <div className="lh-copy mb3">
                    The content of minus and plus buttons are centered by using the technique in the <Link to="/centering" className="link">Centering</Link> page.
                </div>
                <BrowserFrame
                    content={
                        <div className="h-100 flex flex-column items-center justify-center">
                            <div className="b--black-30 ba br2 flex h2 w4">
                                <button className="bg-black-05 bn flex items-center justify-center pointer w2" onClick={decrease}>-</button>
                                <div className="b--black-30 ba bb-0 bt-0 h-100" style={{ flex: 1 }}>
                                    <input type="text" className="bn h-100 pa2 w-100" value={value} onChange={change} />
                                </div>
                                <button className="bg-black-05 bn flex items-center justify-center pointer w2" onClick={increase}>+</button>
                            </div>
                        </div>
                    }
                    source={`
<div style="
    display: flex;

    /* Border */
    border: 1px solid rgba(0, 0, 0, .3);

    /* Size */
    height: 32px;
    width: 128px;
">
    <!-- Minus button -->
    <button style="
        /* Content is centered */            
        align-items: center;
        display: flex;
        justify-content: center;
        
        /* Size */
        width: 32px;
    ">-</button>

    <!-- Input container -->
    <div style="flex: 1">
        <input type="text" style="
            /* Take full size of its container */
            height: 100%;
            width: 100%;
        " />
    </div>

    <!-- Plus button -->
    <button style="
        /* Content is centered */                    
        align-items: center;
        display: flex;
        justify-content: center;

        /* Size */
        width: 32px;
    ">+</button>
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
