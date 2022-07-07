import * as React from 'react'
import Head from 'next/head'

import { Pattern } from '../../constants/Pattern'
import { PatternLayout } from '../../layouts/PatternLayout'
import Block from '../../placeholders/Block'
import BrowserFrame from '../../placeholders/BrowserFrame'
import { removeIndent } from '../../utils/removeIndent'

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.Drawer}>
            <Head>
                <meta name="description" content="Create a drawer navigation with CSS" />
                <meta name="og:description" content="Create a drawer navigation with CSS" />
                <meta name="twitter:description" content="Create a drawer navigation with CSS" />
                <meta name="keywords" content="css drawer, css off-canvas" />
            </Head>
            <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>This pattern is also known as off-canvas.</div>
            <BrowserFrame
                html={`
<div class="container">
    <!-- Backdrop -->
    <div class="container__overlay"></div>

    <!-- Sidebar -->
    <div class="container__sidebar">
        ...
    </div>
</div>
`}
                css={removeIndent`
                    .container {
                        /* Container takes full size */
                        height: 100%;
                        left: 0;
                        position: fixed;
                        top: 0;
                        width: 100%;

                        z-index: 9999;
                    }

                    .container__overlay {
                        /* Take full size */
                        height: 100%;
                        left: 0;
                        position: fixed;
                        top: 0;
                        width: 100%;

                        /* User still can see the content of main page */
                        background-color: rgba(0, 0, 0, 0.5);

                        z-index: -1;
                    }

                    .container__sidebar {
                        /* Take full height */
                        height: 100%;
                        left: 0;
                        position: fixed;
                        top: 0;
                        width: 200px;

                        /* Background */
                        background-color: #fff;
                    }
                `}
            >
                <div
                    style={{
                        height: '100%',
                        position: 'relative',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            height: '100%',
                            left: 0,
                            position: 'absolute',
                            top: 0,
                            width: '100%',
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: '#fff',
                            height: '100%',
                            left: 0,
                            padding: '16px',
                            position: 'absolute',
                            top: 0,
                            width: '250px',
                        }}
                    >
                        <Block numberOfBlocks={20} />
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    )
}

export default Details
