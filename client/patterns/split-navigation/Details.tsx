/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.SplitNavigation}>
            <Helmet>
                <meta name="description" content="Create a split navigation with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css menu, css navigation, css split navigation" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<ul class="container">
    <!-- Navigation item -->
    <li>
        <a href="">...</a>
    </li>

    <!-- Navigation item that sticks to the right -->
    <li class="item-right">
        <a href="">...</a>
    </li>
</ul>
`}
css={`
.container {
    /* Content is centered horizontally */
    align-items: center;
    display: flex;

    /* Reset styles */
    list-style-type: none;
    margin: 0;
}

.item-right {
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
                            <li style={{ marginRight: '4px', width: '20%' }}><Rectangle /></li>
                            <li style={{ marginRight: '4px', width: '10%' }}><Rectangle /></li>
                            <li style={{ marginRight: '4px', width: '20%' }}><Rectangle /></li>
                            <li style={{ marginLeft: 'auto', width: '10%' }}><Rectangle /></li>
                        </ul>
                    </div>
                </BrowserFrame>
            </div>
            <RelatedPatterns patterns={[Pattern.DotLeader, Pattern.Menu, Pattern.PropertyList]} />
        </DetailsLayout>
    );
};

export default Details;
