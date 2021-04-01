/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

const useDocumentTitle = (title: string) => {
    React.useEffect(() => {
        document.title = title;
    }, [title]);
};

export default useDocumentTitle;
