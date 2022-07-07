import * as React from 'react'
import Head from 'next/head'

import { Pattern } from '../../constants/Pattern'
import { random } from '../../utils/random'
import { PatternLayout } from '../../layouts/PatternLayout'
import BrowserFrame from '../../placeholders/BrowserFrame'
import { removeIndent } from '../../utils/removeIndent'

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.Statistic}>
            <Head>
                <meta name="description" content="Create a statistic component with CSS flexbox" />
                <meta name="og:description" content="Create a statistic component with CSS flexbox" />
                <meta name="twitter:description" content="Create a statistic component with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css statistic" />
            </Head>
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
                css={removeIndent`
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
                        <div style={{ fontSize: '4rem', fontWeight: 500 }}>{random(1000, 9999).toLocaleString()}</div>
                        <div style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase' }}>stars</div>
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    )
}

export default Details
