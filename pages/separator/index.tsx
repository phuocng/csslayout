import * as React from 'react';
import Head from 'next/head';

import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.Separator}>
            <Head>
                <meta name="description" content="Create a separator with CSS flexbox" />
                <meta name="og:description" content="Create a separator with CSS flexbox" />
                <meta name="twitter:description" content="Create a separator with CSS flexbox" />
                <meta name="keywords" content="css divider, css flexbox, css separator" />
            </Head>
            <BrowserFrame
                html={`
<div class="container">
    <!-- Text -->
    <div class="container__content">
        ...
    </div>

    <!-- Separator line -->
    <div class="container__separator"></div>
</div>
`}
                css={`
                    .container {
                        /* Content is centered horizontally */
                        align-items: center;
                        display: flex;

                        /* Used to set the position of text */
                        position: relative;
                    }

                    .container__content {
                        /* We won't see the separator line */
                        background: #fff;

                        /* Displayed at the center of container */
                        left: 50%;
                        position: absolute;
                        top: 50%;
                        transform: translate(-50%, -50%);
                    }

                    .container__separator {
                        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
                        height: 1px;
                        width: 100%;
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
                            display: 'flex',
                            position: 'relative',
                            width: '60%',
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: '#FFF',
                                left: '50%',
                                padding: '0 8px',
                                position: 'absolute',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            <div style={{ width: '128px' }}>
                                <Rectangle height={16} />
                            </div>
                        </div>
                        <div
                            style={{
                                borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                height: '1px',
                                width: '100%',
                            }}
                        />
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;
