import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { PrefixContext } from '../../context/prefixContext';
import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'container';
    return (
        <PatternLayout pattern={Pattern.PresenceIndicator}>
            <Head>
                <meta name="description" content="Create a presence indicator with CSS" />
                <meta name="og:description" content="Create a presence indicator with CSS" />
                <meta name="twitter:description" content="Create a presence indicator with CSS" />
                <meta name="keywords" content="css indicator" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <!-- Other element such as avatar -->
    ...

    <!-- The presence indicator -->
    <div class="${prefix}${container}__indicator"></div>
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    position: relative;
}

.${prefix}${container}__indicator {
    /* Shown at the bottom right corner */
    bottom: 0,
    position: absolute;
    right: 0;
    transform: translate(50%, 50%);

    /* Rounded border */
    border-radius: 9999px;
    height: 16px;
    width: 16px;

    /* Background color */
    background-color: #FF4136;
}
`
                }
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
                    <div
                        style={{
                            height: '64px',
                            marginRight: '16px',
                            position: 'relative',
                            width: '64px',
                        }}
                    >
                        <Circle size={64} />
                        <div
                            style={{
                                backgroundColor: '#FF4136',
                                borderRadius: '9999px',
                                bottom: 0,
                                height: '16px',
                                position: 'absolute',
                                right: 0,
                                transform: 'translate(50%, 50%)',
                                width: '16px',
                            }}
                        />
                    </div>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />

            <RelatedPatterns
                patterns={[Pattern.Avatar, Pattern.AvatarList, Pattern.DockedAtCorner, Pattern.InitialAvatar]}
            />
        </PatternLayout>
    );
};

export default Details;
