/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';

import './nested-dropdowns.css';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.NestedDropdowns}>
            <Helmet>
                <meta name="description" content="Create nested dropdown menu with CSS" />
                <meta name="keywords" content="css dropdown menu, css multi-level dropdown menu, css nested dropdown menu" />
            </Helmet>
            <div className='p-8 pb-20'>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    Hover on the Patterns &rarr; Navigation to see the sub dropdowns.
                </div>
                <BrowserFrame
html={`
<ul class="dropdown">
    <li>Home</li>
    <li>
        <div>Patterns</div>
        <!-- First level sub dropdown -->
        <ul>
            <li>Layout</li>
            <li>Input</li>
            <li>
                <div>Navigation</div>
                <!-- Second level sub dropdown -->
                <ul>
                    <li>Breadcrumb</li>
                    <li>Dropdown</li>
                    <li>Menu</li>
                    <li>Nested dropdown</li>
                </ul>
            </li>
            <li>Display</li>
            <li>Feedback</li>
        </ul>
    </li>
    <li>Products</li>
    <li>About</li>
</ul>
`}
css={`
.dropdown {
    /* Border */
    border: 1px solid rgba(0, 0, 0, 0.3);
    display: flex;

    /* Reset list styles */
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.dropdown li {
    /* Spacing */
    padding: 8px;

    /* Used to position the sub dropdown */
    position: relative;
}

/* The sub dropdown */
.dropdown ul {
    /* Border */
    border: 1px solid rgba(0, 0, 0, 0.3);

    /* Hidden by default */
    display: none;

    /* Absolute position */
    left: 0;
    position: absolute;
    top: 100%;

    /* Reset styles */
    list-style-type: none;
    margin: 0;
    padding: 0;

    /* Width */
    width: 200px;
}

/* The second level sub dropdown */
.dropdown ul ul {
    left: 100%;
    position: absolute;
    top: 0;
}

/* Change background color of list item when being hovered */
.dropdown li:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

/* Show the direct sub dropdown when hovering the list item */
.dropdown li:hover > ul {
    display: block;
}
`}
                >
                    <div
                        style={{
                            padding: '8px',
                        }}
                    >
                        <ul className="p-nested-dropdowns">
                            <li>Home</li>
                            <li>
                                <div>Patterns</div>
                                <ul>
                                    <li>Layout</li>
                                    <li>Input</li>
                                    <li>
                                        <div>Navigation</div>
                                        <ul>
                                            <li>Breadcrumb</li>
                                            <li>Dropdown</li>
                                            <li>Menu</li>
                                            <li>Nested dropdown</li>
                                        </ul>
                                    </li>
                                    <li>Display</li>
                                    <li>Feedback</li>
                                </ul>
                            </li>
                            <li>Products</li>
                            <li>About</li>
                        </ul>
                    </div>
                </BrowserFrame>
            </div>

            <RelatedPatterns patterns={[Pattern.Dropdown, Pattern.Menu]} />
        </DetailsLayout>
    );
};

export default Details;
