import React, { useState } from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

interface DotProps {
    index: number;
}

const Details: React.FC<{}> = () => {
    const [activeItem, setActiveItem] = useState(0);

    const Dot: React.FC<DotProps> = ({ index }) => {
        const isActive = index === activeItem;
        const click = () => setActiveItem(index);
        return (
            <li
                className={`pointer mh1 br-pill ${isActive ? 'bg-black-30' : 'ba b--black-30'}`}
                style={{
                    height: '12px',
                    width: '12px',
                }}
                onClick={click}
            />
        );
    };

    return (
        <DetailsLayout title="Dot navigation">
            <div className="ph4 pv5">
                <BrowserFrame
                    content={
                        <div className="h-100 flex flex-column items-center justify-center">
                            <ul className="list ma0 pa0 flex items-center justify-center">
                                <Dot index={0} />
                                <Dot index={1} />
                                <Dot index={2} />
                                <Dot index={3} />
                            </ul>
                        </div>
                    }
                    source={`
<ul style="
    /* Content is centered */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Reset styles */
    list-style-type: none;
    margin: 0;
    padding: 0;
">
    <li style="
        /* Rounded border */
        border-radius: 9999px;
        height: 12px;
        width: 12px;

        /* Active dot */
        background-color: rgba(0, 0, 0, .3);

        /* Inactive dot */
        background-color: transparent;
        border: 1px solid rgba(0, 0, 0, .3);

        /* OPTIONAL: Spacing between dots */
        margin: 0 4px;
    " />
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
