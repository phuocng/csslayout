/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import { useEffect } from 'react';

const useDocumentTitle = (title: string) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
};

export default useDocumentTitle;
