import React from "react";
import { withHydration } from "./utils.jsx";

// `props` is the data provided by Eleventy.
function BlogPost({ content, title, collections, ...rest }) {
  //console.log({ rest });
  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
      <button onClick={console.log}>Dont press me!</button>
    </>
  );
}

export default withHydration(BlogPost);
