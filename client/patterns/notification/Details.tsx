/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Pattern from '../../constants/Pattern';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.Notification}>
            <Helmet>
                <meta name="description" content="Create a notification with CSS flexbox" />
                <meta name="keywords" content="css alert, css flexbox, css notification" />
            </Helmet>
            <div className='p-8 pb-20'>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    You can use the <Link to='/patterns/close-button'>close button</Link> to
                    represent the button for closing the notification.
                </div>
                <BrowserFrame
html={`
<div class="notification">
    <!-- Content -->
    ...

    <!-- Close button sticks to the right -->
    ...
</div>
`}
css={`
.notification {
    display: flex;
    justify-content: space-between;
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
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                borderRadius: '4px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '60%',
                            }}
                        >
                            <div style={{ padding: '16px', width: '80%' }}><Block numberOfBlocks={5} /></div>
                            <button
                                style={{
                                    alignItems: 'center',
                                    borderColor: 'transparent',
                                    color: 'rgba(0, 0, 0, .3)',
                                    display: 'flex',
                                    fontSize: '36px',
                                    height: '32px',
                                    justifyContent: 'center',
                                    marginRight: '1px',
                                    width: '32px',
                                }}
                            >
                                <Circle />
                            </button>
                        </div>
                    </div>
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;
