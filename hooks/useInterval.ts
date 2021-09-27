import { useEffect } from 'react';

const useInterval = (callback: () => void, delay?: number) => {
    useEffect(() => {
        const handler = () => callback();
        if (delay !== null) {
            const id = setInterval(handler, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

export default useInterval;
