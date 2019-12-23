import React from 'react';
import { Helmet } from 'react-helmet';

import Heading from '../../components/Heading';
import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Fixed at side">
            <Helmet>
                <meta name="description" content="Fix an element at the middle of side with CSS" />
                <meta name="keywords" content="css fixed" />
            </Helmet>
            <div style={{ padding: '64px 32px' }}>
                <BrowserFrame
                    content={(
                        <div
                            style={{
                                height: '100%',
                                position: 'relative',
                                width: '100%',
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    height: '200px',
                                    position: 'absolute',
                                    right: 0,
                                    top: '50%',
                                    transform: 'translate(0, -50%)',
                                    width: '32px',
                                }}
                            />
                        </div>
                    )}
                    source={`
<!-- Fixed at the middle of side -->
<div style="
    right: 0;
    position: fixed;
    top: 50%;
    transform: translate(0px, -50%);
">
    ...
</div>
`}
                />
            </div>

            <section>
                <Heading title="Use cases" />

                <div style={{ padding: '48px' }}>
                    <div
                        style={{
                            alignItems: 'center',
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            display: 'flex',
                            flex: 1,
                            height: '500px',
                            justifyContent: 'center',
                            marginBottom: '32px',
                            position: 'relative',
                        }}
                    >
                        <p>A Feedback button</p>
                        <div
                            style={{
                                WebkitWritingMode: 'vertical-lr',
                                alignItems: 'center',
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                display: 'flex',
                                justifyContent: 'center',
                                padding: '8px',
                                position: 'absolute',
                                right: 0,
                                top: '50%',
                                transform: 'translate(0, -50%)',
                                writingMode: 'vertical-lr',
                            }}
                        >
                            Feedback
                        </div>
                    </div>

                    <div
                        style={{
                            alignItems: 'center',
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            display: 'flex',
                            flex: 1,
                            height: '500px',
                            justifyContent: 'center',
                            marginBottom: '32px',
                            position: 'relative',
                        }}
                    >
                        <p>Navgiate between full page sections</p>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                padding: '8px',
                                position: 'absolute',
                                right: 0,
                                top: '50%',
                                transform: 'translate(0, -50%)',
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: '',
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '9999px',
                                    cursor: 'pointer',
                                    height: '12px',
                                    margin: '4px 0',
                                    width: '12px',
                                }}
                            />
                            <div
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    border: 'none',
                                    borderRadius: '9999px',
                                    cursor: 'pointer',
                                    height: '12px',
                                    margin: '4px 0',
                                    width: '12px',
                                }}
                            />
                            <div
                                style={{
                                    backgroundColor: '',
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '9999px',
                                    cursor: 'pointer',
                                    height: '12px',
                                    margin: '4px 0',
                                    width: '12px',
                                }}
                            />
                            <div
                                style={{
                                    backgroundColor: '',
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '9999px',
                                    cursor: 'pointer',
                                    height: '12px',
                                    margin: '4px 0',
                                    width: '12px',
                                }}
                            />
                        </div>
                    </div>

                    <div
                        style={{
                            alignItems: 'center',
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            display: 'flex',
                            flex: 1,
                            height: '500px',
                            justifyContent: 'center',
                            position: 'relative',
                        }}
                    >
                        <p>Social sharing toolbar</p>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                padding: '8px',
                                position: 'absolute',
                                right: 0,
                                top: '50%',
                                transform: 'translate(0, -50%)',
                            }}
                        >
                            <div style={{ margin: '4px 0' }}>
                                <svg
                                    viewBox="0 0 24 24"
                                    style={{
                                        fill: 'none',
                                        height: '24',
                                        stroke: 'rgba(0, 0, 0, 0.5)',
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round',
                                        strokeWidth: 1,
                                        width: '24',
                                    }}
                                >
                                    <path
                                        d={`M23,6.628l-2-0.5l1-2l-2.464,0.7c-1.809-1.688-4.644-1.589-6.332,0.22c-0.78,0.836-1.21,1.938-1.204,3.08v1
                                        c-3.539,0.73-6.634-1.2-9.5-4.5c-0.5,2.667,0,4.667,1.5,6l-3-0.5c0.405,2.069,1.362,3.7,4,4l-2.5,1c1,2,2.566,2.31,5,2.5
                                        c-1.893,1.353-4.174,2.054-6.5,2c12.755,5.669,20-2.664,20-10V8.3L23,6.628z`}
                                    />
                                </svg>
                            </div>
                            <div style={{ margin: '4px 0' }}>
                                <svg
                                    viewBox="0 0 24 24"
                                    style={{
                                        fill: 'none',
                                        height: '24',
                                        stroke: 'rgba(0, 0, 0, 0.5)',
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round',
                                        strokeWidth: 1,
                                        width: '24',
                                    }}
                                >
                                    <path
                                        d={`M12.5,23.5h-11c-0.552,0-1-0.448-1-1v-21c0-0.552,0.448-1,1-1h21c0.552,0,1,0.448,1,1v21c0,0.552-0.448,1-1,1
                                        h-6v-9h2.559c0.254,0.002,0.469-0.186,0.5-0.438l0.375-3c0.034-0.274-0.16-0.524-0.434-0.558c-0.022-0.003-0.044-0.004-0.066-0.004
                                        H16.5V9.185c0.001-0.931,0.755-1.684,1.686-1.685H20c0.276,0,0.5-0.224,0.5-0.5V4c0-0.276-0.224-0.5-0.5-0.5h-1.814
                                        c-3.139,0.003-5.682,2.546-5.686,5.685V10.5H10c-0.276,0-0.5,0.224-0.5,0.5v3c0,0.276,0.224,0.5,0.5,0.5h2.5V23.5z`}
                                    />
                                </svg>
                            </div>
                            <div style={{ margin: '4px 0' }}>
                                <svg
                                    viewBox="0 0 24 24"
                                    style={{
                                        fill: 'none',
                                        height: '24',
                                        stroke: 'rgba(0, 0, 0, 0.5)',
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round',
                                        strokeWidth: 1,
                                        width: '24',
                                    }}
                                >
                                    <path
                                        d={`M6.5,0.5h11c3.314,0,6,2.686,6,6v11c0,3.314-2.686,6-6,6h-11c-3.314,0-6-2.686-6-6v-11
                                        C0.5,3.186,3.186,0.5,6.5,0.5z M12,6c3.314,0,6,2.686,6,6s-2.686,6-6,6s-6-2.686-6-6S8.686,6,12,6z
                                        M19,3.5
                                        c0.828,0,1.5,0.672,1.5,1.5S19.828,6.5,19,6.5S17.5,5.828,17.5,5S18.172,3.5,19,3.5z`}
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedPatterns patterns={[Pattern.FixedAtCorner]} />
        </DetailsLayout>
    );
};

export default Details;
