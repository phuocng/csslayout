/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import InputChip from './InputChip';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.Chip}>
            <Helmet>
                <meta name="description" content="Create a chip component with CSS flexbox" />
                <meta name="keywords" content="css chip, css flexbox, css tag" />
            </Helmet>
            <div className='p-8 pb-20'>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    You can use a <Link to='/patterns/close-button'>close button</Link> to remove a chip.
                </div>
                <BrowserFrame
html={`
<div class="chip">
    <!-- Content -->
    <div class="chip__content">
        ...
    </div>

    <!-- The close button -->
    <!-- See https://csslayout.io/patterns/close-button -->
    ...
</div>
`}
css={`
.chip {
    /* Center the content */
    align-items: center;
    display: inline-flex;
    justify-content: center;

    /* Background color */
    background-color: rgba(0, 0, 0, .1);

    /* Rounded border */
    border-radius: 9999px;

    /* Spacing */
    padding: 4px 8px;
}

.chip__content {
    margin-right: 4px;
}
`}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            height: '100%',
                            justifyContent: 'center',
                            padding: '8px',
                        }}
                    >
                        <InputChip>CSS</InputChip>
                    </div>
                </BrowserFrame>
            </div>

            <RelatedPatterns patterns={[Pattern.CloseButton]} />
        </DetailsLayout>
    );
};

export default Details;
