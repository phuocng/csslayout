/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import Pattern from '../../constants/Pattern';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.SearchBox}>
            <Helmet>
                <meta name="description" content="Create a search box with CSS flexbox" />
                <meta name="og:description" content="Create a search box with CSS flexbox" />
                <meta name="twitter:description" content="Create a search box with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css search box" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="container">
    <!-- Text input -->
    <input type="text" class="container__input" />

    <!-- Search icon sticks to the left or right -->
    ...
</div>
`}
css={`
.container {
    display: flex;

    /* If you want to place the icon before the text input */
    flex-direction: row-reverse;

    /* Border */
    border: 1px solid rgba(0, 0, 0, 0.3);
}

.container__input {
    border-color: transparent;
    /* Take available width */
    flex: 1;
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
                        <div style={{ width: '256px' }}>
                            <div
                                style={{
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '2px',
                                    display: 'flex',
                                    marginBottom: '16px',
                                }}
                            >
                                <input
                                    type="text"
                                    placeholder="Search"
                                    style={{
                                        borderColor: 'transparent',
                                        flex: 1,
                                        padding: '4px',
                                    }}
                                />
                                <div style={{ padding: '8px' }}>
                                    <Circle />
                                </div>
                            </div>

                            <div
                                style={{
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '2px',
                                    display: 'flex',
                                    flexDirection: 'row-reverse',
                                }}
                            >
                                <input
                                    type="text"
                                    placeholder="Search"
                                    style={{
                                        borderColor: 'transparent',
                                        flex: 1,
                                        padding: '4px',
                                    }}
                                />
                                <div style={{ padding: '8px' }}>
                                    <Circle />
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;
