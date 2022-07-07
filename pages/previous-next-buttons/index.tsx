import * as React from 'react'
import Head from 'next/head'
import { Pattern } from '../../constants/Pattern'

import { PatternLayout } from '../../layouts/PatternLayout'
import BrowserFrame from '../../placeholders/BrowserFrame'
import Rectangle from '../../placeholders/Rectangle'
import { removeIndent } from '../../utils/removeIndent'

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.PreviousNextButtons}>
            <Head>
                <meta name="description" content="Create previous and next buttons with CSS flexbox" />
                <meta name="og:description" content="Create previous and next buttons with CSS flexbox" />
                <meta name="twitter:description" content="Create previous and next buttons with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css pagination" />
            </Head>
            <BrowserFrame
                html={`
<div class="container">
    <!-- Previous link sticks to the left -->
    <a>..</a>

    <!-- Next link sticks to the right -->
    <a>..</a>
</div>
`}
                css={removeIndent`
                    .container {
                        align-items: center;
                        display: flex;
                        justify-content: space-between;
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
                    <div style={{ width: '50%' }}>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                height: '32px',
                                justifyContent: 'space-between',
                                padding: '8px',
                                width: '100%',
                            }}
                        >
                            <a
                                style={{
                                    alignItems: 'center',
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    padding: '8px',
                                    width: '30%',
                                }}
                            >
                                <div style={{ marginRight: '8px' }}>&lt;</div>
                                <Rectangle />
                            </a>
                            <a
                                style={{
                                    alignItems: 'center',
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    padding: '8px',
                                    width: '30%',
                                }}
                            >
                                <Rectangle />
                                <div style={{ marginLeft: '8px' }}>&gt;</div>
                            </a>
                        </div>
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    )
}

export default Details
