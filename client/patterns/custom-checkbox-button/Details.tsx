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
import Rectangle from '../../placeholders/Rectangle';

interface CheckboxProps {
    isChecked: boolean;
    value: string;
}

const Details: React.FC<{}> = () => {
    const Checkbox: React.FC<CheckboxProps> = ({ isChecked, value, children }) => {
        const [checked, setChecked] = React.useState(isChecked);
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
                <meta name="og:description" content="Create a custom checkbox button with CSS flexbox" />
                <meta name="twitter:description" content="Create a custom checkbox button with CSS flexbox" />
                <meta name="keywords" content="css checkbox, css flexbox" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<label class="label">
    <!-- The real checkbox -->
    <input type="checkbox" class="label__input" />

    <!-- The fake square -->
    <div class="label__square">
        <!-- The inner square -->
        <div class="label__checkbox label__square--selected"></div>
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

.label__square {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;

    /* Spacing */
    margin-right: 8px;
    padding: 4px;
}

.label__checkbox {
    background-color: transparent;
    border-radius: 4px;
    height: 16px;
    width: 16px;
}

.label__checkbox--selected {
    /* For selected checkbox */
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
                </BrowserFrame>
            </div>
            <RelatedPatterns patterns={[Pattern.CustomRadioButton, Pattern.RadioButtonGroup]} />
        </DetailsLayout>
    );
};

export default Details;
