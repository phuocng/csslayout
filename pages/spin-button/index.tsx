import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Triangle from '../../placeholders/Triangle';
import { removeIndent } from '../../utils/removeIndent';

const Details: React.FC<{}> = () => {
    const [value, setValue] = React.useState(0);
    const decrease = () => setValue(value - 1);
    const increase = () => setValue(value + 1);
    const change = (e: React.ChangeEvent<HTMLInputElement>) => setValue(parseInt(e.target.value, 10));

    return (
        <PatternLayout pattern={Pattern.SpinButton}>
            <Head>
                <meta name="description" content="Create a spin button with CSS flexbox" />
                <meta name="og:description" content="Create a spin button with CSS flexbox" />
                <meta name="twitter:description" content="Create a spin button with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css spin button" />
            </Head>
            <BrowserFrame
                html={`
<div class="container">
    <!-- Input -->
    <input type="text" class="container__input" />

    <!-- Buttons container -->
    <div class="container__buttons">
        <!-- Up button -->
        <button class="container__button">
            ...
        </button>

        <!-- Down button -->
        <button class="container__button">
            ...
        </button>
    </div>
</div>
`}
                css={removeIndent`
                    .container {
                        border: 1px solid rgba(0, 0, 0, 0.3);
                        border-radius: 2px;
                        display: flex;
                    }

                    .container__input {
                        border-color: transparent;
                        margin-right: 4px;
                        padding: 4px;
                        width: 100px;
                    }

                    .container__buttons {
                        /* Content is centered vertically */
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }

                    .container__button {
                        border-color: transparent;
                        /* Make buttons have the same height */
                        flex: 1;
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
                    }}
                >
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '2px',
                            display: 'flex',
                        }}
                    >
                        <input
                            type="text"
                            style={{
                                borderColor: 'transparent',
                                marginRight: '4px',
                                padding: '4px',
                                width: '100px',
                            }}
                            value={value}
                            onChange={change}
                        />
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <button
                                style={{
                                    borderColor: 'transparent',
                                    cursor: 'pointer',
                                    flex: 1,
                                    padding: '4px 4px 2px 4px',
                                }}
                                onClick={increase}
                            >
                                <Triangle size={6} corner="t" />
                            </button>
                            <button
                                style={{
                                    borderColor: 'transparent',
                                    cursor: 'pointer',
                                    flex: 1,
                                    padding: '2px 4px 4px 4px',
                                }}
                                onClick={decrease}
                            >
                                <Triangle size={6} corner="b" />
                            </button>
                        </div>
                    </div>
                </div>
            </BrowserFrame>
            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.StepperInput, Pattern.Voting]} />
        </PatternLayout>
    );
};

export default Details;
