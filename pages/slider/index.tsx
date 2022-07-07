import * as React from 'react'
import Head from 'next/head'

import { Pattern } from '../../constants/Pattern'
import { PatternLayout } from '../../layouts/PatternLayout'
import BrowserFrame from '../../placeholders/BrowserFrame'
import Circle from '../../placeholders/Circle'
import Rectangle from '../../placeholders/Rectangle'
import { removeIndent } from '../../utils/removeIndent'

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.Slider}>
            <Head>
                <meta name="description" content="Create a slider with CSS flexbox" />
                <meta name="og:description" content="Create a slider with CSS flexbox" />
                <meta name="twitter:description" content="Create a slider with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css slider" />
            </Head>
            <BrowserFrame
                html={`
<div class="container">
    <!-- Left side -->
    <!-- Width based on the current value -->
    <div class="container__left" style="width: 20%"></div>

    <!-- Circle -->
    <div class="container__circle"></div>

    <!-- Right side -->
    <div class="container__right"></div>
</div>
`}
                css={removeIndent`
                    .container {
                        /* Content is centered horizontally */
                        align-items: center;
                        display: flex;

                        /* Size */
                        height: 32px;
                    }

                    .container__left {
                        height: 2px;

                        /* Colors */
                        background-color: rgba(0, 0, 0, 0.3);
                    }

                    .container__circle {
                        /* Size */
                        height: 32px;
                        width: 32px;

                        /* Rounded border */
                        border-radius: 9999px;

                        /* Colors */
                        background-color: rgba(0, 0, 0, 0.3);
                    }

                    .container__right {
                        /* Take the remaining width */
                        flex: 1;
                        height: 2px;

                        /* Colors */
                        background-color: rgba(0, 0, 0, 0.3);
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
                            display: 'flex',
                            height: '16px',
                            width: '256px',
                        }}
                    >
                        <div style={{ width: '20%' }}>
                            <Rectangle height={2} />
                        </div>
                        <Circle size={32} />
                        <div style={{ flex: 1 }}>
                            <Rectangle height={2} />
                        </div>
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    )
}

export default Details
