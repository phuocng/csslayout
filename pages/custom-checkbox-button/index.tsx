import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { PrefixContext } from '../../context/prefixContext';
import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

interface CheckboxProps {
    isChecked: boolean;
    value: string;
}

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'label';

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
        <PatternLayout pattern={Pattern.CustomCheckboxButton}>
            <Head>
                <meta name="description" content="Create a custom checkbox button with CSS flexbox" />
                <meta name="og:description" content="Create a custom checkbox button with CSS flexbox" />
                <meta name="twitter:description" content="Create a custom checkbox button with CSS flexbox" />
                <meta name="keywords" content="css checkbox, css flexbox" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<label class="${prefix}${container}">
    <!-- The real checkbox -->
    <input type="checkbox" class="${prefix}${container}__input" />

    <!-- The fake square -->
    <div class="${prefix}${container}__square">
        <!-- The inner square -->
        <div class="${prefix}${container}__checkbox label__square--selected"></div>
    </div>

    <!-- The text -->
    ...
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    /* Center the content horizontally */
    align-items: center;
    display: inline-flex;

    /* Cursor */
    cursor: pointer;
}

.${prefix}${container}__input {
    /* Hide it */
    display: none;
}

.${prefix}${container}__square {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;

    /* Spacing */
    margin-right: 8px;
    padding: 4px;
}

.${prefix}${container}__checkbox {
    background-color: transparent;
    border-radius: 4px;
    height: 16px;
    width: 16px;
}

.${prefix}${container}__checkbox--selected {
    /* For selected checkbox */
    background-color: #00449e;
}
`
                }
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
                            <Checkbox value="1" isChecked={false}>
                                <div style={{ width: '100px' }}>
                                    <Rectangle />
                                </div>
                            </Checkbox>
                        </div>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'inline-flex',
                                marginBottom: '16px',
                            }}
                        >
                            <Checkbox value="2" isChecked={true}>
                                <div style={{ width: '200px' }}>
                                    <Rectangle />
                                </div>
                            </Checkbox>
                        </div>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'inline-flex',
                            }}
                        >
                            <Checkbox value="3" isChecked={false}>
                                <div style={{ width: '150px' }}>
                                    <Rectangle />
                                </div>
                            </Checkbox>
                        </div>
                    </div>
                </div>
            </BrowserFrame>
            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.CustomRadioButton, Pattern.RadioButtonGroup]} />
        </PatternLayout>
    );
};

export default Details;
