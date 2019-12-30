/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';
import Triangle from '../../placeholders/Triangle';

interface ItemProps {
    index: number;
    title: React.ReactNode;
}

const Details: React.FC<{}> = () => {
    const [activeItem, setActiveItem] = useState(1);

    const Item: React.FC<ItemProps> = ({ index, title, children }) => {
        const isOpened = (index === activeItem);
        const click = () => setActiveItem(isOpened ? -1 : index);
        return (
            <>
                <div style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.3)' }}>
                    <div
                        style={{
                            alignItems: 'center',
                            cursor: 'pointer',
                            display: 'flex',
                            padding: '16px',
                        }}
                        onClick={click}
                    >
                        <div style={{ marginRight: '12px' }}>
                            <Triangle size={8} corner={isOpened ? 'b' : 'r'} />
                        </div>
                        <div style={{ flex: 1 }}>{title}</div>
                    </div>
                    <div
                        style={{
                            borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                            display: isOpened ? 'block' : 'none',
                            padding: '16px',
                        }}
                    >
                        {children}
                    </div>
                </div>
            </>
        );
    };

    return (
        <DetailsLayout title="Accordion">
            <Helmet>
                <meta name="description" content="Create an accordion with CSS flexbox" />
                <meta name="keywords" content="css accordion, css flexbox" />
            </Helmet>
            <div style={{ padding: '64px 32px' }}>
                <BrowserFrame
                    content={(
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
                                    borderBottomColor: 'transparent',
                                    borderRadius: '4px',
                                    width: '60%',
                                }}
                            >
                                <Item
                                    index={0}
                                    title={<div style={{ width: '40%' }}><Rectangle /></div>}
                                >
                                    <div style={{ marginBottom: '16px' }}><Block numberOfBlocks={10} /></div>
                                </Item>
                                <Item
                                    index={1}
                                    title={<div style={{ width: '80%' }}><Rectangle /></div>}
                                >
                                    <div style={{ marginBottom: '16px' }}><Block numberOfBlocks={15} /></div>
                                </Item>
                                <Item
                                    index={2}
                                    title={<div style={{ width: '60%' }}><Rectangle /></div>}
                                >
                                    <div style={{ marginBottom: '16px' }}><Block numberOfBlocks={10} /></div>
                                </Item>
                            </div>
                        </div>
                    )}
                    source={`
<!-- Container -->
<div style="
    /* Border */
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-bottom-color: transparent;
    border-radius: 4px;
">
    <!-- Each accordion item -->
    <div style="
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    ">
        <!-- Heading -->
        <div style="
            /* Center the content horizontally */
            align-items: center;
            display: flex;

            cursor: pointer;
            padding: 16px;
        ">
            <!-- The toggle icon -->
            <div style="margin-right: 12px;">...</div>

            <!-- The title -->
            <div style="
                flex: 1; /* Take remaining width */
            ">
                ...
            </div>
        </div>

        <!-- The content -->
        <div style="
            /* For selected item */
            display: block;

            /* For not selected item */
            display: none;

            border-top: 1px solid rgba(0, 0, 0, 0.3);
            padding: 16px;
        ">
            ...
        </div>
    </div>

    <!-- Repeat other item -->
    ...
</div>


<div style="
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
">
    <!-- Heading -->
    <div style="
        display: flex;
        align-items: center;
        justify-content: space-between;
    ">
        <!-- Question -->
        ...

        <!-- The toggle icon sticks to the right -->
        ...
    </div>

    <!-- Answer -->
</div>
`}
                />
            </div>

            <RelatedPatterns patterns={[Pattern.QuestionsAndAnswers]} />
        </DetailsLayout>
    );
};

export default Details;
