import React, { useState } from 'react';

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
    const [activeItem, setActiveItem] = useState(-1);

    const Item: React.FC<ItemProps> = ({ index, title, children }) => {
        const isOpened = (index === activeItem);
        const click = () => setActiveItem(isOpened ? -1 : index);
        return (
            <div>
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
                {isOpened && children}
            </div>
        );
    };

    return (
        <DetailsLayout title="Questions and answers">
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
                            <div style={{ width: '60%' }}>
                                <div
                                    style={{
                                        borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                                    }}
                                >
                                    <Item
                                        index={0}
                                        title={<div style={{ width: '40%' }}><Rectangle /></div>}
                                    >
                                        <div style={{ marginBottom: '16px' }}><Block numberOfBlocks={10} /></div>
                                    </Item>
                                </div>
                                <div
                                    style={{
                                        borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                    }}
                                >
                                    <Item
                                        index={1}
                                        title={<div style={{ width: '80%' }}><Rectangle /></div>}
                                    >
                                        <div style={{ marginBottom: '16px' }}><Block numberOfBlocks={15} /></div>
                                    </Item>
                                </div>
                                <div style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.3)' }}>
                                    <Item
                                        index={2}
                                        title={<div style={{ width: '60%' }}><Rectangle /></div>}
                                    >
                                        <div style={{ marginBottom: '16px' }}><Block numberOfBlocks={10} /></div>
                                    </Item>
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<!-- Each question and answer item -->
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
        </DetailsLayout>
    );
};

export default Details;
