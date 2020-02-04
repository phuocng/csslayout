/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Triangle from '../../placeholders/Triangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Fixed at corner">
            <Helmet>
                <meta name="description" content="Fix an element at corner with CSS" />
                <meta name="keywords" content="css fixed" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
                    content={(
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
                    )}
                    source={`
<div style="
    position: relative;
">
    <!-- Top-left corner -->
    <div style="
        left: 0;
        position: absolute;
        top: 0;
    ">
        ...
    </div>

    <!-- Top-right corner -->
    <div style="
        position: absolute;
        top: 0;
        right: 0;
    ">
        ...
    </div>

    <!-- Bottom-right corner -->
    <div style="
        bottom: 0;
        position: absolute;
        right: 0;
    ">
        ...
    </div>

    <!-- Bottom-left corner -->
    <div style="
        bottom: 0;
        left: 0;
        position: absolute;
    ">
        ...
    </div>
</div>
`}
                />
            </div>
            <RelatedPatterns patterns={[Pattern.CookieBanner, Pattern.CornerRibbon, Pattern.FixedAtSide]} />
        </DetailsLayout>
    );
};

export default Details;
