import * as React from 'react';
import Head from 'next/head';

import { PrefixContext } from '../../context/prefixContext';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'swatch';
    return (
        <PatternLayout pattern={Pattern.ColorSwatch}>
            <Head>
                <meta name="description" content="Create a color swatch with CSS flexbox" />
                <meta name="og:description" content="Create a color swatch with CSS flexbox" />
                <meta name="twitter:description" content="Create a color swatch with CSS flexbox" />
                <meta name="keywords" content="css color swatch, css flexbox" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <div class="${prefix}${container}__item" style="background-color: ..."></div>

    <!-- Repeat other items -->
    ...
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    /* Wrap the items */
    display: flex;
    flex-wrap: wrap;
}
.${prefix}${container}__item {
    /* Rounded border */
    border-radius: 9999px;
    height: 1.5rem;
    width: 1.5rem;

    /* Space between items */
    margin: 0.5rem;
}
`
                }
            >
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        height: '100%',
                        justifyContent: 'center',
                        padding: '0.5rem',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}
                    >
                        {Array(9)
                            .fill(0)
                            .map((_, index) => (
                                <div
                                    key={index}
                                    style={{
                                        backgroundColor: `rgba(0, 0, 0, 0.${index + 1})`,
                                        borderRadius: '9999px',
                                        height: '1.5rem',
                                        margin: '0.5rem',
                                        width: '1.5rem',
                                    }}
                                />
                            ))}
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;
