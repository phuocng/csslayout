import * as React from 'react';
import Head from 'next/head';

import { PrefixContext } from '../../context/prefixContext';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import { Pattern } from '../../constants/Pattern';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'badge';
    return (
        <PatternLayout pattern={Pattern.DropCap}>
            <Head>
                <meta name="description" content="Create a drop cap with CSS" />
                <meta name="og:description" content="Create a drop cap with CSS" />
                <meta name="twitter:description" content="Create a drop cap with CSS" />
                <meta name="keywords" content="css drop cap" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    ...
</div>
`
                }
                css={
                    '' +
                    `
/* Styles for the first letter */
.${prefix}${container}:first-letter {
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
`
                }
            >
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
                            Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation
                            of a document written in a markup language like HTML. CSS is a cornerstone technology of the
                            World Wide Web, alongside HTML and JavaScript.
                        </div>
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;
