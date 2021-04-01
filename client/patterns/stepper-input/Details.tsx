/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    const [value, setValue] = React.useState(0);
    const decrease = () => setValue(value - 1);
    const increase = () => setValue(value + 1);
    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = parseInt(e.target.value, 10);
        const newValue = isNaN(v) ? 0 : v;
        setValue(newValue);
    };

    return (
        <DetailsLayout pattern={Pattern.StepperInput}>
            <Helmet>
                <meta name="description" content="Create a stepper input with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css stepper input" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="stepper">
    <!-- Minus button -->
    <button class="stepper__button">-</button>

    <!-- Input container -->
    <div class="stepper__content">
        <input type="text" class="stepper__input" />
    </div>

    <!-- Plus button -->
    <button class="stepper__button">+</button>
</div>
`}
css={`
.stepper {
    display: flex;

    /* Border */
    border: 1px solid rgba(0, 0, 0, .3);

    /* Size */
    height: 32px;
    width: 128px;
}

.stepper__button {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Size */
    width: 32px;
}

.stepper__content {
    flex: 1;
}

.stepper__input {
    /* Take full size of its container */
    height: 100%;
    width: 100%;
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
                                borderRadius: '8px',
                                display: 'flex',
                                height: '32px',
                                width: '128px',
                            }}
                        >
                            <button
                                style={{
                                    alignItems: 'center',
                                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                    borderColor: 'transparent',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    width: '32px',
                                }}
                                onClick={decrease}
                            >
                                -
                            </button>
                            <div
                                style={{
                                    borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                    flex: 1,
                                    height: '100%',
                                }}
                            >
                                <input
                                    type="text"
                                    style={{
                                        borderColor: 'transparent',
                                        height: '100%',
                                        padding: '8px',
                                        width: '100%',
                                    }}
                                    value={value}
                                    onChange={change}
                                />
                            </div>
                            <button
                                style={{
                                    alignItems: 'center',
                                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                    borderColor: 'transparent',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    width: '32px',
                                }}
                                onClick={increase}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </BrowserFrame>
            </div>
            <RelatedPatterns patterns={[Pattern.SpinButton, Pattern.Voting]} />
        </DetailsLayout>
    );
};

export default Details;
