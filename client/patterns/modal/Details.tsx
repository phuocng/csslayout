/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Pattern from '../../constants/Pattern';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.Modal}>
            <Helmet>
                <meta name="description" content="Create a modal with CSS flexbox" />
                <meta name="keywords" content="css dialog, css flexbox, css modal" />
            </Helmet>
            <div className='p-8 pb-20'>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    You can use the <Link to='/patterns/close-button'>close button</Link> to
                    represent the button for closing the modal.
                </div>
                <BrowserFrame
html={`
<div class="modal">
    <!-- Header -->
    <div class="modal__header">
        <!-- Title -->
        ...
        <!-- Close icon sticks to the right -->
        ...
    </div>

    <!-- Content -->
    ...

    <!-- Footer -->
    <div class="modal__footer">
        ...
    </div>
</div>
`}
css={`
.modal {
    /* Border */
    border: 1px solid rgba(0, 0, 0.3);
    border-radius: 4px;
}

.modal__header {
    display: flex;
    justify-content: space-between;
    /* Border */
    border-bottom: 1px solid rgba(0, 0, 0.3);
}

.modal__footer {
    display: flex;
    /* Push the buttons to the right */
    justify-content: flex-end;
    /* Border */
    border-top: 1px solid rgba(0, 0, 0.3);
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
                                width: '50%',
                            }}
                        >
                            <div
                                style={{
                                    alignItems: 'center',
                                    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '16px',
                                }}
                            >
                                <div style={{ width: '60%' }}><Rectangle /></div>
                                <div style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                                    <Circle />
                                </div>
                            </div>
                            <div style={{ padding: '16px' }}>
                                <div style={{ marginBottom: '16px' }}><Block numberOfBlocks={10} /></div>
                                <Block numberOfBlocks={5} />
                            </div>
                            <div
                                style={{
                                    borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    padding: '16px',
                                }}
                            >
                                <div style={{ marginRight: '8px', width: '30%' }}><Rectangle height={32} /></div>
                                <div style={{ width: '30%' }}><Rectangle height={32} /></div>
                            </div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;
