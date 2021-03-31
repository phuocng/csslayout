/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.Badge}>
            <Helmet>
                <meta name="description" content="Create a badge component with CSS flexbox" />
                <meta name="keywords" content="css badge, css flexbox" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="container">
    ...
</div>
`}
css={`
.container {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Colors */
    background-color: rgba(0, 0, 0, .3);
    color: #FFF;

    /* Rounded border */
    border-radius: 9999px;
    height: 32px;
    width: 32px;
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
                                alignItems: 'center',
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                borderRadius: '9999px',
                                color: '#FFF',
                                display: 'flex',
                                flexDirection: 'column',
                                fontSize: '20px',
                                height: '32px',
                                justifyContent: 'center',
                                width: '32px',
                            }}
                        >
                            1
                        </div>
                    </div>
                </BrowserFrame>
            </div>

            <RelatedPatterns patterns={[Pattern.Centering, Pattern.InitialAvatar]} />
        </DetailsLayout>
    );
};

export default Details;
