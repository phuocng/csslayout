import React from 'react';

import './floating-label.css';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Floating label">
            <div style={{ padding: '64px 32px' }}>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    Type something in the input to see how the label is shown up.
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
                                className="floating-container"
                                style={{
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '4px',
                                    padding: '0 1px',
                                    position: 'relative',
                                    width: '200px',
                                }}
                            >
                                <input
                                    placeholder="Placeholder"
                                    type="text"
                                    style={{
                                        borderColor: 'transparent',
                                        padding: '8px',
                                        width: '100%',
                                    }}
                                />
                                <label
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
                    )}
                    source={`
<style>
.floating-container {
    position: relative;
}

.floating-container label {
    /* Position the label */
    left: 8px;
    position: absolute;
    top: 0;

    /* Hide it by default */
    opacity: 0;
    transition: 'all 200ms',
}

/* Show the label at desired position when the placeholder of input isn't shown */
.floating-container input:not(:placeholder-shown) + label {
    background: #FFF;
    transform: translate(0, -50%);
    opacity: 1;
}
</style>

<div class="floating-container">
    <!-- The input -->
    <input placeholder="Placeholder" />

    <!-- The label -->
    <label>Placeholder</label>
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
