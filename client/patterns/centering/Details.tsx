import React from 'react';
import { Helmet } from 'react-helmet';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Centering">
            <Helmet>
                <meta name="description" content="Center an element with CSS flexbox" />
                <meta name="keywords" content="css centering, css flexbox" />
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
                            <Circle size={64} />
                            <div style={{ marginTop: '16px', width: '40%' }}><Rectangle /></div>
                            <div style={{ marginTop: '8px', width: '30%' }}><Rectangle /></div>
                            <div style={{ marginTop: '8px', width: '20%' }}><Rectangle /></div>
                        </div>
                    )}
                    source={`
<div style="
    align-items: center;
    display: flex;
    justify-content: center;
">
    ...
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
