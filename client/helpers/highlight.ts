import hljs from 'highlight.js/lib/highlight';
import html from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('html', html);

const highlight = (input, language) => {
    const lang = language || 'html';
    const { value } = hljs.highlight(lang, input);
    const highlighted = value.replace('&amp;', '&').trim();

    return `<code class="hljs h-100 ${lang}">${highlighted}</code>`;
};

export default highlight;
