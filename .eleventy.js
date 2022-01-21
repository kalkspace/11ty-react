const eleventyReact = require("eleventy-plugin-react");

module.exports = function (eleventyConfig) {
  eleventyConfig.addTransform("test-transform", function (content, outputPath) {
    console.log("in transform", { self: this, content, outputPath });
    return content;
  });
  eleventyConfig.addPlugin(eleventyReact);

  return {
    dir: {
      input: "src/",
      includes: "_layouts",
      output: "_site",
    },
  };
};
