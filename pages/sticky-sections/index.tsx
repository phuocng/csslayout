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
        <PatternLayout pattern={Pattern.StickySections}>
            <Head>
                <meta name="description" content="Create sticky sections with CSS" />
                <meta name="og:description" content="Create sticky sections with CSS" />
                <meta name="twitter:description" content="Create sticky sections with CSS" />
                <meta name="keywords" content="css layout, css sticky, css sticky sections" />
            </Head>
            <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                Try to scroll the main content to see each section sticks to the top of page.
            </div>
            <BrowserFrame
                html={`
<div class="container">
    <section class="container__section">
        ...
    </section>

    <!-- Repeat other sections -->
    ...
</div>
`}
                css={removeIndent`
                    .container {
                        height: 100%;
                        overflow: scroll;
                    }

                    .container__section {
                        /* Take full size */
                        height: 100%;
                        width: 100%;

                        /* Stick to the top */
                        position: sticky;
                        top: 0;
                    }
                `}
            >
                <div
                    style={{
                        height: '100%',
                        overflow: 'scroll',
                    }}
                >
                    <section
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                            height: '100%',
                            position: 'sticky',
                            top: 0,
                            width: '100%',
                        }}
                    />
                    <section
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            height: '100%',
                            position: 'sticky',
                            top: 0,
                            width: '100%',
                        }}
                    />
                    <section
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            height: '100%',
                            position: 'sticky',
                            top: 0,
                            width: '100%',
                        }}
                    />
                </div>
            </BrowserFrame>
            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.StickyHeader, Pattern.StickyTableColumn, Pattern.StickyTableHeaders]} />
        </PatternLayout>
    )
}

export default Details
