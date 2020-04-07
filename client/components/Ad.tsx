/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React, { useEffect, useRef } from 'react';

import './ad.css';

const Ad: React.FC<{}> = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const source = 'https://cdn.carbonads.com/carbon.js?serve=CE7I6KQL&placement=csslayoutio';

    useEffect(() => {
        const container = containerRef.current;
        if (!container) {
            return;
        }

        const script = document.createElement('script');
        script.src = source;
        script.async = true;
        script.id = '_carbonads_js';
        container.appendChild(script);

        return () => {
            container.removeChild(script);
        };
    }, []);

    return (
        <div className='flex justify-center mx-4 my-6'>
            <div ref={containerRef} />
        </div>
    );
};

export default Ad;
