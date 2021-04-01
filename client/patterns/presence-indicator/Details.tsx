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
import Circle from '../../placeholders/Circle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.PresenceIndicator}>
            <Helmet>
                <meta name="description" content="Create a presence indicator with CSS" />
                <meta name="keywords" content="css indicator" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="container">
    <!-- Other element such as avatar -->
    ...

    <!-- The presence indicator -->
    <div class="container__indicator"></div>
</div>
`}
css={`
.container {
    position: relative;
}

.container__indicator {
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
}
`}
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
                </BrowserFrame>
            </div>

            <RelatedPatterns
                patterns={[Pattern.Avatar, Pattern.AvatarList, Pattern.DockedAtCorner, Pattern.InitialAvatar]}
            />
        </DetailsLayout>
    );
};

export default Details;
