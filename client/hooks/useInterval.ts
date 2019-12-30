/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import { useEffect } from 'react';

const useInterval = (callback: () => void, delay?: number) => {
    useEffect(
        () => {
            const handler = () => callback();
            if (delay !== null) {
                const id = setInterval(handler, delay);
                return () => clearInterval(id);
            }
        },
        [delay],
    );
};

export default useInterval;
