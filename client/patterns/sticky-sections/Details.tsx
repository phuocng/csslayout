import React from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Sticky sections">
            <Helmet>
                <meta name="description" content="Create sticky sections with CSS" />
                <meta name="keywords" content="css layout, css sticky, css sticky sections" />
            </Helmet>
            <div style={{ padding: '64px 32px' }}>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    Try to scroll the main content to see each section sticks to the top of page.
                </div>
                <BrowserFrame
                    content={(
                        <div
                            style={{
                                height: '100%',
                                overflow: 'scroll',
                            }}
                        >
                            <section
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    height: '100%',
                                    position: 'sticky',
                                    top: 0,
                                    width: '100%',
                                }}
                            />
                            <section
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    height: '100%',
                                    position: 'sticky',
                                    top: 0,
                                    width: '100%',
                                }}
                            />
                            <section
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    height: '100%',
                                    position: 'sticky',
                                    top: 0,
                                    width: '100%',
                                }}
                            />
                        </div>
                    )}
                    source={`
<div style="
    height: 100%;
    overflow: scroll;
">
    <section style="
        /* Take full size */
        height: 100%;
        width: 100%;

        /* Stick to the top */
        position: sticky;
        top: 0;
    ">
        ...
    </section>

    <!-- Repeat other sections -->
    ...
</div>
`}
                />
            </div>

            <RelatedPatterns patterns={[Pattern.StickyHeader, Pattern.StickyTableColumn, Pattern.StickyTableHeaders]} />
        </DetailsLayout>
    );
};

export default Details;
