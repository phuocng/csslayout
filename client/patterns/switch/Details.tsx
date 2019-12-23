import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    const [checked, setChecked] = useState(false);
    const toggle = () => setChecked((c) => !c);

    return (
        <DetailsLayout title="Switch">
            <Helmet>
                <meta name="description" content="Create a switch with CSS flexbox" />
                <meta name="keywords" content="css custom checkbox, css flexbox, css switch, css switcher" />
            </Helmet>
            <div style={{ padding: '64px 32px' }}>
                <div style={{ lineHeight: 1.5, marginBottom: '16px'}}>
                    The checkbox is placed inside a label. So when clicking on the label,
                    the checkbox will be checked even though it's hidden.
                </div>
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
                            <label
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
                    )}
                    source={`
<label style="
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
">
    <!-- Hide the input -->
    <input type="checkbox" style="display: none" />

    <!-- Circle -->
    <div style="
        /* Rounded border */
        border-radius: 9999px;

        /* Size */
        width: 32px;

        background-color: #FFF;

        /* OFF status */
        border: 1px solid rgba(0, 0, 0, .3);
    " />
</label>
`}
                />
            </div>
            <RelatedPatterns patterns={[Pattern.RadioSwitch]} />
        </DetailsLayout>
    );
};

export default Details;
