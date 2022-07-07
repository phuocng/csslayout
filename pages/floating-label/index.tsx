import * as React from 'react'
import Head from 'next/head'

import { PatternLayout } from '../../layouts/PatternLayout'
import BrowserFrame from '../../placeholders/BrowserFrame'
import { Pattern } from '../../constants/Pattern'
import { removeIndent } from '../../utils/removeIndent'

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.FloatingLabel}>
            <Head>
                <meta name="description" content="Create a floating label with CSS" />
                <meta name="og:description" content="Create a floating label with CSS" />
                <meta name="twitter:description" content="Create a floating label with CSS" />
                <meta name="keywords" content="css floating label, placeholder shown" />
            </Head>
            <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                Type something in the input to see how the label is shown up.
            </div>
            <BrowserFrame
                html={`
<div class="container">
    <!-- The input -->
    <input placeholder="Placeholder" class="container__input" />

    <!-- The label -->
    <label class="container__label">Placeholder</label>
</div>
`}
                css={removeIndent`
                    .container {
                        position: relative;
                    }

                    /*
Show the label at desired position when the 
placeholder of input isn't shown
*/
                    .container__input:not(:placeholder-shown) + .container__label {
                        background: #fff;
                        transform: translate(0, -50%);
                        opacity: 1;
                    }

                    .container__label {
                        /* Position the label */
                        left: 8px;
                        position: absolute;
                        top: 0;

                        /* Hide it by default */
                        opacity: 0;
                        transition: all 200ms;
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
        </PatternLayout>
    )
}

export default Details
