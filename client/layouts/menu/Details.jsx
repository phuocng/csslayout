import React from 'react';

import DetailsLayout from '../../DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';
import SampleCode from '../../SampleCode';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Details = () => {
    useDocumentTitle('CSS Layout ∙ Menu');

    return (
        <DetailsLayout>
            <h1 className="f1 tc">Menu</h1>
            <BrowserFrame
                content={
                    <div className="h-100 flex flex-column items-center justify-center">
                        <div className="b--black-30 ba br2 flex flex-column w-40">
                            <div className="flex items-center h2 ph2 hover-bg-black-10">
                                <div className="w-40"><Rectangle /></div>
                            </div>
                            <div className="flex items-center h2 ph2 hover-bg-black-10">
                                <Circle />
                                <div className="w-50 ml1"><Rectangle /></div>
                            </div>
                            <div className="flex items-center justify-between h2 ph2 hover-bg-black-10">
                                <div className="w-30"><Rectangle /></div>
                                <div>Ctrl + X</div>
                            </div>
                            <div className="flex items-center justify-between h2 ph2 hover-bg-black-10">
                                <div className="w-70"><Rectangle /></div>
                                <div>Ctrl + C</div>
                            </div>
                            <div className="flex items-center justify-between h2 ph2 hover-bg-black-10">
                                <div className="w-20"><Rectangle /></div>
                                <Circle />
                            </div>
                            <div className="flex items-center justify-between h2 ph2 hover-bg-black-10">
                                <div className="flex items-center w-80">
                                    <Circle />
                                    <div className="w-50 ml1"><Rectangle /></div>
                                </div>
                                <Circle />
                            </div>
                            <div className="b--black-30 bb" style={{ height: '1px' }} />
                            <div className="flex items-center justify-between h2 ph2 hover-bg-black-10">
                                <div className="w-40"><Rectangle /></div>
                                <div>Ctrl + V</div>
                            </div>
                        </div>
                    </div>
                }
                source={
<SampleCode
lang="html"
code={`
<div style="
    display: flex;
    flex-direction: column;

    /* Border */
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
">
    <!-- Normal menu item -->
    <div style="
        /* Center the content horizontally */
        align-items: center;
        display: flex;
    ">
        ...
    </div>

    <!-- With hot key -->
    <div style="
        align-items: center;
        display: flex;
        /* Push the hot key to the right */
        justify-content: space-between;
    ">
        <!-- Label -->
        ...
        <!-- Hot key -->
        ...
    </div>

    <!-- With image and hot key -->
    <div style="
        align-items: center;
        display: flex;
        /* Push the hot key to the right */
        justify-content: space-between;
    ">
        <div style="
            align-items: center;
            display: flex;
        ">
            <!-- Image -->
            ...
            <!-- Label -->
            ...
        </div>

        <!-- Hot key -->
        ...
    </div>

    <!-- Divider -->
    <div style="
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        height: 1px;
    " />
</div>
`}
/>
                }
            />
        </DetailsLayout>
    );
};

export default Details;
