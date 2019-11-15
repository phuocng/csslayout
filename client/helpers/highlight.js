import hljs from 'highlight.js';

const highlight = (input, language) => {
    const lang = language || 'html';
    const { value } = hljs.highlight(lang, input);
    const highlighted = value.replace('&amp;', '&').trim();

    return `<code class="hljs h-100 ${lang}">${highlighted}</code>`;
};

export default highlight;
