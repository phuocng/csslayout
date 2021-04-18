/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import './styles.css';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.LayeredCard}>
            <Helmet>
                <meta name="description" content="Create a layered card with CSS" />
                <meta name="og:description" content="Create a layered card with CSS" />
                <meta name="twitter:description" content="Create a layered card with CSS" />
                <meta name="keywords" content="css layered card" />
            </Helmet>
            <BrowserFrame
html={`
<div class="layered-card">
    ...
</div>
`}
css={`
.layered-card {
    position: relative;
}

.layered-card::before {
    background: rgba(0, 0, 0, 0.3);
    content: '';
    
    /* Position */
    top: 0;
    left: 0;
    position: absolute;
    transform: translate(1rem, 1rem);

    /* Size */
    height: 100%;
    width: 100%;

    /* Display under the main content */
    z-index: -1;
}
`}
                >
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        height: '100%',
                        justifyContent: 'center',
                        padding: '8px',
                    }}
                >
                    <div className="layered-card">
                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                background: '#FFF',
                                height: '12rem',
                                width: '12rem',
                            }}
                        />
                    </div>
                </div>
            </BrowserFrame>

            <RelatedPatterns patterns={[Pattern.Card, Pattern.StackedCards, Pattern.ThreeDimensionsCard]} />
        </DetailsLayout>
    );
};

export default Details;
