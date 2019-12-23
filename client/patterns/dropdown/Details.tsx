import React from 'react';
import { Helmet } from 'react-helmet';

import './dropdown.css';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';
import Triangle from '../../placeholders/Triangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Dropdown">
            <Helmet>
                <meta name="description" content="Create a dropdown with CSS" />
                <meta name="keywords" content="css dropdown, css menu" />
            </Helmet>
            <div style={{ padding: '64px 32px' }}>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    Move the mouse over the button to see the dropdown.
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
                            <div
                                className="p-dropdown"
                                style={{
                                    position: 'relative',
                                }}
                            >
                                <button
                                    style={{
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderRadius: '4px',
                                        display: 'flex',
                                        height: '32px',
                                        width: '128px',
                                    }}
                                >
                                    <span style={{ flex: 1, marginRight: '8px' }}><Rectangle /></span>
                                    <Triangle size={8} corner='b' />
                                </button>

                                <div
                                    className="p-dropdown-content"
                                    style={{
                                        backgroundColor: '#FFF',
                                        height: '200px',
                                        left: 0,
                                        paddingTop: '4px',
                                        position: 'absolute',
                                        top: '100%',
                                        width: '200px',
                                        zIndex: 9999,
                                    }}
                                >
                                    <div
                                        style={{
                                            alignItems: 'center',
                                            border: '1px solid rgba(0, 0, 0, 0.3)',
                                            borderRadius: '4px',
                                            display: 'flex',
                                            height: '100%',
                                            justifyContent: 'center',
                                            padding: '16px',
                                            width: '100%',
                                        }}
                                    >
                                        <Block numberOfBlocks={10} justify='center' />
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    marginTop: '16px',
                                    width: '256px',
                                }}
                            >
                            <Block numberOfBlocks={20} justify='center' />
                            </div>
                        </div>
                    )}
                    source={`
<style>
/* Hide the dropdown's content by default -->
.dropdown-content {
    display: none;
}

/* Show the content when hover on the container -->
.dropdown:hover .dropdown-content {
    display: block;
}
</style>

<div
    class="dropdown"
    style="
        position: relative;
    "
>
    <!-- The trigger element -->
    <button>...</button>

    <!-- The content -->
    <div
        class="dropdown-content"
        style="
            /* Position it right below the trigger element */
            left: 0,
            paddingTop: '4px',
            position: 'absolute',
            top: '100%',

            /* It should be on the top of other elements */
            backgroundColor: '#FFF',
            zIndex: 9999,

            /* Size */
            height: '200px',
            width: '200px',
        "
    >
        ...
    </div>
</div>
`}
                />
            </div>
            <RelatedPatterns patterns={[Pattern.Menu]} />
        </DetailsLayout>
    );
};

export default Details;
