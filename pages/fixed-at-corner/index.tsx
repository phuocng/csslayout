import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Triangle from '../../placeholders/Triangle';
import { removeIndent } from '../../utils/removeIndent';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.FixedAtCorner}>
            <Head>
                <meta name="description" content="Fix an element at corner with CSS" />
                <meta name="og:description" content="Fix an element at corner with CSS" />
                <meta name="twitter:description" content="Fix an element at corner with CSS" />
                <meta name="keywords" content="css fixed" />
            </Head>
            <BrowserFrame
                html={`
<div class="container">
    <!-- Top-left corner -->
    <div class="container__corner container__corner--tl">
        ...
    </div>

    <!-- Top-right corner -->
    <div class="container__corner container__corner--tr">
        ...
    </div>

    <!-- Bottom-right corner -->
    <div class="container__corner container__corner--br">
        ...
    </div>

    <!-- Bottom-left corner -->
    <div class="container__corner container__corner--bl">    
        ...
    </div>
</div>
`}
                css={removeIndent`
                    .container {
                        position: relative;
                    }

                    .container__corner {
                        position: absolute;
                    }

                    .container__corner--tl {
                        left: 0;
                        top: 0;
                    }

                    .container__corner--tr {
                        top: 0;
                        right: 0;
                    }

                    .container__corner--br {
                        bottom: 0;
                        right: 0;
                    }

                    .container__corner--bl {
                        bottom: 0;
                        left: 0;
                    }
                `}
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
