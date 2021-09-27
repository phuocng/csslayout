import * as React from 'react';

export const Ad: React.FC<{}> = () => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const source = 'https://cdn.carbonads.com/carbon.js?serve=CE7I6KQL&placement=csslayoutio';

    React.useEffect(() => {
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

    return <div ref={containerRef} />;
};
