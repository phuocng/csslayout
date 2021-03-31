/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import './radio-button-group.css';

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
                htmlFor="radio-button-group"
                style={{
                    alignItems: 'center',
                    backgroundColor: value === selectedValue ? '#00449E' : 'transparent',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    padding: '8px',
                }}
            >
                <input
                    id="radio-button-group"
                    type="radio"
                    name="option"
                    value={value}
                    style={{ display: 'none' }}
                    onChange={click}
                />
                {children}
            </label>
        );
    };

    return (
        <DetailsLayout pattern={Pattern.RadioButtonGroup}>
            <Helmet>
                <meta name="description" content="Create a radio button group with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css radio button" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
                    content={(
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
                                className="p-radio-button-group"
                                style={{
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    height: '32px',
                                }}
                            >
                                <Radio value='1'>
                                    <div style={{ width: '80px' }}><Rectangle /></div>
                                </Radio>
                                <Radio value='2'>
                                    <div style={{ width: '120px' }}><Rectangle /></div>
                                </Radio>
                                <Radio value='3'>
                                    <div style={{ width: '100px' }}><Rectangle /></div>
                                </Radio>
                            </div>
                        </div>
                    )}
                    source={`
<style>
.p-radio-button-group label {
    border-right: 1px solid rgba(0, 0, 0, 0.3);
}

/* Remove the right border from the last label */
.p-radio-button-group label:last-child {
    border-right-color: transparent;
}
</style>

<div
    class="p-radio-button-group"
    style="
        display: flex;

        /* Border */
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 4px;
        height: 32px;
    "
>
    <!-- Each radio item -->
    <label style="
        /* Center the content */
        align-items: center;
        display: inline-flex;

        padding: 8px;

        /* For selected radio */
        background-color: #00449E;
        color: #FFF;

        /* For not selected radio */
        background-color: transparent;
        color: #CCC;
    ">
        <!-- The radio input -->
        <input
            type="radio"
            style="
                /* Hide it */
                display: none;
            "
        />

        <!-- The text -->
        ...
    </label>

    <!-- Repeat other items -->
    ...
</div>
`}
                />
            </div>

            <RelatedPatterns patterns={[Pattern.CustomCheckboxButton, Pattern.CustomRadioButton]} />
        </DetailsLayout>
    );
};

export default Details;
