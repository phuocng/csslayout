import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';
import { removeIndent } from '../../utils/removeIndent';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.SplitNavigation}>
            <Head>
                <meta name="description" content="Create a split navigation with CSS flexbox" />
                <meta name="og:description" content="Create a split navigation with CSS flexbox" />
                <meta name="twitter:description" content="Create a split navigation with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css menu, css navigation, css split navigation" />
            </Head>
            <BrowserFrame
                html={`
<ul class="container">
    <!-- Navigation item -->
    <li>
        <a href="">...</a>
    </li>

    <!-- Navigation item that sticks to the right -->
    <li class="container__item--right">
        <a href="">...</a>
    </li>
</ul>
`}
                css={removeIndent`
                    .container {
                        /* Content is centered horizontally */
                        align-items: center;
                        display: flex;

                        /* Reset styles */
                        list-style-type: none;
                        margin: 0;
                    }

                    .container__item--right {
                        /* Sticks to the right */
                        margin-left: auto;
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
                    <ul
                        style={{
                            alignItems: 'center',
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '8px',
                            display: 'flex',
                            listStyleType: 'none',
                            margin: 0,
                            padding: '16px',
                            width: '60%',
                        }}
                    >
                        <li style={{ marginRight: '4px', width: '20%' }}>
                            <Rectangle />
                        </li>
                        <li style={{ marginRight: '4px', width: '10%' }}>
                            <Rectangle />
                        </li>
                        <li style={{ marginRight: '4px', width: '20%' }}>
                            <Rectangle />
                        </li>
                        <li style={{ marginLeft: 'auto', width: '10%' }}>
                            <Rectangle />
                        </li>
                    </ul>
                </div>
            </BrowserFrame>
            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.DotLeader, Pattern.Menu, Pattern.PropertyList]} />
        </PatternLayout>
    );
};

export default Details;
