/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

declare module 'highlight.js/lib/highlight' {
    interface HighlightResult {
        value: string;
    }

    function highlight(lang: string, code: string): HighlightResult;
    function registerLanguage(name: string, language: any): void;
}

declare module 'highlight.js/lib/languages/javascript' {}
declare module 'highlight.js/lib/languages/xml' {}
