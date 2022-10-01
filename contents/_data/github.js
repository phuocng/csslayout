const EleventyFetch = require("@11ty/eleventy-fetch")

async function fetchGitHubStars(repos) {
    let json = await EleventyFetch(`https://api.github.com/repos/${repos}`, {
        duration: '1d',
        type: 'json'
    });

    return {
        stargazers: json.stargazers_count,
    };
}

module.exports = async function() {
    return {
        'oneloc': await fetchGitHubStars('phuocng/1loc'),
        'crossbrowser': await fetchGitHubStars('phuocng/cross-browser'),
        'cssanimation': await fetchGitHubStars('phuocng/css-animation'),
        'csslayout': await fetchGitHubStars('phuocng/csslayout'),
        'frontendtips': await fetchGitHubStars('phuocng/frontend-tips'),
        'htmldom': await fetchGitHubStars('phuocng/html-dom'),
        'thisvsthat': await fetchGitHubStars('phuocng/this-vs-that'),
        'reactpdfviewer': await fetchGitHubStars('react-pdf-viewer/react-pdf-viewer'),
    };
};
