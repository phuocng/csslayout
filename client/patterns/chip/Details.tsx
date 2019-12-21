import React from 'react';
import { Link } from 'react-router-dom';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import InputChip from './InputChip';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Chip">
            <div style={{ padding: '64px 32px' }}>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    You can use a <Link to='/patterns/close-button'>close button</Link> to remove a chip.
                </div>
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
                            <InputChip>CSS</InputChip>
                        </div>
                    )}
                    source={`
<div style="
    /* Center the content */
    align-items: center;
    display: inline-flex;
    justify-content: center;

    /* Background color */
    background-color: rgba(0, 0, 0, .1);

    /* Rounded border */
    border-radius: 9999px;

    /* Spacing */
    padding: 4px 8px;
">
    <!-- Content -->
    <div style="margin-right: 4px;">
        ...
    </div>

    <!-- The close button -->
    <!-- See https://csslayout.io/patterns/close-button -->
    ...
</div>
`}
                />
            </div>

            <RelatedPatterns patterns={[Pattern.CloseButton]} />
        </DetailsLayout>
    );
};

export default Details;
