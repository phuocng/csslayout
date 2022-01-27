import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { PrefixContext } from '../../context/prefixContext';
import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';
import Triangle from '../../placeholders/Triangle';

interface ItemProps {
    index: number;
    title: React.ReactNode;
}

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'container';
    const [activeItem, setActiveItem] = React.useState(-1);

    const Item: React.FC<ItemProps> = ({ index, title, children }) => {
        const isOpened = index === activeItem;
        const click = () => setActiveItem(isOpened ? -1 : index);
        return (
            <>
                <div
                    style={{
                        alignItems: 'center',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '16px 0',
                    }}
                    onClick={click}
                >
                    {title}
                    <Triangle size={8} corner={isOpened ? 't' : 'b'} />
                </div>
                <div
                    style={{
                        display: isOpened ? 'block' : 'none',
                        marginBottom: '16px',
                    }}
                >
                    {children}
                </div>
            </>
        );
    };

    return (
        <PatternLayout pattern={Pattern.QuestionsAndAnswers}>
            <Head>
                <meta name="description" content="Create a questions and answers section with CSS flexbox" />
                <meta name="og:description" content="Create a questions and answers section with CSS flexbox" />
                <meta name="twitter:description" content="Create a questions and answers section with CSS flexbox" />
                <meta name="keywords" content="css accordion, css faq, css flexbox" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<!-- Each question and answer item -->
<div class="${prefix}${container}">
    <!-- Heading -->
    <div class="${prefix}${container}__heading">
        <!-- Question -->
        ...

        <!-- The toggle icon sticks to the right -->
        ...
    </div>

    <!-- Answer -->
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.${prefix}${container}__heading {
    display: flex;
    align-items: center;
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
                    <div style={{ width: '60%' }}>
                        <div
                            style={{
                                margin: '0 auto',
                                paddingBottom: '24px',
                                width: '200px',
                            }}
                        >
                            <Rectangle />
                        </div>
                        <div
                            style={{
                                borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                            }}
                        >
                            <Item
                                index={0}
                                title={
                                    <div style={{ width: '40%' }}>
                                        <Rectangle />
                                    </div>
                                }
                            >
                                <Block numberOfBlocks={10} />
                            </Item>
                        </div>
                        <div
                            style={{
                                borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                            }}
                        >
                            <Item
                                index={1}
                                title={
                                    <div style={{ width: '80%' }}>
                                        <Rectangle />
                                    </div>
                                }
                            >
                                <Block numberOfBlocks={15} />
                            </Item>
                        </div>
                        <div style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.3)' }}>
                            <Item
                                index={2}
                                title={
                                    <div style={{ width: '60%' }}>
                                        <Rectangle />
                                    </div>
                                }
                            >
                                <Block numberOfBlocks={10} />
                            </Item>
                        </div>
                    </div>
                </div>
            </BrowserFrame>
            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.Accordion]} />
        </PatternLayout>
    );
};

export default Details;
