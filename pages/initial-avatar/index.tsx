import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Spacer } from '@1milligram/design'

import { RelatedPatterns } from '../../components/RelatedPatterns'
import { Pattern } from '../../constants/Pattern'
import { PatternLayout } from '../../layouts/PatternLayout'
import BrowserFrame from '../../placeholders/BrowserFrame'
import { removeIndent } from '../../utils/removeIndent'

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.InitialAvatar}>
            <Head>
                <meta name="description" content="Create an initial avatar with CSS" />
                <meta name="og:description" content="Create an initial avatar with CSS" />
                <meta name="twitter:description" content="Create an initial avatar with CSS" />
                <meta name="keywords" content="css avatar" />
            </Head>
            <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                To center the content, you also can use other technique demonstrated in the{' '}
                <Link href="/centering">
                    <a>Centering</a>
                </Link>{' '}
                pattern.
            </div>
            <BrowserFrame
                html={`
<div class="avatar">
    <div class="avatar__letters">
        <!-- The letters -->
        ...
    </div>
</div>
`}
                css={removeIndent`
                    .avatar {
                        /* Center the content */
                        display: inline-block;
                        vertical-align: middle;

                        /* Used to position the content */
                        position: relative;

                        /* Colors */
                        background-color: rgba(0, 0, 0, 0.3);
                        color: #fff;

                        /* Rounded border */
                        border-radius: 50%;
                        height: 48px;
                        width: 48px;
                    }

                    .avatar__letters {
                        /* Center the content */
                        left: 50%;
                        position: absolute;
                        top: 50%;
                        transform: translate(-50%, -50%);
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
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            borderRadius: '50%',
                            color: '#FFF',
                            display: 'inline-block',
                            fontSize: '24px',
                            height: '48px',
                            position: 'relative',
                            verticalAlign: 'middle',
                            width: '48px',
                        }}
                    >
                        <div
                            style={{
                                left: '50%',
                                position: 'absolute',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            PN
                        </div>
                    </div>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />

            <RelatedPatterns
                patterns={[
                    Pattern.Avatar,
                    Pattern.AvatarList,
                    Pattern.Badge,
                    Pattern.Centering,
                    Pattern.PresenceIndicator,
                ]}
            />
        </PatternLayout>
    )
}

export default Details
