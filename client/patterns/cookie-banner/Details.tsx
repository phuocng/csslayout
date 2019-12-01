import React from 'react';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Cookie banner">
            <div style={{ padding: '64px 32px' }}>
                <BrowserFrame
                    content={(
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                justifyContent: 'center',
                                position: 'relative',
                            }}
                        >
                            <div
                                style={{
                                    alignItems: 'center',
                                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                    borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                                    bottom: 0,
                                    display: 'flex',
                                    left: 0,
                                    padding: '8px',
                                    position: 'absolute',
                                    width: '100%',
                                }}
                            >
                                <div style={{ flex: 1, marginRight: '12px' }}>
                                    <Block numberOfBlocks={5} />
                                </div>
                                <div style={{ width: '96px' }}>
                                    <Rectangle height={32} />
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Banner is displayed at the bottom */
    bottom: 0;
    left: 0;
    position: fixed;
    width: 100%;

    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;
">
    <!-- Tells visitors that the website uses cookie -->
    <div style="
        /* Take available width */
        flex: 1;
    ">
        ...
    </div>

    <!-- Close button -->
    ...
</div>
`}
                />
            </div>
            <RelatedPatterns patterns={[Pattern.FixedAtCorner]} />
        </DetailsLayout>
    );
};

export default Details;
