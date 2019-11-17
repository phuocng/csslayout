import React from 'react';

import DetailsLayout from '../../DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import SampleCode from '../../SampleCode';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Details = () => {
    useDocumentTitle('CSS Layout ∙ Notification');

    return (
        <DetailsLayout>
            <h1 className="f1 tc">Notification</h1>
            <BrowserFrame
                content={
                    <div className="h-100 flex flex-column items-center justify-center">
                        <div className="b--black-30 ba br2 flex justify-between w-60">
                            <div className="pa3 w-80"><Block numberOfBlocks={5} /></div>
                            <button className="black-30 bn f2 flex h2 items-center justify-center w2" style={{ marginRight: '1px' }}>
                                <svg
                                    viewBox="0 0 24 24"
                                    style={{
                                        stroke: 'rgb(0, 0, 0)',
                                        fill: 'none',
                                        strokeWidth: 1,
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round',
                                        height: '16px',
                                        width: '16px'
                                    }}>
                                        <path d="M12,0.5c6.351,0,11.5,5.149,11.5,11.5S18.351,23.5,12,23.5S0.5,18.351,0.5,12S5.649,0.5,12,0.5z M7,7l10,10 M17,7L7,17" />
                                </svg>
                            </button>
                        </div>
                    </div>
                }
                source={
<SampleCode
lang="html"
code={`
<div style="
    display: flex;
    justify-content: space-between;
">
    <!-- Content -->
    ...

    <!-- Close button sticks to the right -->
    ...
</div>
`}
/>
                }
            />
        </DetailsLayout>
    );
};

export default Details;
