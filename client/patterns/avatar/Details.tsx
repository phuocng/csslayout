import React from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Avatar">
            <Helmet>
                <meta name="description" content="Create an avatar component with CSS flexbox" />
                <meta name="keywords" content="css avatar, css flexbox" />
            </Helmet>
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
                                padding: '8px',
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    borderRadius: '9999px',
                                    height: '64px',
                                    padding: '8px',
                                    width: '64px',
                                }}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    style={{
                                        fill: 'none',
                                        height: '100%',
                                        stroke: "#FFF",
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round',
                                        strokeWidth: 1,
                                        width: '100%',
                                    }}
                                >
                                    <path
                                        d={`M12,3.5c2.347,0,4.25,1.903,4.25,4.25S14.347,12,12,12s-4.25-1.903-4.25-4.25S9.653,3.5,12,3.5z
                                        M5,20.5
                                        c0-3.866,3.134-7,7-7s7,3.134,7,7H5z`}
                                    />
                                </svg>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Rounded border */
    border-radius: 50%;
    height: 64px;
    width: 64px;
">
    <!-- Avatar image -->
    <img
        src="..."
        style="
            /* Rounded border */
            border-radius: 50%;

            /* Take full size */
            height: 100%;
            width: 100%;
        "
    />
</div>
`}
                />
            </div>

            <RelatedPatterns patterns={[Pattern.AvatarList, Pattern.InitialAvatar, Pattern.PresenceIndicator]} />
        </DetailsLayout>
    );
};

export default Details;
