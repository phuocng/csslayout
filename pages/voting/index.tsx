import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import { removeIndent } from '../../utils/removeIndent';

const Details: React.FC<{}> = () => {
    const [value, setValue] = React.useState(900);
    const decrease = () => setValue(value - 1);
    const increase = () => setValue(value + 1);

    return (
        <PatternLayout pattern={Pattern.Voting}>
            <Head>
                <meta name="description" content="Create a voting control with CSS flexbox" />
                <meta name="og:description" content="Create a voting control with CSS flexbox" />
                <meta name="twitter:description" content="Create a voting control with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css triangle buttons, css voting control" />
            </Head>
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
                css={removeIndent`
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
            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.SpinButton, Pattern.StepperInput, Pattern.TriangleButtons]} />
        </PatternLayout>
    );
};

export default Details;
