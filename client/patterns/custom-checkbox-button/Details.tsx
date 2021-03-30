/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

interface CheckboxProps {
    isChecked: boolean;
    value: string;
}

const Details: React.FC<{}> = () => {
    const Checkbox: React.FC<CheckboxProps> = ({ isChecked, value, children }) => {
        const [checked, setChecked] = useState(isChecked);
        const click = () => setChecked((c) => !c);

        return (
            <label
                htmlFor="custom-checkbox-button"
                style={{
                    alignItems: 'center',
                    cursor: 'pointer',
                    display: 'inline-flex',
                }}
            >
                <input
                    id="custom-checkbox-button"
                    type="checkbox"
                    name="option"
                    value={value}
                    checked={checked}
                    style={{ display: 'none' }}
                    onChange={click}
                />
                <div
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        borderRadius: '4px',
                        marginRight: '8px',
                        padding: '4px',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: checked ? '#00449E' : 'transparent',
                            borderRadius: '4px',
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
        <DetailsLayout pattern={Pattern.CustomCheckboxButton}>
            <Helmet>
                <meta name="description" content="Create a custom checkbox button with CSS flexbox" />
                <meta name="keywords" content="css checkbox, css flexbox" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
                    content={(
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
                                    <Checkbox value='1' isChecked={false}>
                                        <div style={{ width: '100px' }}><Rectangle /></div>
                                    </Checkbox>
                                </div>
                                <div
                                    style={{
                                        alignItems: 'center',
                                        display: 'inline-flex',
                                        marginBottom: '16px',
                                    }}
                                >
                                    <Checkbox value='2' isChecked={true}>
                                        <div style={{ width: '200px' }}><Rectangle /></div>
                                    </Checkbox>
                                </div>
                                <div
                                    style={{
                                        alignItems: 'center',
                                        display: 'inline-flex',
                                    }}
                                >
                                    <Checkbox value='3' isChecked={false}>
                                        <div style={{ width: '150px' }}><Rectangle /></div>
                                    </Checkbox>
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<label style="
    /* Center the content horizontally */
    align-items: center;
    display: inline-flex;

    /* Cursor */
    cursor: pointer;
">
    <!-- The real checkbox -->
    <input
        type="checkbox"
        style="
            /* Hide it */
            display: none;
        "
    />

    <!-- The fake square -->
    <div style="
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 4px;

        /* Spacing */
        margin-right: 8px;
        padding: 4px;
    ">
        <!-- The inner square -->
        <div style="
            border-radius: 4px;
            height: 16px;
            width: 16px;

            /* For selected checkbox */
            background-color: #00449E;

            /* For not selected checkbox */
            background-color: transparent;
        " />
    </div>

    <!-- The text -->
    ...
</div>
`}
                />
            </div>
            <RelatedPatterns patterns={[Pattern.CustomRadioButton, Pattern.RadioButtonGroup]} />
        </DetailsLayout>
    );
};

export default Details;
