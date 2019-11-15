import React from 'react';

import DetailsLayout from '../DetailsLayout';
import BrowserFrame from '../placeholders/BrowserFrame';
import SampleCode from '../SampleCode';
import useDocumentTitle from '../useDocumentTitle';

const StickyHeader = () => {
    useDocumentTitle('CSS Layout ∙ Sticky header');

    return (
        <DetailsLayout>
            <h1 className="f1 tc">Sticky header</h1>
            <BrowserFrame
                content={
                    <div>
                        <div className="top-0 bg-white bb b--black-30 bw1 pa3" style={{ position: 'sticky' }}>
                            Header
                        </div>
                        <div className="pa3">
                            <div className="lh-copy mb3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Urna id volutpat lacus laoreet non curabitur gravida. Eu mi bibendum neque egestas congue quisque egestas. Turpis egestas pretium aenean pharetra magna ac placerat. Proin sagittis nisl rhoncus mattis rhoncus urna. Est velit egestas dui id. Auctor neque vitae tempus quam pellentesque. Convallis a cras semper auctor neque. Consequat nisl vel pretium lectus quam id leo. Netus et malesuada fames ac. Dictum at tempor commodo ullamcorper a. Tellus in metus vulputate eu scelerisque. Morbi tristique senectus et netus et. Suscipit tellus mauris a diam maecenas sed enim. Eu facilisis sed odio morbi. Fermentum iaculis eu non diam phasellus.</div>
                            <div className="lh-copy mb3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Urna id volutpat lacus laoreet non curabitur gravida. Eu mi bibendum neque egestas congue quisque egestas. Turpis egestas pretium aenean pharetra magna ac placerat. Proin sagittis nisl rhoncus mattis rhoncus urna. Est velit egestas dui id. Auctor neque vitae tempus quam pellentesque. Convallis a cras semper auctor neque. Consequat nisl vel pretium lectus quam id leo. Netus et malesuada fames ac. Dictum at tempor commodo ullamcorper a. Tellus in metus vulputate eu scelerisque. Morbi tristique senectus et netus et. Suscipit tellus mauris a diam maecenas sed enim. Eu facilisis sed odio morbi. Fermentum iaculis eu non diam phasellus.</div>
                            <div className="lh-copy mb3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Urna id volutpat lacus laoreet non curabitur gravida. Eu mi bibendum neque egestas congue quisque egestas. Turpis egestas pretium aenean pharetra magna ac placerat. Proin sagittis nisl rhoncus mattis rhoncus urna. Est velit egestas dui id. Auctor neque vitae tempus quam pellentesque. Convallis a cras semper auctor neque. Consequat nisl vel pretium lectus quam id leo. Netus et malesuada fames ac. Dictum at tempor commodo ullamcorper a. Tellus in metus vulputate eu scelerisque. Morbi tristique senectus et netus et. Suscipit tellus mauris a diam maecenas sed enim. Eu facilisis sed odio morbi. Fermentum iaculis eu non diam phasellus.</div>
                            <div className="lh-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Urna id volutpat lacus laoreet non curabitur gravida. Eu mi bibendum neque egestas congue quisque egestas. Turpis egestas pretium aenean pharetra magna ac placerat. Proin sagittis nisl rhoncus mattis rhoncus urna. Est velit egestas dui id. Auctor neque vitae tempus quam pellentesque. Convallis a cras semper auctor neque. Consequat nisl vel pretium lectus quam id leo. Netus et malesuada fames ac. Dictum at tempor commodo ullamcorper a. Tellus in metus vulputate eu scelerisque. Morbi tristique senectus et netus et. Suscipit tellus mauris a diam maecenas sed enim. Eu facilisis sed odio morbi. Fermentum iaculis eu non diam phasellus.</div>
                        </div>
                    </div>
                }
                source={
<SampleCode
lang="html"
code={`
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
                }
            />
        </DetailsLayout>
    );
};

export default StickyHeader;
