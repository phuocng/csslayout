/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Square from '../../placeholders/Square';

interface CircularItemProps {
    degree: number;
}

const CircularItem: React.FC<CircularItemProps> = ({ degree, children }) => {
    return (
        <div
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                borderRadius: '9999px',
                color: '#FFF',
                height: '32px',
                position: 'absolute',
                top: 0,
                transform: `rotate(${degree}deg) translateX(-80px)`,
                width: '32px',
            }}
        >
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'center',
                    transform: `rotate(-${degree}deg)`,
                    width: '100%',
                }}
            >
                {children}
            </div>
        </div>
    );
};

const Details: React.FC<{}> = () => {
    const numItems = 6;

    return (
        <DetailsLayout title="Circular navigation">
            <Helmet>
                <meta name="description" content="Create a circular navigation with CSS flexbox" />
                <meta name="keywords" content="css circular navigation, css flexbox" />
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
                        >
                            <div style={{ position: 'relative' }}>
                                <div style={{ height: '32px', width: '32px' }}>
                                    <Square />
                                </div>
                                {
                                    Array(numItems).fill(0).map((_, i) => {
                                        return (
                                            <CircularItem key={i} degree={360 / numItems * i}>{i + 1}</CircularItem>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    position: relative;
">
    <!-- The trigger element that will show all circles when user clicks it -->
    ...

    <!-- A circle menu item -->
    <div style="
        /* Position */
        position: absolute;
        top: 0;
        /*
        80px is the distance from the item to the trigger element.
        Replace 0deg with 60deg, 180deg, 240deg, 300deg for another item
        in case you want to have a total of 6 menu items.
        The formulation is 360 / numberOfItems * indexOfItem
        */
        transform: rotate(0deg) translateX(-80px);

        /* Must have the same size as the trigger element */
        height: 32px;
        width: 32px;
    ">
        <!-- The inner -->
        <div style="
            /*
            Rotate it to make it displayed vertically
            Replace -0deg with -60deg, -180deg, -240deg, -300deg for another item
            in case you want to have a total of 6 menu items.
            The formulation is -(360 / numberOfItems * indexOfItem)
            */
            transform: rotate(-0deg);

            /* Center the content */
            align-items: center;
            display: flex;
            justify-content: center;

            /* Take full size */
            height: 100%;
            width: 100%;
        ">
            <!-- The content -->
            ...
        </div>
    </div>

    <!-- Repeat menu items -->
    ...
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
