/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
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
<style>
.p-rating {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    flex-direction: row-reverse;

    font-size: 32px;
}

.p-rating .p-rating-star:hover,
.p-rating .p-rating-star:hover ~ .p-rating-star {
    color: transparent;
}

/*
Make all previous stars selected when hover on a star
Note that we use \`flex-direction: row-reverse\` on the container
*/
.p-rating .p-rating-star:hover:before,
.p-rating .p-rating-star:hover ~ .p-rating-star:before {
    color: #00449e;
    content: '\\2605';
    left: 0;
    position: absolute;
}

.p-rating-star {
    /* Reset styles for button */
    background-color: transparent;
    border: transparent;
    margin: 0 2px;
    padding: 0;

    /* Used to position the hover state */
    position: relative;
}
</style>

<div class="p-rating">
    <button class="p-rating-star">☆</button>
    <button class="p-rating-star">☆</button>
    <button class="p-rating-star">☆</button>
    <button class="p-rating-star">☆</button>
    <button class="p-rating-star">★</button>
</div>
`}
css={``}
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
