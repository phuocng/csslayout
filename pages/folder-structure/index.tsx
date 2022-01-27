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
    container = container || 'folder-structure';
    return (
        <PatternLayout pattern={Pattern.FolderStructure}>
            <Head>
                <meta name="description" content="Create a folder structure with CSS" />
                <meta name="og:description" content="Create a folder structure with CSS" />
                <meta name="twitter:description" content="Create a folder structure with CSS" />
                <meta name="keywords" content="css folder structure, css folder tree" />
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
:root {
    --${prefix}${container}-item-height: 1rem;
    --${prefix}${container}-item-margin-left: 2rem;
    --${prefix}${container}-item-padding-top: 1rem;
}

.${prefix}${container} ul {
    /* Reset */
    list-style-type: none;
    margin: 0;
}

.${prefix}${container} li {
    padding: var(--${prefix}${container}-item-padding-top) 0rem 0rem 0rem;
    position: relative;
}

.${prefix}${container} li::before {
    border-left: 1px solid rgba(0, 0, 0, 0.3);
    content: '';

    /* Position */
    left: 0;
    position: absolute;
    top: 0;
    transform: translate(calc(-1 * var(--${prefix}${container}-item-margin-left)), 0);

    /* Size */
    height: 100%;
}

.${prefix}${container} li::after {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    content: '';

    /* Position */
    left: 0;
    position: absolute;
    top: calc(var(--${prefix}${container}-item-padding-top) + var(--${prefix}${container}-item-height) / 2);
    transform: translate(-100%, 0);

    /* Size */
    width: var(--${prefix}${container}-item-margin-left);
}

/* Remove the border from the last item */
.${prefix}${container} li:last-child::before {
    height: calc(
        var(--${prefix}${container}-item-padding-top) + var(--${prefix}${container}-item-height) / 2
    );
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
                    <div className="folder-structure">
                        <ul>
                            <li>
                                <Square size="1rem" />
                                <ul>
                                    <li>
                                        <Square size="1rem" />
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Square size="1rem" />
                                <ul>
                                    <li>
                                        <Square size="1rem" />
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
                                        <Square size="1rem" />
                                    </li>
                                    <li>
                                        <Square size="1rem" />
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
                                <Square size="1rem" />
                            </li>
                        </ul>
                    </div>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.TreeDiagram]} />
        </PatternLayout>
    );
};

export default Details;
