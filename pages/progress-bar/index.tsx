/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import Head from 'next/head';
import { Pattern } from '../../constants/Pattern';

import useInterval from '../../hooks/useInterval';
import { DetailsLayout } from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    const [progress, setProgress] = React.useState(0);
    useInterval(() => {
        setProgress((v) => v === 100 ? 0 : v + 1);
    }, 1 * 100);

    return (
        <DetailsLayout pattern={Pattern.ProgressBar}>
            <Head>
                <meta name="description" content="Create a progress bar with CSS flexbox" />
                <meta name="og:description" content="Create a progress bar with CSS flexbox" />
                <meta name="twitter:description" content="Create a progress bar with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css progress bar" />
            </Head>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="container">
    <div class="container__progress" style="
        /* Width based on the number of percentages */
        width: 40%;
    ">
        <!-- The number of percentages -->
        40%
    </div>
</div>
`}
css={`
.container {
    /* Colors */
    background-color: rgba(0, 0, 0, .1);

    /* Rounded border */
    border-radius: 9999px;
}

.container__progress {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Colors */
    background-color: #357edd;
    color: #fff;

    /* Rounded border */
    border-radius: 9999px;
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
                                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                borderRadius: '9999px',
                                height: '16px',
                                width: '50%',
                            }}
                        >
                            <div
                                style={{
                                    alignItems: 'center',
                                    backgroundColor: '#357EDD',
                                    borderRadius: '9999px',
                                    color: '#FFF',
                                    display: 'flex',
                                    fontSize: '12px',
                                    height: '100%',
                                    justifyContent: 'center',
                                    padding: '4px',
                                    width: `${progress}%`,
                                }}
                            >
                                {progress}%
                            </div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;
