/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';

import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Square from '../../placeholders/Square';
import './tree-diagram.css';

const Details: React.FC<{}> = () => {
    const [value, setValue] = React.useState(900);
    const decrease = () => setValue(value - 1);
    const increase = () => setValue(value + 1);

    return (
        <DetailsLayout pattern={Pattern.TreeDiagram}>
            <Helmet>
                <meta name="description" content="Create a tree diagram with CSS" />
                <meta name="keywords" content="css sitemap, css tree diagram" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div className="tree-diagram">
    <ul>
        <li>
            <!-- Content -->
            ...

            <!-- Sub items -->
            <ul>
                <li>
                    <!-- Content -->
                    ...

                    <!-- Sub items -->
                    <ul>
                        <li>...</li>
                        <li>...</li>
                        ...
                    </ul>
                </li>
                <li>...</li>
                ...
            </ul>
        </li>
        
        <!-- Repeat other items -->
        ...
    </ul>
</div>
`}
css={`
.tree-diagram ul {
    display: flex;
    position: relative;

    /* Reset */
    list-style-type: none;
    margin: 0;
    padding: 1rem 0.5rem 0rem 0.5rem;
}

.tree-diagram ul ul::before {
    border-right: 1px solid rgba(0, 0, 0, .3);
    content: '';
    
    /* Position */
    position: absolute;
    top: 0;
    right: 50%;

    /* Size */
    height: 1rem;
    width: 50%;
}

.tree-diagram li {
    padding: 1rem 0.5rem 0rem 0.5rem;
    position: relative;

    /* Center the content */
    align-items: center;
    display: flex;    
    flex-direction: column;
}

.tree-diagram li::before {
    border-right: 1px solid rgba(0, 0, 0, .3);
    border-top: 1px solid rgba(0, 0, 0, .3);
    content: '';    

    /* Position */
    position: absolute;
    top: 0;
    right: 50%;

    /* Size */
    height: 1rem;
    width: 50%;
}

.tree-diagram li::after {
    border-top: 1px solid rgba(0, 0, 0, .3);
    content: '';

    /* Position */
    position: absolute;
    top: 0;
    right: 0;

    /* Size */
    width: 50%;
}

.tree-diagram li:first-child::before,
.tree-diagram li:last-child::after {
    /* Remove the top of border from the first and last items */
    border-top: none;
}

/* Add a root item if you want */
li.tree-diagram__root::before {
    border-right: none;
}
`}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            height: '100%',
                            justifyContent: 'center',
                            padding: '0.5rem',
                        }}
                    >
                        <div className="tree-diagram">
                            <ul>
                                <li className="tree-diagram__root">
                                    <Square size='2.5rem' />
                                    <ul>
                                        <li>
                                            <Square size='2rem' />
                                            <ul>
                                                <li><Square size='1.5rem' /></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Square size='2rem' />
                                            <ul>
                                                <li>
                                                    <Square size='1.5rem' />
                                                    <ul>
                                                        <li><Square size='1rem' /></li>
                                                        <li><Square size='1rem' /></li>
                                                        <li><Square size='1rem' /></li>
                                                    </ul>
                                                </li>
                                                <li><Square size='1.5rem' /></li>
                                                <li>
                                                    <Square size='1.5rem' />
                                                    <ul>
                                                        <li><Square size='1rem' /></li>
                                                        <li><Square size='1rem' /></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><Square size='2rem' /></li>
                                    </ul>
                                </li>                                
                            </ul>
                        </div>
                    </div>
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;
