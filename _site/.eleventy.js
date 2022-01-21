// .eleventy.js

const eleventyReact = require("eleventy-plugin-react");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyReact);
  eleventyConfig.addWatchTarget("./src/pages/");
  eleventyConfig.addCollection("blogposts", (api) => 
      api.getFilteredByGlob("posts/*.md").map((post)=>{
          post.layout = "_layouts/blogpost.jsx"
          return post
      })
  );

  return {
    dir: {
      input: "src/",
    },
  };
};