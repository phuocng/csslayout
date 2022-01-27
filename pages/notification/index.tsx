import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { PrefixContext } from '../../context/prefixContext';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'notification';
    return (
        <PatternLayout pattern={Pattern.Notification}>
            <Head>
                <meta name="description" content="Create a notification with CSS flexbox" />
                <meta name="og:description" content="Create a notification with CSS flexbox" />
                <meta name="twitter:description" content="Create a notification with CSS flexbox" />
                <meta name="keywords" content="css alert, css flexbox, css notification" />
            </Head>
            <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                You can use the{' '}
                <Link href="/close-button">
                    <a>close button</a>
                </Link>{' '}
                to represent the button for closing the notification.
            </div>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <!-- Content -->
    ...

    <!-- Close button sticks to the right -->
    ...
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    display: flex;
    justify-content: space-between;
}
`
                }
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
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '4px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '60%',
                        }}
                    >
                        <div style={{ padding: '16px', width: '80%' }}>
                            <Block numberOfBlocks={5} />
                        </div>
                        <button
                            style={{
                                alignItems: 'center',
                                borderColor: 'transparent',
                                color: 'rgba(0, 0, 0, .3)',
                                display: 'flex',
                                fontSize: '36px',
                                height: '32px',
                                justifyContent: 'center',
                                marginRight: '1px',
                                width: '32px',
                            }}
                        >
                            <Circle />
                        </button>
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;
