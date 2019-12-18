import React from 'react';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Popover arrow">
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
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '4px',
                                    height: '300px',
                                    marginBottom: '16px',
                                    position: 'relative',
                                    width: '300px',
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: '#FFF',
                                        borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                                        height: '16px',
                                        left: '32px',
                                        position: 'absolute',
                                        top: 0,
                                        transform: 'translate(50%, -50%) rotate(45deg)',
                                        width: '16px',
                                    }}
                                />
                                <div
                                    style={{
                                        backgroundColor: '#FFF',
                                        borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                                        height: '16px',
                                        left: '50%',
                                        position: 'absolute',
                                        top: 0,
                                        transform: 'translate(-50%, -50%) rotate(45deg)',
                                        width: '16px',
                                    }}
                                />
                                <div
                                    style={{
                                        backgroundColor: '#FFF',
                                        borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                                        height: '16px',
                                        position: 'absolute',
                                        right: '32px',
                                        top: 0,
                                        transform: 'translate(-50%, -50%) rotate(45deg)',
                                        width: '16px',
                                    }}
                                />

                                <div
                                    style={{
                                        backgroundColor: '#FFF',
                                        borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                                        height: '16px',
                                        position: 'absolute',
                                        right: 0,
                                        top: '32px',
                                        transform: 'translate(50%, 50%) rotate(45deg)',
                                        width: '16px',
                                    }}
                                />
                                <div
                                    style={{
                                        backgroundColor: '#FFF',
                                        borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                                        height: '16px',
                                        position: 'absolute',
                                        right: 0,
                                        top: '50%',
                                        transform: 'translate(50%, -50%) rotate(45deg)',
                                        width: '16px',
                                    }}
                                />
                                <div
                                    style={{
                                        backgroundColor: '#FFF',
                                        borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                                        bottom: '32px',
                                        height: '16px',
                                        position: 'absolute',
                                        right: 0,
                                        transform: 'translate(50%, -50%) rotate(45deg)',
                                        width: '16px',
                                    }}
                                />

                                <div
                                    style={{
                                        backgroundColor: '#FFF',
                                        borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                        bottom: '-16px',
                                        height: '16px',
                                        left: '32px',
                                        position: 'absolute',
                                        transform: 'translate(50%, -50%) rotate(45deg)',
                                        width: '16px',
                                    }}
                                />
                                <div
                                    style={{
                                        backgroundColor: '#FFF',
                                        borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                        bottom: '-16px',
                                        height: '16px',
                                        left: '50%',
                                        position: 'absolute',
                                        transform: 'translate(-50%, -50%) rotate(45deg)',
                                        width: '16px',
                                    }}
                                />
                                <div
                                    style={{
                                        backgroundColor: '#FFF',
                                        borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                        bottom: '-16px',
                                        height: '16px',
                                        position: 'absolute',
                                        right: '32px',
                                        transform: 'translate(-50%, -50%) rotate(45deg)',
                                        width: '16px',
                                    }}
                                />

                                <div
                                    style={{
                                        backgroundColor: '#FFF',
                                        borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                        height: '16px',
                                        left: 0,
                                        position: 'absolute',
                                        top: '32px',
                                        transform: 'translate(-50%, 50%) rotate(45deg)',
                                        width: '16px',
                                    }}
                                />
                                <div
                                    style={{
                                        backgroundColor: '#FFF',
                                        borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                        height: '16px',
                                        left: 0,
                                        position: 'absolute',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%) rotate(45deg)',
                                        width: '16px',
                                    }}
                                />
                                <div
                                    style={{
                                        backgroundColor: '#FFF',
                                        borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                        bottom: '32px',
                                        height: '16px',
                                        left: 0,
                                        position: 'absolute',
                                        transform: 'translate(-50%, -50%) rotate(45deg)',
                                        width: '16px',
                                    }}
                                />
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Border */
    border: 1px solid rgba(0, 0, 0, 0.3);

    /* Used to position the arrow */
    position: relative;
">
    <!-- The content -->
    ...

    <!-- Top left arrow -->
    <div style="
        /* Position at the top left corner */
        left: 32px;
        position: absolute;
        top: 0px;

        /* Border */
        background-color: #FFF;
        border-left: 1px solid rgba(0, 0, 0, 0.3);
        border-top: 1px solid rgba(0, 0, 0, 0.3);
        transform: translate(50%, -50%) rotate(45deg);

        /* Size */
        height: 16px;
        width: 16px;
    " />

    <!-- Top center arrow -->
    <div style="
        /* Position at the top center */
        left: 50%;
        position: absolute;
        top: 0px;

        /* Border */
        background-color: #FFF;
        border-left: 1px solid rgba(0, 0, 0, 0.3);
        border-top: 1px solid rgba(0, 0, 0, 0.3);
        transform: translate(-50%, -50%) rotate(45deg);

        /* Size */
        height: 16px;
        width: 16px;
    " />

    <!-- Top right arrow -->
    <div style="
        /* Position at the top right corner */
        position: absolute;
        right: 32px;
        top: 0px;

        /* Border */
        background-color: #FFF;
        border-left: 1px solid rgba(0, 0, 0, 0.3);
        border-top: 1px solid rgba(0, 0, 0, 0.3);
        transform: translate(-50%, -50%) rotate(45deg);

        /* Size */
        height: 16px;
        width: 16px;
    " />

    <!-- Right top arrow -->
    <div style="
        /* Position at the right top corner */
        position: absolute;
        right: 0;
        top: 32px;

        /* Border */
        background-color: #FFF;
        border-right: 1px solid rgba(0, 0, 0, 0.3);
        border-top: 1px solid rgba(0, 0, 0, 0.3);
        transform: translate(50%, 50%) rotate(45deg);

        /* Size */
        height: 16px;
        width: 16px;
    " />

    <!-- Right center arrow -->
    <div style="
        /* Position at the right center */
        position: absolute;
        right: 0;
        top: 50%;

        /* Border */
        background-color: #FFF;
        border-right: 1px solid rgba(0, 0, 0, 0.3);
        border-top: 1px solid rgba(0, 0, 0, 0.3);
        transform: translate(50%, -50%) rotate(45deg);

        /* Size */
        height: 16px;
        width: 16px;
    " />

    <!-- Right bottom arrow -->
    <div style="
        /* Position at the right bottom corner */
        bottom: 32px;
        position: absolute;
        right: 0;

        /* Border */
        background-color: #FFF;
        border-right: 1px solid rgba(0, 0, 0, 0.3);
        border-top: 1px solid rgba(0, 0, 0, 0.3);
        transform: translate(50%, -50%) rotate(45deg);

        /* Size */
        height: 16px;
        width: 16px;
    " />

    <!-- Bottom left arrow -->
    <div style="
        /* Position at the bottom left corner */
        bottom: -16px;
        position: absolute;
        left: 32px;

        /* Border */
        background-color: #FFF;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        border-right: 1px solid rgba(0, 0, 0, 0.3);
        transform: translate(50%, -50%) rotate(45deg);

        /* Size */
        height: 16px;
        width: 16px;
    " />

    <!-- Bottom center arrow -->
    <div style="
        /* Position at the bottom center */
        bottom: -16px;
        position: absolute;
        left: 50%;

        /* Border */
        background-color: #FFF;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        border-right: 1px solid rgba(0, 0, 0, 0.3);
        transform: translate(-50%, -50%) rotate(45deg);

        /* Size */
        height: 16px;
        width: 16px;
    " />

    <!-- Bottom right arrow -->
    <div style="
        /* Position at the bottom right corner */
        bottom: -16px;
        position: absolute;
        right: 32px;

        /* Border */
        background-color: #FFF;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        border-right: 1px solid rgba(0, 0, 0, 0.3);
        transform: translate(-50%, -50%) rotate(45deg);

        /* Size */
        height: 16px;
        width: 16px;
    " />

    <!-- Left top arrow -->
    <div style="
        /* Position at the left top corner */
        left: 0;
        position: absolute;
        top: 32px;

        /* Border */
        background-color: #FFF;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        border-left: 1px solid rgba(0, 0, 0, 0.3);
        transform: translate(-50%, 50%) rotate(45deg);

        /* Size */
        height: 16px;
        width: 16px;
    " />

    <!-- Left center arrow -->
    <div style="
        /* Position at the left center */
        left: 0;
        position: absolute;
        top: 50%;

        /* Border */
        background-color: #FFF;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        border-left: 1px solid rgba(0, 0, 0, 0.3);
        transform: translate(-50%, -50%) rotate(45deg);

        /* Size */
        height: 16px;
        width: 16px;
    " />

    <!-- Left bottom arrow -->
    <div style="
        /* Position at the left bottom corner */
        bottom: 32px;
        left: 0;
        position: absolute;

        /* Border */
        background-color: #FFF;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        border-left: 1px solid rgba(0, 0, 0, 0.3);
        transform: translate(-50%, -50%) rotate(45deg);

        /* Size */
        height: 16px;
        width: 16px;
    " />
</div>
`}
                />
            </div>

            <RelatedPatterns patterns={[Pattern.Tooltip]} />
        </DetailsLayout>
    );
};

export default Details;
