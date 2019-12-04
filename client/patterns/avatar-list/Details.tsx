import React from 'react';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Avatar: React.FC<{}> = ({ children }) => {
    return (
        <div
            style={{
                alignItems: 'center',
                backgroundColor: '#BBB',
                borderRadius: '9999px',
                boxShadow: '0 0 0 4px #FFF',
                color: '#FFF',
                display: 'flex',
                height: '48px',
                justifyContent: 'center',
                width: '48px',
            }}
        >
            {children}
        </div>
    );
};

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Avatar list">
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
                            <div style={{ marginLeft: '-4px' }}><Avatar /></div>
                            <div style={{ marginLeft: '-4px' }}><Avatar /></div>
                            <div style={{ marginLeft: '-4px' }}><Avatar /></div>
                            <div style={{ marginLeft: '-4px' }}><Avatar /></div>
                            <div style={{ marginLeft: '-4px' }}><Avatar>+5</Avatar></div>
                        </div>
                    )}
                    source={`
<div style="
    display: flex;
">
    <!-- Avatar item -->
    <div style="
        /* Nagative margin make avatar overlap to previous one */
        margin-left: -4px;
    ">
        <div style="
            /* Add a white curve between avatars */
            box-shadow: 0 0 0 4px #FFF;

            /* Center the content */
            align-items: center;
            display: flex;
            justify-content: center;

            /* Rounded border */
            border-radius: 9999px;
        ">
            <!-- Image -->
            ...
        </div>
    </div>

    <!-- Repeat other avatars -->
    ...
</div>
`}
                />
            </div>

            <RelatedPatterns
                patterns={[Pattern.Avatar, Pattern.Centering, Pattern.InitialAvatar, Pattern.PresenceIndicator]}
            />
        </DetailsLayout>
    );
};

export default Details;
