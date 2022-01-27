import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { PrefixContext } from '../../context/prefixContext';
import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Square from '../../placeholders/Square';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'tree-diagram';
    return (
        <PatternLayout pattern={Pattern.TreeDiagram}>
            <Head>
                <meta name="description" content="Create a tree diagram with CSS" />
                <meta name="og:description" content="Create a tree diagram with CSS" />
                <meta name="twitter:description" content="Create a tree diagram with CSS" />
                <meta name="keywords" content="css sitemap, css tree diagram" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
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
`
                }
                css={
                    '' +
                    `
.${prefix}${container} ul {
    display: flex;
    position: relative;

    /* Reset */
    list-style-type: none;
    margin: 0;
    padding: 1rem 0.5rem 0rem 0.5rem;
}

.${prefix}${container} ul ul::before {
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    content: '';

    /* Position */
    position: absolute;
    top: 0;
    right: 50%;

    /* Size */
    height: 1rem;
    width: 50%;
}

.${prefix}${container} li {
    padding: 1rem 0.5rem 0rem 0.5rem;
    position: relative;

    /* Center the content */
    align-items: center;
    display: flex;
    flex-direction: column;
}

.${prefix}${container} li::before {
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    content: '';

    /* Position */
    position: absolute;
    top: 0;
    right: 50%;

    /* Size */
    height: 1rem;
    width: 50%;
}

.${prefix}${container} li::after {
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    content: '';

    /* Position */
    position: absolute;
    top: 0;
    right: 0;

    /* Size */
    width: 50%;
}

.${prefix}${container} li:first-child::before,
.${prefix}${container} li:last-child::after {
    /* Remove the top of border from the first and last items */
    border-top: none;
}

/* Add a root item if you want */
li.${prefix}${container}__root::before {
    border-right: none;
}
`
                }
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
                                <Square size="2.5rem" />
                                <ul>
                                    <li>
                                        <Square size="2rem" />
                                        <ul>
                                            <li>
                                                <Square size="1.5rem" />
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Square size="2rem" />
                                        <ul>
                                            <li>
                                                <Square size="1.5rem" />
                                                <ul>
                                                    <li>
                                                        <Square size="1rem" />
                                                    </li>
                                                    <li>
                                                        <Square size="1rem" />
                                                    </li>
                                                    <li>
                                                        <Square size="1rem" />
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Square size="1.5rem" />
                                            </li>
                                            <li>
                                                <Square size="1.5rem" />
                                                <ul>
                                                    <li>
                                                        <Square size="1rem" />
                                                    </li>
                                                    <li>
                                                        <Square size="1rem" />
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Square size="2rem" />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.FolderStructure]} />
        </PatternLayout>
    );
};

export default Details;
