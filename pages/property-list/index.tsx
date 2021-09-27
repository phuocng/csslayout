import * as React from 'react';
import Head from 'next/head';
import { Heading, Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    const Item: React.FC<{}> = ({ children }) => {
        return (
            <dl
                style={{
                    alignItems: 'center',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: 0,
                    padding: '8px 0',
                }}
            >
                {children}
            </dl>
        );
    };

    return (
        <PatternLayout pattern={Pattern.PropertyList}>
            <Head>
                <meta name="description" content="Create a property list with CSS flexbox" />
                <meta name="og:description" content="Create a property list with CSS flexbox" />
                <meta name="twitter:description" content="Create a property list with CSS flexbox" />
                <meta name="keywords" content="css flexbox, property list" />
            </Head>
            <BrowserFrame
                html={`
<!-- A property item -->
<dl class="container">
    <!-- Property name -->
    <dt>...</dt>

    <!-- Property value -->
    <dd>...</dd>
</dl>
`}
                css={`
                    .container {
                        /* Content is center horizontally */
                        align-items: center;
                        display: flex;

                        /*
    The property name will stick to the left, and the value
    will stick to the right
    */
                        justify-content: space-between;

                        border-bottom: 1px solid rgba(0, 0, 0, 0.3);

                        /* Spacing */
                        margin: 0px;
                        padding: 8px 0px;
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
                    <div style={{ width: '40%' }}>
                        <Item>
                            <dt style={{ width: '80%' }}>
                                <Rectangle />
                            </dt>
                            <dd>
                                <Circle />
                            </dd>
                        </Item>
                        <Item>
                            <dt style={{ width: '60%' }}>
                                <Rectangle />
                            </dt>
                            <dd>
                                <Circle />
                            </dd>
                        </Item>
                        <Item>
                            <dt style={{ width: '30%' }}>
                                <Rectangle />
                            </dt>
                            <dd>
                                <Circle />
                            </dd>
                        </Item>
                        <Item>
                            <dt style={{ width: '50%' }}>
                                <Rectangle />
                            </dt>
                            <dd>
                                <Circle />
                            </dd>
                        </Item>
                    </div>
                </div>
            </BrowserFrame>
            <Spacer size="extraLarge" />

            <section>
                <Heading level={2}>Use cases</Heading>

                <div style={{ padding: '32px', width: '500px' }}>
                    <Item>
                        <dt>Name</dt>
                        <dd>WebAssembly in Action</dd>
                    </Item>
                    <Item>
                        <dt>Author</dt>
                        <dd>Gerard Gallant</dd>
                    </Item>
                    <Item>
                        <dt>Publishing date</dt>
                        <dd>November 2019</dd>
                    </Item>
                    <Item>
                        <dt>ISBN</dt>
                        <dd>9781617295744</dd>
                    </Item>
                </div>
            </section>
            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.DotLeader, Pattern.Menu, Pattern.SplitNavigation]} />
        </PatternLayout>
    );
};

export default Details;
