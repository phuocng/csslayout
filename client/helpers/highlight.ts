import hljs from 'highlight.js/lib/highlight'; // tslint:disable-line
import javascript from 'highlight.js/lib/languages/javascript'; // tslint:disable-line
import html from 'highlight.js/lib/languages/xml'; // tslint:disable-line

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('html', html);

const highlight = (input: string, language: string) => {
    const lang = language || 'html';
    const { value } = hljs.highlight(lang, input);
    const highlighted = value.replace('&amp;', '&').trim();

    return `<code class="${lang}">${highlighted}</code>`;
};

export default highlight;
