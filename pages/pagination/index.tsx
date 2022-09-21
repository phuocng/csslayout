import * as React from 'react';
import Head from 'next/head';

import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.Pagination}>
            <Head>
                <meta name="description" content="Create a pagination with CSS flexbox" />
                <meta name="og:description" content="Create a pagination with CSS flexbox" />
                <meta name="twitter:description" content="Create a pagination with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css pagination" />
            </Head>
            <BrowserFrame
                html={`
<div class="pagination">
    <!-- Pagination item -->
    <div class="pagination__item">
        ...
    </div>

    <!-- Repeat other items -->
    ...
</div>
`}
                css={`
                    .pagination {
                        display: flex;

                        /* Border */
                        border: 1px solid #d1d5db;
                        border-radius: 4px;
                    }

                    .pagination__item {
                        /* Center the content */
                        align-items: center;
                        display: flex;
                        justify-content: center;

                        /* Right border */
                        border-right: 1px solid #d1d5db;
                    }
                    .pagination__item + .pagination__item {
                        /* No right border */
                        border-right: none;
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
                    <div
                        style={{
                            border: '1px solid #d1d5db',
                            borderRadius: '4px',
                            display: 'flex',
                        }}
                    >
                        <div
                            style={{
                                alignItems: 'center',
                                borderRight: '1px solid #d1d5db',
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
                                borderRight: '1px solid #d1d5db',
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
                                borderRight: '1px solid #d1d5db',
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
                                borderRight: '1px solid #d1d5db',
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
                                borderRight: '1px solid #d1d5db',
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
