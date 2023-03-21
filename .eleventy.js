module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("robots.txt");
    // Watch CSS files for changes
    eleventyConfig.setBrowserSyncConfig({files: './_site/css/**/*.css'});
    return {
        dir: {
          input: '_src',
          output: '_site'
        }
      };
  };