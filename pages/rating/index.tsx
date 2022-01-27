import * as React from 'react';
import Head from 'next/head';

import { PrefixContext } from '../../context/prefixContext';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

interface StarProps {
    isActive: boolean;
}

const Star: React.FC<StarProps> = ({ isActive }) => {
    return <button className="p-rating-star">{isActive ? '★' : '☆'}</button>;
};

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'rating';
    return (
        <PatternLayout pattern={Pattern.Rating}>
            <Head>
                <meta name="description" content="Create a star rating with CSS flexbox" />
                <meta name="og:description" content="Create a star rating with CSS flexbox" />
                <meta name="twitter:description" content="Create a star rating with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css star rating" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <button class="${prefix}${container}__star">☆</button>
    <button class="${prefix}${container}__star">☆</button>
    <button class="${prefix}${container}__star">☆</button>
    <button class="${prefix}${container}__star">☆</button>
    <button class="${prefix}${container}__star">★</button>
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    flex-direction: row-reverse;

    font-size: 32px;
}

.${prefix}${container}__star:hover,
.${prefix}${container}__star:hover ~ .${prefix}${container}__star {
    color: transparent;
}

/*
    Make all previous stars selected when hover on a star
    Note that we use \`flex-direction: row-reverse\` on the container
*/
.${prefix}${container}__star:hover:before,
.${prefix}${container}__star:hover ~ .${prefix}${container}__star:before {
    color: #00449e;
    content: '\\2605';
    left: 0;
    position: absolute;
}

.${prefix}${container}__star {
    /* Reset styles for button */
    background-color: transparent;
    border: transparent;
    margin: 0 2px;
    padding: 0;

    /* Used to position the hover state */
    position: relative;
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
                    }}
                >
                    <div className="p-rating">
                        <Star isActive={false} />
                        <Star isActive={false} />
                        <Star isActive={false} />
                        <Star isActive={false} />
                        <Star isActive={true} />
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;
