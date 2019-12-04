import React from 'react';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Presence indicator">
            <div style={{ padding: '64px 32px' }}>
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
                            <div
                                style={{
                                    height: '64px',
                                    marginRight: '16px',
                                    position: 'relative',
                                    width: '64px',
                                }}
                            >
                                <Circle size={64} />
                                <div
                                    style={{
                                        backgroundColor: '#FF4136',
                                        borderRadius: '9999px',
                                        bottom: 0,
                                        height: '16px',
                                        position: 'absolute',
                                        right: 0,
                                        transform: 'translate(50%, 50%)',
                                        width: '16px',
                                    }}
                                />
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    position: relative;
">
    <!-- Other element such as avatar -->
    ...

    <!-- The presense indicator -->
    <div style="
        /* Shown at the bottom right corner */
        bottom: 0,
        position: absolute;
        right: 0;
        transform: translate(50%, 50%);

        /* Rounded border */
        border-radius: 9999px;
        height: 16px;
        width: 16px;

        /* Background color */
        background-color: #FF4136;
    " />
</div>
`}
                />
            </div>
            <RelatedPatterns patterns={[Pattern.AvatarList, Pattern.DockedAtCorner, Pattern.InitialAvatar]} />
        </DetailsLayout>
    );
};

export default Details;
