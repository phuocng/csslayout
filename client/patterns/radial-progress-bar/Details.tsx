/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Pattern from '../../constants/Pattern';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

interface RadialProgressProps {
    percentages: number;
}

const RadialProgress: React.FC<RadialProgressProps> = ({ percentages }) => {
    return (
        <div style={{ position: 'relative' }}>
            <div
                style={{
                    alignItems: 'center',
                    border: '12px solid rgba(0, 0, 0, 0.3)',
                    borderRadius: '9999px',
                    color: 'rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    fontSize: '24px',
                    height: '128px',
                    justifyContent: 'center',
                    width: '128px',
                }}
            >
                {percentages}%
            </div>
            <div
                style={{
                    clip: percentages >= 50
                            ? 'rect(auto, auto, auto, auto)'
                            : 'rect(0px, 128px, 128px, 64px)',
                    height: '100%',
                    left: 0,
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                }}
            >
                <div
                    style={{
                        border: '12px solid #00449E',
                        borderRadius: '9999px',
                        clip: 'rect(0px, 64px, 128px, 0px)',
                        height: '100%',
                        position: 'absolute',
                        transform: `rotate(${percentages * 360 / 100}deg)`,
                        width: '100%',
                    }}
                />
                <div
                    style={{
                        border: '12px solid #00449E',
                        borderRadius: '9999px',
                        clip: 'rect(0px, 64px, 128px, 0px)',
                        height: '100%',
                        position: 'absolute',
                        transform: `rotate(${percentages >= 50 ? 180 : 0}deg)`,
                        width: '100%',
                    }}
                />
            </div>
        </div>
    );
};

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.RadialProgressBar}>
            <Helmet>
                <meta name="description" content="Create a radial progress bar with CSS flexbox" />
                <meta name="keywords" content="css clip rect, css flexbox, css progress bar" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="container">
    <!-- Show number of percentages -->
    <div class="container__percentages">
        ...
    </div>

    <!-- The curve -->
    <div class="container__curve">
        <!-- The first half -->
        <div class="container__half container__half--first"></div>

        <!-- The second half -->
        <div class="container__half container__half--second"></div>
    </div>
</div>
`}
css={`
.container {
    position: relative;
}

.container__percentages {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Rounded border */
    border: 12px solid rgba(0, 0, 0, 0.3);
    border-radius: 9999px;

    /* Size */
    height: 128px;
    width: 128px;
}

.container__curve {
    /* Position */
    left: 0;
    position: absolute;
    top: 0;

    /* Take full size */
    height: 100%;
    width: 100%;

    /* If percentages is less than 50 */
    clip: rect(0px, 128px, 128px, 64px);

    /* If percentages is greater than or equals to 50 */
    clip: rect(auto, auto, auto, auto);
}

.container__half {
    /* Take full size */
    height: 100%;
    position: absolute;
    width: 100%;

    /*
    Background color of curve.
    The border width should be the same as the area showing the percentages
    */
    border: 12px solid rgb(0, 68, 158);
    border-radius: 9999px;
}

.container__half--first {    
    /* Position */
    clip: rect(0px, 64px, 128px, 0px);
    transform: rotate(162deg); /* Number of percentages * 360 / 100 */
}

.container__half--second {
    /* Position */
    clip: rect(0px, 64px, 128px, 0px);

    /* If percentages is less than 50 */
    transform: rotate(0deg);

    /* If percentages is greater than or equals to 50 */
    transform: rotate(180deg);
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
                        <div style={{ marginRight: '16px' }}><RadialProgress percentages={45} /></div>
                        <RadialProgress percentages={80} />
                    </div>
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;
