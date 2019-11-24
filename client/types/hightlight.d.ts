declare module 'highlight.js/lib/highlight' {
    interface HighlightResult {
        value: string;
    }

    function highlight(lang: string, code: string): HighlightResult;
    function registerLanguage(name: string, language: any): void;
}

declare module 'highlight.js/lib/languages/xml' {
}
