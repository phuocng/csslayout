import React from 'react';

import Heading from '../../components/Heading';
import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    const Item: React.FC<{}> = ({ children }) => {
        return (
            <dl
                style={{
                    alignItems: 'center',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: 0,
                    padding: '8px 0',
                }}
            >
                {children}
            </dl>
        );
    };

    return (
        <DetailsLayout title="Property list">
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
                            <div style={{ width: '40%' }}>
                                <Item>
                                    <dt style={{ width: '80%' }}><Rectangle /></dt>
                                    <dd><Circle /></dd>
                                </Item>
                                <Item>
                                    <dt style={{ width: '60%' }}><Rectangle /></dt>
                                    <dd><Circle /></dd>
                                </Item>
                                <Item>
                                    <dt style={{ width: '30%' }}><Rectangle /></dt>
                                    <dd><Circle /></dd>
                                </Item>
                                <Item>
                                    <dt style={{ width: '50%' }}><Rectangle /></dt>
                                    <dd><Circle /></dd>
                                </Item>
                            </div>
                        </div>
                    )}
                    source={`
<!-- A property item -->
<dl style="
    /* Content is center horizontally */
    align-items: center;
    display: flex;

    /*
    The property name will stick to the left, and the value
    will stick to the right
    */
    justify-content: space-between;

    border-bottom: 1px solid rgba(0, 0, 0, 0.3);

    /* Spacing */
    margin: 0px;
    padding: 8px 0px;
">
    <!-- Property name -->
    <dt>...</dt>

    <!-- Property value -->
    <dd>...</dd>
</dl>
`}
                />
            </div>
            <section>
                <Heading title="Use cases" />

                <div style={{ padding: '64px', width: '500px' }}>
                    <Item>
                        <dt>Name</dt>
                        <dd>WebAssembly in Action</dd>
                    </Item>
                    <Item>
                        <dt>Author</dt>
                        <dd>Gerard Gallant</dd>
                    </Item>
                    <Item>
                        <dt>Publishing date</dt>
                        <dd>November 2019</dd>
                    </Item>
                    <Item>
                        <dt>ISBN</dt>
                        <dd>9781617295744</dd>
                    </Item>
                </div>
            </section>
            <RelatedPatterns patterns={[Pattern.DotLeader, Pattern.Menu, Pattern.SplitNavigation]} />
        </DetailsLayout>
    );
};

export default Details;
