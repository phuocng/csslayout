import React from 'react';

import DetailsLayout from '../../DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';
import SampleCode from '../../SampleCode';
import useDocumentTitle from '../../useDocumentTitle';

const Details = () => {
    useDocumentTitle('CSS Layout ∙ Holy grail');

    return (
        <DetailsLayout>
            <h1 className="f1 tc">Holy grail</h1>
            <BrowserFrame
                content={
                    <div className="h-100 flex flex-column">
                        <div className="flex-shrink-0 bb b--black-30 pa3">
                            <div className="w-50"><Rectangle /></div>
                        </div>
                        <div className="flex-grow-1 flex flex-row">
                            <div className="b--black-30 br pa3 w-25">
                                <Block numberOfBlocks={10} />
                            </div>
                            <div className="pa3 flex-auto">
                                <Block numberOfBlocks={20} />
                            </div>
                            <div className="b--black-30 bl pa3 w-20">
                                <Block numberOfBlocks={5} />
                            </div>
                        </div>
                        <div className="flex-shrink-0 bt b--black-30 pa3">
                            <div className="w-40"><Rectangle /></div>
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
">
    <header>
        ...
    </header>
    <main style="
        /* Take the remaining height */
        flex-grow: 1;
        
        /* Layout the left sidebar, main content and right sidebar */
        display: flex;
        flex-direction: row;
    ">
        <!-- Left sidebar -->
        <aside style="
            width: 25%;
        ">...</aside>

        <!-- Main content -->
        <article style="
            /* Take the remaining width */
            flex-grow: 1;
        ">
            ...
        </article>

        <!-- Right sidebar -->
        <nav style="
            width: 20%;
        ">...</nav>
    </main>
    <footer>
        ...
    </footer>
</div>
`}
/>
                }
            />
        </DetailsLayout>
    );
};

export default Details;
