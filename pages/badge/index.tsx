import * as React from 'react'
import Head from 'next/head'
import { Spacer } from '@1milligram/design'

import { RelatedPatterns } from '../../components/RelatedPatterns'
import { Pattern } from '../../constants/Pattern'
import { PatternLayout } from '../../layouts/PatternLayout'
import BrowserFrame from '../../placeholders/BrowserFrame'
import { removeIndent } from '../../utils/removeIndent'

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.Badge}>
            <Head>
                <meta name="description" content="Create a badge component with CSS flexbox" />
                <meta name="og:description" content="Create a badge component with CSS flexbox" />
                <meta name="twitter:description" content="Create a badge component with CSS flexbox" />
                <meta name="keywords" content="css badge, css flexbox" />
            </Head>
            <BrowserFrame
                html={`
<div class="badge">
    ...
</div>
`}
                css={removeIndent`
                    .badge {
                        /* Center the content */
                        align-items: center;
                        display: flex;
                        justify-content: center;

                        /* Colors */
                        background-color: rgba(0, 0, 0, 0.3);
                        color: #fff;

                        /* Rounded border */
                        border-radius: 9999px;
                        height: 32px;
                        width: 32px;
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
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            borderRadius: '9999px',
                            color: '#FFF',
                            display: 'flex',
                            flexDirection: 'column',
                            fontSize: '20px',
                            height: '32px',
                            justifyContent: 'center',
                            width: '32px',
                        }}
                    >
                        1
                    </div>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.Centering, Pattern.InitialAvatar]} />
        </PatternLayout>
    )
}

export default Details
