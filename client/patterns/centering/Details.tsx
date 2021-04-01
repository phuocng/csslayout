/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Pattern from '../../constants/Pattern';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.Centering}>
            <Helmet>
                <meta name="description" content="Center an element with CSS flexbox" />
                <meta name="keywords" content="css centering, css flexbox" />
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
    align-items: center;
    display: flex;
    justify-content: center;
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
                        <Circle size={64} />
                        <div style={{ marginTop: '16px', width: '40%' }}><Rectangle /></div>
                        <div style={{ marginTop: '8px', width: '30%' }}><Rectangle /></div>
                        <div style={{ marginTop: '8px', width: '20%' }}><Rectangle /></div>
                    </div>
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;
