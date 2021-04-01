/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import Pattern from '../../constants/Pattern';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Star from './Star';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.Rating}>
            <Helmet>
                <meta name="description" content="Create a star rating with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css star rating" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="rating">
    <button class="rating__star">☆</button>
    <button class="rating__star">☆</button>
    <button class="rating__star">☆</button>
    <button class="rating__star">☆</button>
    <button class="rating__star">★</button>
</div>
`}
css={`
.rating {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    flex-direction: row-reverse;

    font-size: 32px;
}

.rating__star:hover,
.rating__star:hover ~ .rating__star {
    color: transparent;
}

/*
Make all previous stars selected when hover on a star
Note that we use \`flex-direction: row-reverse\` on the container
*/
.rating__star:hover:before,
.rating__star:hover ~ .rating__star:before {
    color: #00449e;
    content: '\\2605';
    left: 0;
    position: absolute;
}

.rating__star {
    /* Reset styles for button */
    background-color: transparent;
    border: transparent;
    margin: 0 2px;
    padding: 0;

    /* Used to position the hover state */
    position: relative;
}
`}
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
            </div>
        </DetailsLayout>
    );
};

export default Details;
