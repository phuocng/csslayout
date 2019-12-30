/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Initial avatar">
            <Helmet>
                <meta name="description" content="Create an initial avatar with CSS" />
                <meta name="keywords" content="css avatar" />
            </Helmet>
            <div style={{ padding: '64px 32px' }}>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    To center the content, you also can use other technique demonstrated in
                    the <Link to='/patterns/centering'>Centering</Link> pattern.
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
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    borderRadius: '50%',
                                    color: '#FFF',
                                    display: 'inline-block',
                                    fontSize: '24px',
                                    height: '48px',
                                    position: 'relative',
                                    verticalAlign: 'middle',
                                    width: '48px',
                                }}
                            >
                                <div
                                    style={{
                                        left: '50%',
                                        position: 'absolute',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                >
                                    PN
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Center the content */
    display: inline-block;
    vertical-align: middle;

    /* Used to position the content */
    position: relative;

    /* Colors */
    background-color: rgba(0, 0, 0, .3);
    color: #FFF;

    /* Rounded border */
    border-radius: 50%;
    height: 48px;
    width: 48px;
">
    <div style="
        /* Center the content */
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
    ">
        <!-- The letters -->
        ...
    </div>
</div>
`}
                />
            </div>

            <RelatedPatterns
                patterns={[
                    Pattern.Avatar,
                    Pattern.AvatarList,
                    Pattern.Badge,
                    Pattern.Centering,
                    Pattern.PresenceIndicator,
                ]}
            />
        </DetailsLayout>
    );
};

export default Details;
