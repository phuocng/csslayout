/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Pattern from '../../constants/Pattern';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.StampBorder}>
            <Helmet>
                <meta name="description" content="Create stamp border with CSS" />
                <meta name="keywords" content="css radial gradient, css stamp border" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div style="
    /* Background */
    background-color: #ccc;
    background-image: radial-gradient(#fff 50%, transparent 50%);
    background-position: -5px -5px;
    background-repeat: repeat;
    background-size: 10px 10px;

    /* Spacing */
    padding: 5px;
">
    <!-- Inner -->
    <div style="
        /* Background */
        background-color: #ccc;
    ">
        <!-- Content -->
        ...
    </div>
</div>
`}
css={``}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            justifyContent: 'center',
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: '#ccc',
                                backgroundImage: 'radial-gradient(#fff 50%, transparent 50%)',
                                backgroundPosition: '-5px -5px',
                                backgroundRepeat: 'repeat',
                                backgroundSize: '10px 10px',
                                height: '200px',
                                padding: '5px',
                                width: '200px',
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: '#ccc',
                                    height: '100%',
                                    width: '100%',
                                }}
                            />
                        </div>
                    </div>
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;
