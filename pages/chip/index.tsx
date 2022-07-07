import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Spacer } from '@1milligram/design'

import { RelatedPatterns } from '../../components/RelatedPatterns'
import { Pattern } from '../../constants/Pattern'
import { PatternLayout } from '../../layouts/PatternLayout'
import BrowserFrame from '../../placeholders/BrowserFrame'
import { removeIndent } from '../../utils/removeIndent'

const InputChip: React.FC<{}> = ({ children }) => {
    return (
        <div
            style={{
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                borderRadius: '9999px',
                display: 'inline-flex',
                justifyContent: 'center',
                padding: '4px 8px',
            }}
        >
            <div style={{ flex: 1, marginRight: '4px' }}>{children}</div>
            <button
                style={{
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    cursor: 'pointer',
                    height: '16px',
                    position: 'relative',
                    width: '16px',
                }}
            >
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        height: '1px',
                        left: 0,
                        position: 'absolute',
                        top: '50%',
                        transform: 'translate(0%, -50%) rotate(45deg)',
                        width: '100%',
                    }}
                />
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        height: '100%',
                        left: '50%',
                        position: 'absolute',
                        top: 0,
                        transform: 'translate(-50%, 0%) rotate(45deg)',
                        width: '1px',
                    }}
                />
            </button>
        </div>
    )
}

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.Chip}>
            <Head>
                <meta name="description" content="Create a chip component with CSS flexbox" />
                <meta name="og:description" content="Create a chip component with CSS flexbox" />
                <meta name="twitter:description" content="Create a chip component with CSS flexbox" />
                <meta name="keywords" content="css chip, css flexbox, css tag" />
            </Head>
            <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                You can use a{' '}
                <Link href="/close-button">
                    <a>close button</a>
                </Link>{' '}
                to remove a chip.
            </div>
            <BrowserFrame
                html={`
<div class="chip">
    <!-- Content -->
    <div class="chip__content">
        ...
    </div>

    <!-- The close button -->
    <!-- See https://csslayout.io/patterns/close-button -->
    ...
</div>
`}
                css={removeIndent`
                    .chip {
                        /* Center the content */
                        align-items: center;
                        display: inline-flex;
                        justify-content: center;

                        /* Background color */
                        background-color: rgba(0, 0, 0, 0.1);

                        /* Rounded border */
                        border-radius: 9999px;

                        /* Spacing */
                        padding: 4px 8px;
                    }

                    .chip__content {
                        margin-right: 4px;
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
                    <InputChip>CSS</InputChip>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.CloseButton]} />
        </PatternLayout>
    )
}

export default Details
