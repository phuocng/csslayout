/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import './floating-label.css';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Pattern from '../../constants/Pattern';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.FloatingLabel}>
            <Helmet>
                <meta name="description" content="Create a floating label with CSS" />
                <meta name="keywords" content="css floating label, placeholder shown" />
            </Helmet>
            <div className='p-8 pb-20'>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    Type something in the input to see how the label is shown up.
                </div>
                <BrowserFrame
html={`
<style>
.p-floating-container {
    position: relative;
}

.p-floating-container label {
    /* Position the label */
    left: 8px;
    position: absolute;
    top: 0;

    /* Hide it by default */
    opacity: 0;
    transition: 'all 200ms',
}

/* Show the label at desired position when the placeholder of input isn't shown */
.p-floating-container input:not(:placeholder-shown) + label {
    background: #FFF;
    transform: translate(0, -50%);
    opacity: 1;
}
</style>

<div class="p-floating-container">
    <!-- The input -->
    <input placeholder="Placeholder" />

    <!-- The label -->
    <label>Placeholder</label>
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
                            padding: '8px',
                        }}
                    >
                        <div
                            className="p-floating-container"
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                borderRadius: '4px',
                                padding: '0 1px',
                                position: 'relative',
                                width: '200px',
                            }}
                        >
                            <input
                                id="floating-label-input"
                                placeholder="Placeholder"
                                type="text"
                                style={{
                                    borderColor: 'transparent',
                                    padding: '8px',
                                    width: '100%',
                                }}
                            />
                            <label
                                htmlFor="floating-label-input"
                                style={{
                                    left: '8px',
                                    padding: '0 8px',
                                    position: 'absolute',
                                    top: 0,
                                    transition: 'all 200ms',
                                }}
                            >
                                Placeholder
                            </label>
                        </div>
                    </div>
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;
