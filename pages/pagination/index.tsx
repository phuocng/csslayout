import * as React from 'react';
import Head from 'next/head';

import { PrefixContext } from '../../context/prefixContext';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'pagination';
    return (
        <PatternLayout pattern={Pattern.Pagination}>
            <Head>
                <meta name="description" content="Create a pagination with CSS flexbox" />
                <meta name="og:description" content="Create a pagination with CSS flexbox" />
                <meta name="twitter:description" content="Create a pagination with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css pagination" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <!-- Pagination item -->
    <div class="${prefix}${container}__item">
        ...
    </div>

    <!-- Repeat other items -->
    ...
</div>
`
                }
                css={
                    '' +
`
.${prefix}${container} {
    display: flex;

    /* Border */
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
}

.${prefix}${container}__item {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Right border */
    border-right: 1px solid rgba(0, 0, 0, 0.3);
}
.${prefix}${container}__item + .${prefix}${container}__item {
    /* No right border */
    border-right: none;
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
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '4px',
                            display: 'flex',
                        }}
                    >
                        <div
                            style={{
                                alignItems: 'center',
                                borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                display: 'flex',
                                justifyContent: 'center',
                                padding: '8px',
                                width: '128px',
                            }}
                        >
                            <Rectangle />
                        </div>
                        <div
                            style={{
                                alignItems: 'center',
                                borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                display: 'flex',
                                justifyContent: 'center',
                                padding: '8px',
                            }}
                        >
                            <Circle size={16} />
                        </div>
                        <div
                            style={{
                                alignItems: 'center',
                                borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                display: 'flex',
                                justifyContent: 'center',
                                padding: '8px',
                            }}
                        >
                            <Circle size={16} />
                        </div>
                        <div
                            style={{
                                alignItems: 'center',
                                borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                display: 'flex',
                                justifyContent: 'center',
                                padding: '8px',
                            }}
                        >
                            <Circle size={16} />
                        </div>
                        <div
                            style={{
                                alignItems: 'center',
                                borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                display: 'flex',
                                justifyContent: 'center',
                                padding: '8px',
                            }}
                        >
                            <Circle size={16} />
                        </div>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                padding: '8px',
                                width: '64px',
                            }}
                        >
                            <Rectangle />
                        </div>
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;
