const withImages = require('next-images');

module.exports = withImages({
    distDir: "_next",
    generateBuildId: async () => {
        if (process.env.BUILD_ID) {
            return process.env.BUILD_ID;
        } else {
            return `${new Date().getTime()}`;
        }
    },
}) 