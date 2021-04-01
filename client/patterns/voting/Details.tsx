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
    const [value, setValue] = React.useState(900);
    const decrease = () => setValue(value - 1);
    const increase = () => setValue(value + 1);

    return (
        <DetailsLayout pattern={Pattern.Voting}>
            <Helmet>
                <meta name="description" content="Create a voting control with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css triangle buttons, css voting control" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="voting">
    <!-- Up button -->
    <button class="voting__button">
        <div class="voting__triangle voting__triangle--up"></div>
    </button>

    <!-- Number -->
    <div class="voting__number">
        ...
    </div>

    <!-- Down button -->
    <button class="voting__button">
        <div class="voting__triangle voting__triangle--down"></div>
    </button>
</div>
`}
css={`
.voting {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    height: 8rem;
}

.voting__button {
    /* Reset */
    background: none;
    border: none;
    cursor: pointer;
    
    /* Size */
    height: 1rem;

    /* Position the triangle */
    position: relative;
}

.voting__triangle {
    border-style: solid;

    /* Size */
    height: 0;
    width: 0;
}

.voting__triangle--up {
    border-color: transparent transparent rgba(0, 0, 0, 0.3);
    border-width: 0 0.5rem 0.5rem;
}

.voting__triangle--down {
    border-color: rgba(0, 0, 0, 0.3) transparent transparent;
    border-width: 0.5rem 0.5rem 0px;
}

.voting__number {
    /* Take the available height */
    flex: 1;

    /* Center the number */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Spacing */
    padding: 0.25rem;
}
`}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            height: '100%',
                            justifyContent: 'center',
                            padding: '0.5rem',
                        }}
                    >
                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                borderRadius: '0.25rem',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '8rem',
                            }}
                        >
                            <button
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    height: '1rem',
                                    position: 'relative',
                                }}
                                onClick={increase}
                            >
                                <div
                                    style={{
                                        borderColor: 'transparent transparent rgba(0, 0, 0, 0.3) transparent',
                                        borderStyle: 'solid',
                                        borderWidth: '0 0.5rem 0.5rem 0.5rem',
                                        height: 0,
                                        left: '50%',
                                        position: 'absolute',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: 0,
                                    }}
                                />
                            </button>
                            <div
                                style={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    flex: 1,
                                    padding: '0.25rem',
                                    justifyContent: 'center',
                                }}
                            >
                                {value}
                            </div>
                            <button
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    height: '1rem',
                                    position: 'relative',
                                }}
                                onClick={decrease}
                            >
                                <div
                                    style={{
                                        borderColor: 'rgba(0, 0, 0, 0.3) transparent transparent transparent',
                                        borderStyle: 'solid',
                                        borderWidth: '0.5rem 0.5rem 0 0.5rem',
                                        height: 0,
                                        left: '50%',
                                        position: 'absolute',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: 0,
                                    }}
                                />
                            </button>
                        </div>
                    </div>
                </BrowserFrame>
            </div>

            <RelatedPatterns
                patterns={[
                    Pattern.SpinButton, Pattern.StepperInput, Pattern.TriangleButtons
                ]}
            />
        </DetailsLayout>
    );
};

export default Details;
