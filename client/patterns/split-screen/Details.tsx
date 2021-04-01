/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import Pattern from '../../constants/Pattern';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.SplitScreen}>
            <Helmet>
                <meta name="description" content="Create a split screen with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css layout, css split screen" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="container">
    <!-- Left content -->
    <div class="container__half">
        ...
    </div>

    <!-- Right content -->
    <div class="container__half">
        ...
    </div>
</div>
`}
css={`
.container {
    display: flex;
}

.container__half {
    flex: 1;
}
`}
                >
                    <div style={{ display: 'flex', height: '100%' }}>
                        <div
                            style={{
                                alignItems: 'center',
                                borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                display: 'flex',
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <div style={{ marginBottom: '16px' }}><Circle size={128} /></div>
                            <div style={{ width: '60%' }}><Rectangle /></div>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <div style={{ padding: '32px' }}>
                                <div style={{ marginBottom: '32px' }}><Rectangle /></div>
                                <div style={{ marginBottom: '32px' }}><Block numberOfBlocks={15} /></div>
                                <Block numberOfBlocks={10} />
                            </div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;
