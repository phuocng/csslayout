import * as React from 'react';
import Head from 'next/head';

import { PrefixContext } from '../../context/prefixContext';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'container';
    return (
        <PatternLayout pattern={Pattern.StampBorder}>
            <Head>
                <meta name="description" content="Create stamp border with CSS" />
                <meta name="og:description" content="Create stamp border with CSS" />
                <meta name="twitter:description" content="Create stamp border with CSS" />
                <meta name="keywords" content="css radial gradient, css stamp border" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <!-- Inner -->
    <div class="${prefix}${container}__inner">
        <!-- Content -->
        ...
    </div>
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    /* Background */
    background-color: #ccc;
    background-image: radial-gradient(#fff 50%, transparent 50%);
    background-position: -5px -5px;
    background-repeat: repeat;
    background-size: 10px 10px;

    /* Spacing */
    padding: 5px;
}

.${prefix}${container}__inner {
    /* Background */
    background-color: #ccc;
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
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#ccc',
                            backgroundImage: 'radial-gradient(#fff 50%, transparent 50%)',
                            backgroundPosition: '-5px -5px',
                            backgroundRepeat: 'repeat',
                            backgroundSize: '10px 10px',
                            height: '200px',
                            padding: '5px',
                            width: '200px',
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: '#ccc',
                                height: '100%',
                                width: '100%',
                            }}
                        />
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;
