/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Curved background">
            <Helmet>
                <meta name="description" content="Create an element with curved background" />
                <meta name="keywords" content="css border radius, css curved background" />
            </Helmet>
            <div style={{ padding: '64px 32px' }}>
                <BrowserFrame
                    content={(
                        <div
                            style={{
                                height: '100%',
                                padding: '8px',
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    borderBottomLeftRadius: '50% 40%',
                                    borderBottomRightRadius: '50% 40%',
                                    height: '50%',
                                    width: '100%',
                                }}
                            />
                        </div>
                    )}
                    source={`
<div style="
    /* Background color */
    background-color: rgba(0, 0, 0, 0.3);

    /* You can use gradient background color such as
    background: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 100%); */

    /* Curved corners */
    border-bottom-left-radius: 50% 40%;
    border-bottom-right-radius: 50% 40%;
">
    ...
</div>
`}
                />
            </div>

            <RelatedPatterns patterns={[Pattern.DiagonalSection]} />
        </DetailsLayout>
    );
};

export default Details;
