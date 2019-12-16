import React from 'react';
import { Link } from 'react-router-dom';

import Heading from '../../components/Heading';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

interface ItemProps {
    action: string;
    keys: string;
}

const Item: React.FC<ItemProps> = ({ action, keys }) => {
    return (
        <dl
            style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                margin: 0,
                padding: '4px 0',
            }}
        >
            <div>{action}</div>
            <kbd
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    borderRadius: '4px',
                    boxShadow: 'rgba(0, 0, 0, 0.3) 0px -2px 0px inset, rgba(0, 0, 0, 0.4) 0px 1px 1px',
                    color: 'rgba(0, 0, 0, 0.7)',
                    padding: '8px',
                }}
            >
                {keys}
            </kbd>
        </dl>
    );
};

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Keyboard shortcut">
            <div style={{ padding: '64px 32px' }}>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    We use the native <code>kbd</code> tag to display the keyboard shortcut.
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
                            <kbd
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    borderRadius: '4px',
                                    boxShadow: 'rgba(0, 0, 0, 0.3) 0px -2px 0px inset, rgba(0, 0, 0, 0.4) 0px 1px 1px',
                                    color: 'rgba(0, 0, 0, 0.7)',
                                    padding: '8px',
                                }}
                            >
                                ⌘ + C
                            </kbd>
                        </div>
                    )}
                    source={`
<kbd style="
    /* Background and color */
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.7);

    /* Bottom shadow */
    box-shadow: rgba(0, 0, 0, 0.3) 0px -2px 0px inset, rgba(0, 0, 0, 0.4) 0px 1px 1px;

    /* Spacing */
    padding: 8px;
">
    ...
</kbd>
`}
                />
            </div>

            <section>
                <Heading title="Use cases" />

                <div style={{ padding: '32px' }}>
                    <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                        We can use this pattern with the <Link to="/patterns/property-list">property list</Link> pattern
                        to create shortkey preferences as following:
                    </div>
                    <div style={{ width: '250px' }}>
                        <Item action="Cut" keys="⌘ + X" />
                        <Item action="Copy" keys="⌘ + C" />
                        <Item action="Paste" keys="⌘ + V" />
                    </div>
                </div>
            </section>
        </DetailsLayout>
    );
};

export default Details;
