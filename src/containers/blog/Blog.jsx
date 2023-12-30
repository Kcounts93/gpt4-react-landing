import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt4__blog section__padding" id="blog">
      <div className="gpt4__blog-heading">
        <h1 className="gradient__text">Latest updates</h1>
      </div>
      <div className="gpt4__blog-container">
        <div className="gpt4__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Nov 29, 2023"
            text="Sam Altman returns as CEO, OpenAI has a new initial board"
          />
        </div>
        <div className="gpt4__blog-container_groupB">
          <Article imgUrl={blog02} date="Nov 6, 2023" text="Introducing GPTs" />
          <Article
            imgUrl={blog03}
            date="Nov 6, 2023"
            text="New models and developer products announced at DevDay"
          />
          <Article
            imgUrl={blog04}
            date="Oct 19, 2023"
            text="DALL·E 3 is now available in ChatGPT Plus and Enterprise"
          />
          <Article
            imgUrl={blog05}
            date="Sep 25, 2023"
            text="ChatGPT can now see, hear, and speak"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
