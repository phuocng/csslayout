import * as React from 'react'
import Head from 'next/head'
import { Spacer } from '@1milligram/design'

import { RelatedPatterns } from '../../components/RelatedPatterns'
import { Pattern } from '../../constants/Pattern'
import { PatternLayout } from '../../layouts/PatternLayout'
import BrowserFrame from '../../placeholders/BrowserFrame'
import { removeIndent } from '../../utils/removeIndent'

const Avatar: React.FC<{}> = ({ children }) => {
    return (
        <div
            style={{
                alignItems: 'center',
                backgroundColor: '#BBB',
                borderRadius: '9999px',
                boxShadow: '0 0 0 4px #FFF',
                color: '#FFF',
                display: 'flex',
                height: '48px',
                justifyContent: 'center',
                width: '48px',
            }}
        >
            {children}
        </div>
    )
}

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.AvatarList}>
            <Head>
                <meta name="description" content="Create an avatar list with CSS flexbox" />
                <meta name="og:description" content="Create an avatar list with CSS flexbox" />
                <meta name="twitter:description" content="Create an avatar list with CSS flexbox" />
                <meta name="keywords" content="css avatar, css flexbox" />
            </Head>
            <BrowserFrame
                html={`
<div class="avatars">
    <!-- Avatar item -->
    <div class="avatars__item">
        <div class="avatars__image">
            <!-- Image -->
            ...
        </div>
    </div>

    <!-- Repeat other avatars -->
    ...
</div>
`}
                css={removeIndent`
                    .avatars {
                        display: flex;
                    }

                    .avatars__item {
                        /* Nagative margin make avatar overlap to previous one */
                        margin-left: -4px;
                    }

                    .avatars__image {
                        /* Add a white curve between avatars */
                        box-shadow: 0 0 0 4px #fff;

                        /* Center the content */
                        align-items: center;
                        display: flex;
                        justify-content: center;

                        /* Rounded border */
                        border-radius: 9999px;
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
                    <div style={{ marginLeft: '-4px' }}>
                        <Avatar />
                    </div>
                    <div style={{ marginLeft: '-4px' }}>
                        <Avatar />
                    </div>
                    <div style={{ marginLeft: '-4px' }}>
                        <Avatar />
                    </div>
                    <div style={{ marginLeft: '-4px' }}>
                        <Avatar />
                    </div>
                    <div style={{ marginLeft: '-4px' }}>
                        <Avatar>+5</Avatar>
                    </div>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />

            <RelatedPatterns
                patterns={[Pattern.Avatar, Pattern.Centering, Pattern.InitialAvatar, Pattern.PresenceIndicator]}
            />
        </PatternLayout>
    )
}

export default Details
