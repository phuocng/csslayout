/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';

import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.ColorSwatch}>
            <Helmet>
                <meta name="description" content="Create a color swatch with CSS flexbox" />
                <meta name="og:description" content="Create a color swatch with CSS flexbox" />
                <meta name="twitter:description" content="Create a color swatch with CSS flexbox" />
                <meta name="keywords" content="css color swatch, css flexbox" />
            </Helmet>
            <BrowserFrame
html={`
<div class="swatch">
    <div class="swatch__item" style="background-color: ..."></div>

    <!-- Repeat other items -->
    ...
</div>
`}
css={`
.swatch {
    /* Wrap the items */
    display: flex;
    flex-wrap: wrap;
}
.swatch__item {
    /* Rounded border */
    border-radius: 9999px;
    height: 1.5rem;
    width: 1.5rem;

    /* Space between items */
    margin: 0.5rem;
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
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}
                    >
                    {
                        Array(9).fill(0).map((_, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: `rgba(0, 0, 0, 0.${index + 1})`,
                                    borderRadius: '9999px',
                                    height: '1.5rem',
                                    margin: '0.5rem',
                                    width: '1.5rem',
                                }}
                            />
                        ))
                    }
                    </div>
                </div>
            </BrowserFrame>
        </DetailsLayout>
    );
};

export default Details;
