/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

interface RadioProps {
    value: string;
}

const Details: React.FC<{}> = () => {
    const [selectedValue, setSelectedValue] = useState('1');

    const Radio: React.FC<RadioProps> = ({ value, children }) => {
        const click = () => setSelectedValue(value);

        return (
            <label
                htmlFor="custom-radio-button"
                style={{
                    alignItems: 'center',
                    cursor: 'pointer',
                    display: 'inline-flex',
                }}
            >
                <input
                    id="custom-radio-button"
                    type="radio"
                    name="option"
                    value={value}
                    style={{ display: 'none' }}
                    onChange={click}
                />
                <div
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        borderRadius: '9999px',
                        marginRight: '8px',
                        padding: '4px',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: value === selectedValue
                                ? '#00449E'
                                : 'transparent',
                            borderRadius: '9999px',
                            height: '16px',
                            width: '16px',
                        }}
                    />
                </div>
                {children}
            </label>
        );
    };

    return (
        <DetailsLayout pattern={Pattern.CustomRadioButton}>
            <Helmet>
                <meta name="description" content="Create a custom radio button with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css radio" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<label class="label">
    <!-- The real radio -->
    <input type="radio" class="label__input" />

    <!-- The fake circle -->
    <div class="label__circle">
        <!-- The inner circle -->
        <div class="label__radio label__radio--selected"></div>
    </div>

    <!-- The text -->
    ...
</div>
`}
css={`
.label {
    /* Center the content horizontally */
    align-items: center;
    display: inline-flex;

    /* Cursor */
    cursor: pointer;
}

.label__input {
    /* Hide it */
    display: none;
}

.label__circle {
    /* Rounded border */
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 9999px;

    /* Spacing */
    margin-right: 8px;
    padding: 4px;
}

.label__radio {
    /* Rounded border */
    border-radius: 9999px;
    height: 16px;
    width: 16px;

    /* For not selected radio */
    background-color: transparent;
}

.label__radio--selected {
    /* For selected radio */
    background-color: #00449E;
}
`}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            height: '100%',
                            justifyContent: 'center',
                            padding: '8px',
                        }}
                    >
                        <div style={{ width: '200px' }}>
                            <div
                                style={{
                                    alignItems: 'center',
                                    display: 'inline-flex',
                                    marginBottom: '16px',
                                }}
                            >
                                <Radio value='1'>
                                    <div style={{ width: '100px' }}><Rectangle /></div>
                                </Radio>
                            </div>
                            <div
                                style={{
                                    alignItems: 'center',
                                    display: 'inline-flex',
                                    marginBottom: '16px',
                                }}
                            >
                                <Radio value='2'>
                                    <div style={{ width: '200px' }}><Rectangle /></div>
                                </Radio>
                            </div>
                            <div
                                style={{
                                    alignItems: 'center',
                                    display: 'inline-flex',
                                }}
                            >
                                <Radio value='3'>
                                    <div style={{ width: '150px' }}><Rectangle /></div>
                                </Radio>
                            </div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>
            <RelatedPatterns patterns={[Pattern.CustomCheckboxButton, Pattern.RadioButtonGroup]} />
        </DetailsLayout>
    );
};

export default Details;
