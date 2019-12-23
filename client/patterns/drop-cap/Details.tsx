import React from 'react';
import { Helmet } from 'react-helmet';

import './dropcap.css';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Drop cap">
            <Helmet>
                <meta name="description" content="Create a drop cap with CSS" />
                <meta name="keywords" content="css drop cap" />
            </Helmet>
            <div style={{ padding: '64px 32px' }}>
                <BrowserFrame
                    content={(
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                justifyContent: 'center',
                                padding: '8px',
                            }}
                        >
                            <div style={{ width: '256px' }}>
                                <div className="p-drop-cap">
                                    Cascading Style Sheets (CSS) is a style sheet language used for
                                    describing the presentation of a document written in a markup
                                    language like HTML. CSS is a cornerstone technology of the World Wide Web,
                                    alongside HTML and JavaScript.
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<style>
/* Styles for the first letter */
.p-drop-cap:first-letter {
    /* Display at the left */
    float: left;
    line-height: 1;

    /* Spacing */
    margin: 0 8px 0 0;
    padding: 0 8px;

    /* Optional */
    font-size: 64px;
    font-weight: 700;
}
</style>

<div class="p-drop-cap">
    ...
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
