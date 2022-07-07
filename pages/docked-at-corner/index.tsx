import * as React from 'react';
import Head from 'next/head';
import { Heading, Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';
import { removeIndent } from '../../utils/removeIndent';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.DockedAtCorner}>
            <Head>
                <meta name="description" content="Dock an element at corner with CSS" />
                <meta name="og:description" content="Dock an element at corner with CSS" />
                <meta name="twitter:description" content="Dock an element at corner with CSS" />
                <meta name="keywords" content="css docked, css flexbox" />
            </Head>
            <BrowserFrame
                html={`
<div class="container">
    <!-- Docked at the top right corner -->
    <div class="container__docker">
        ...
    </div>

    ...
</div>
`}
                css={removeIndent`
                    .container {
                        position: relative;
                    }

                    .container__docker {
                        position: absolute;
                        right: 0;
                        top: 0;
                        transform: translate(50%, -50%);

                        /* Center the content */
                        align-items: center;
                        display: flex;
                        justify-content: center;
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
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '8px',
                            padding: '16px',
                            position: 'relative',
                            width: '128px',
                        }}
                    >
                        <Rectangle />
                        <div
                            style={{
                                backgroundColor: '#00449E',
                                borderRadius: '9999px',
                                height: '32px',
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                transform: 'translate(50%, -50%)',
                                width: '32px',
                            }}
                        />
                    </div>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />

            <section>
                <Heading level={2}>Use cases</Heading>

                <div style={{ padding: '32px' }}>
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '4px',
                            marginBottom: '32px',
                            padding: '8px',
                            position: 'relative',
                            width: '128px',
                        }}
                    >
                        Inbox
                        <div
                            style={{
                                alignItems: 'center',
                                backgroundColor: '#357EDD',
                                borderRadius: '9999px',
                                color: '#FFF',
                                display: 'flex',
                                height: '24px',
                                justifyContent: 'center',
                                padding: '4px',
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                transform: 'translate(50%, -50%)',
                                width: '24px',
                            }}
                        >
                            5
                        </div>
                    </div>
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '4px',
                            height: '128px',
                            padding: '16px',
                            position: 'relative',
                            width: '40%',
                        }}
                    >
                        Modal
                        <div
                            style={{
                                alignItems: 'center',
                                backgroundColor: '#FF4136',
                                borderRadius: '9999px',
                                color: '#FFF',
                                display: 'flex',
                                height: '24px',
                                justifyContent: 'center',
                                padding: '4px',
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                transform: 'translate(50%, -50%)',
                                width: '24px',
                            }}
                        >
                            &times;
                        </div>
                    </div>
                </div>
            </section>
            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.PresenceIndicator]} />
        </PatternLayout>
    );
};

export default Details;
