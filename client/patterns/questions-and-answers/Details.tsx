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
                    className="flex items-center justify-between pointer mv3"
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
            <div className="ph4 pv5">
                <BrowserFrame
                    content={(
                        <div className="h-100 flex flex-column items-center justify-center">
                            <div className="w-60">
                                <div className="mb3 bt bb b--black-30">
                                    <Item
                                        index={0}
                                        title={<div className="w-40"><Rectangle /></div>}
                                    >
                                        <div className="mb3"><Block numberOfBlocks={10} /></div>
                                    </Item>
                                </div>
                                <div className="mb3 bb b--black-30">
                                    <Item
                                        index={1}
                                        title={<div className="w-80"><Rectangle /></div>}
                                    >
                                        <div className="mb3"><Block numberOfBlocks={15} /></div>
                                    </Item>
                                </div>
                                <div className="bb b--black-30">
                                    <Item
                                        index={2}
                                        title={<div className="w-60"><Rectangle /></div>}
                                    >
                                        <div className="mb3"><Block numberOfBlocks={10} /></div>
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
