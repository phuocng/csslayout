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
import source from './source.html';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Close button">
            <Helmet>
                <meta name="description" content="Create a close button with CSS flexbox" />
                <meta name="keywords" content="css close button, css flexbox" />
            </Helmet>
            <div className='p-8 pb-20'>
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
                            dangerouslySetInnerHTML={{__html: source}}
                        />
                    )}
                    source={source}
                />
            </div>
            <RelatedPatterns patterns={[Pattern.ArrowButtons, Pattern.Chip, Pattern.Modal, Pattern.Notification]} />
        </DetailsLayout>
    );
};

export default Details;
