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
    const [checked, setChecked] = React.useState(false);
    const toggle = () => setChecked((c) => !c);

    return (
        <DetailsLayout pattern={Pattern.Switch}>
            <Helmet>
                <meta name="description" content="Create a switch with CSS flexbox" />
                <meta name="og:description" content="Create a switch with CSS flexbox" />
                <meta name="twitter:description" content="Create a switch with CSS flexbox" />
                <meta name="keywords" content="css custom checkbox, css flexbox, css switch, css switcher" />
            </Helmet>
            <div className='p-8 pb-20'>
                <div style={{ lineHeight: 1.5, marginBottom: '16px'}}>
                    The checkbox is placed inside a label. So when clicking on the label,
                    the checkbox will be checked even though it's hidden.
                </div>
                <BrowserFrame
html={`
<label class="label">
    <input type="checkbox" class="label__input" />

    <!-- Circle -->
    <div class="label__circle"></div>
</label>
`}
css={`
.label {
    display: flex;

    /* Rounded border */
    border-radius: 9999px;

    /* Size */
    height: 32px;
    width: 64px;

    /* OFF status */
    background-color: rgba(0, 0, 0, .1);
    border: 1px solid rgba(0, 0, 0, .3);

    /* ON status */
    background-color: #357edd;
    border: 1px solid #357edd;
    /* Push the circle to the right */
    justify-content: flex-end;
}

.label__input {
    /* Hide the input */
    display: none;
}

.label__circle {
    /* Rounded border */
    border-radius: 9999px;

    /* Size */
    width: 32px;

    background-color: #FFF;

    /* OFF status */
    border: 1px solid rgba(0, 0, 0, .3);
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
                        <label
                            htmlFor="checkbox-switch"
                            style={{
                                backgroundColor: checked ? '#357EDD' : 'rgba(0, 0, 0, 0.1)',
                                border: `1px solid ${checked ? '#357EDD' : 'rgba(0, 0, 0, 0.3)'}`,
                                borderRadius: '9999px',
                                display: 'flex',
                                height: '32px',
                                justifyContent: checked ? 'flex-end' : '',
                                width: '64px',
                            }}
                        >
                            <input
                                id="checkbox-switch"
                                type="checkbox"
                                style={{ display: 'none' }}
                                checked={checked}
                                onChange={toggle}
                            />
                            <div
                                style={{
                                    backgroundColor: '#FFF',
                                    border: checked ? '' : '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '9999px',
                                    width: '32px',
                                }}
                            />
                        </label>
                    </div>
                </BrowserFrame>
            </div>
            <RelatedPatterns patterns={[Pattern.RadioSwitch]} />
        </DetailsLayout>
    );
};

export default Details;
