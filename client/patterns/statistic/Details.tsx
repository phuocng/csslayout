/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Pattern from '../../constants/Pattern';

import random from '../../helpers/random';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.Statistic}>
            <Helmet>
                <meta name="description" content="Create a statistic component with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css statistic" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="container">
    <!-- Value -->
    <div class="container__value">
        ...
    </div>

    <!-- Label -->
    <div class="container__label">
        ...
    </div>
</div>
`}
css={`
.container {
    /* Center the content */
    align-items: center;
    display: inline-flex;
    flex-direction: column;
}

.container__value {
    /* Big font size */
    font-size: 4rem;
    font-weight: 500;
}

.container__label {
    /* Smaller font size */
    font-size: 1rem;
    font-weight: 700;

    /* Uppercase the label */
    text-transform: uppercase;
}
`}
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
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'inline-flex',
                                flexDirection: 'column',
                            }}
                        >
                            <div style={{ fontSize: '4rem', fontWeight: 500 }}>
                                {random(1000, 9999).toLocaleString()}
                            </div>
                            <div style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase' }}>
                                stars
                            </div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;
