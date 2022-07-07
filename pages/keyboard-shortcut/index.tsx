import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Heading, Spacer } from '@1milligram/design';

import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import { removeIndent } from '../../utils/removeIndent';

interface ItemProps {
    action: string;
    keys: string;
}

const Item: React.FC<ItemProps> = ({ action, keys }) => {
    return (
        <div
            style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                margin: 0,
                padding: '4px 0',
            }}
        >
            <div>{action}</div>
            <kbd
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    borderRadius: '4px',
                    boxShadow: 'rgba(0, 0, 0, 0.3) 0px -2px 0px inset, rgba(0, 0, 0, 0.4) 0px 1px 1px',
                    color: 'rgba(0, 0, 0, 0.7)',
                    padding: '8px',
                }}
            >
                {keys}
            </kbd>
        </div>
    );
};

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.KeyboardShortcut}>
            <Head>
                <meta name="description" content="Create a keyboard shortcut with CSS" />
                <meta name="og:description" content="Create a keyboard shortcut with CSS" />
                <meta name="twitter:description" content="Create a keyboard shortcut with CSS" />
                <meta name="keywords" content="kbd tag, keyboard shortcut" />
            </Head>
            <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                We use the native <code>kbd</code> tag to display the keyboard shortcut.
            </div>
            <BrowserFrame
                html={`
<kbd class="container">
    ...
</kbd>
`}
                css={removeIndent`
                    .container {
                        /* Background and color */
                        background-color: rgba(0, 0, 0, 0.1);
                        border-radius: 4px;
                        color: rgba(0, 0, 0, 0.7);

                        /* Bottom shadow */
                        box-shadow: rgba(0, 0, 0, 0.3) 0px -2px 0px inset, rgba(0, 0, 0, 0.4) 0px 1px 1px;

                        /* Spacing */
                        padding: 8px;
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
                    <kbd
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                            borderRadius: '4px',
                            boxShadow: 'rgba(0, 0, 0, 0.3) 0px -2px 0px inset, rgba(0, 0, 0, 0.4) 0px 1px 1px',
                            color: 'rgba(0, 0, 0, 0.7)',
                            padding: '8px',
                        }}
                    >
                        ⌘ + C
                    </kbd>
                </div>
            </BrowserFrame>
            <Spacer size="extraLarge" />

            <section>
                <Heading level={2}>Use cases</Heading>

                <div style={{ padding: '32px' }}>
                    <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                        We can use this pattern with the{' '}
                        <Link href="/property-list">
                            <a>property list</a>
                        </Link>{' '}
                        pattern to create shortkey preferences as following:
                    </div>
                    <div style={{ width: '250px' }}>
                        <Item action="Cut" keys="⌘ + X" />
                        <Item action="Copy" keys="⌘ + C" />
                        <Item action="Paste" keys="⌘ + V" />
                    </div>
                </div>
            </section>
        </PatternLayout>
    );
};

export default Details;
