// deploy.cjs
const ghpages = require('gh-pages');

ghpages.publish(
    'dist',
    {
        cname: 'kendi.ai',
    },
    function (err) {
        if (err) {
            console.error('Deploy failed:', err);
        } else {
            console.log('🚀 Deployed to GitHub Pages with custom domain!');
        }
    }
);
