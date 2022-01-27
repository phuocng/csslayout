import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { PrefixContext } from '../../context/prefixContext';
import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Triangle from '../../placeholders/Triangle';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'container';
    return (
        <PatternLayout pattern={Pattern.FixedAtCorner}>
            <Head>
                <meta name="description" content="Fix an element at corner with CSS" />
                <meta name="og:description" content="Fix an element at corner with CSS" />
                <meta name="twitter:description" content="Fix an element at corner with CSS" />
                <meta name="keywords" content="css fixed" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <!-- Top-left corner -->
    <div class="${prefix}${container}__corner ${prefix}${container}__corner--tl">
        ...
    </div>

    <!-- Top-right corner -->
    <div class="${prefix}${container}__corner ${prefix}${container}__corner--tr">
        ...
    </div>

    <!-- Bottom-right corner -->
    <div class="${prefix}${container}__corner ${prefix}${container}__corner--br">
        ...
    </div>

    <!-- Bottom-left corner -->
    <div class="${prefix}${container}__corner ${prefix}${container}__corner--bl">    
        ...
    </div>
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    position: relative;
}

.${prefix}${container}__corner {
    position: absolute;
}

.${prefix}${container}__corner--tl {
    left: 0;
    top: 0;
}

.${prefix}${container}__corner--tr {
    top: 0;
    right: 0;
}

.${prefix}${container}__corner--br {
    bottom: 0;
    right: 0;
}

.${prefix}${container}__corner--bl {
    bottom: 0;
    left: 0;
}
`
                }
            >
                <div style={{ height: '100%', position: 'relative' }}>
                    <div style={{ left: 0, position: 'absolute', top: 0 }}>
                        <Triangle size={64} corner="tl" />
                    </div>
                    <div style={{ position: 'absolute', right: 0, top: 0 }}>
                        <Triangle size={64} corner="tr" />
                    </div>
                    <div style={{ bottom: 0, position: 'absolute', right: 0 }}>
                        <Triangle size={64} corner="br" />
                    </div>
                    <div style={{ bottom: 0, left: 0, position: 'absolute' }}>
                        <Triangle size={64} corner="bl" />
                    </div>
                </div>
            </BrowserFrame>
            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.CookieBanner, Pattern.CornerRibbon, Pattern.FixedAtSide]} />
        </PatternLayout>
    );
};

export default Details;
