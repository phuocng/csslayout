import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Star from './Star';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Rating">
            <div style={{ padding: '64px 32px' }}>
                <BrowserFrame
                    content={(
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                height: '100%',
                                justifyContent: 'center',
                            }}
                        >
                            <div className="rating">
                                <Star isActive={false} />
                                <Star isActive={false} />
                                <Star isActive={false} />
                                <Star isActive={false} />
                                <Star isActive={true} />
                            </div>
                        </div>
                    )}
                    source={`
<style>
.rating {
    /* Content is centered */
    align-items: center;
    display: flex;
    justify-content: center;

    flex-direction: row-reverse;

    font-size: 32px;
}

.rating .star:hover, .rating .star:hover ~ .star {
    color: transparent;
}

/*
Make all previous stars selected when hover on a star
Note that we use \`flex-direction: row-reverse\` on the container
*/
.rating .star:hover:before,
.rating .star:hover ~ .star:before {
    color: #00449e;
    content: '\\2605';
    left: 0;
    position: absolute;
}

.star {
    /* Reset styles for button */
    background-color: transparent;
    border: transparent;
    margin: 0 2px;
    padding: 0;

    /* Used to postion the hover state */
    position: relative;
}
</style>

<div class="rating">
    <button class="star">☆</button>
    <button class="star">☆</button>
    <button class="star">☆</button>
    <button class="star">☆</button>
    <button class="star">★</button>
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
