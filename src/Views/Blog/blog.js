import React, { Component } from "react";
import blog_en from "../../Docs/Blog/blog";
import blog4 from "./../../Assets/blog1.png";
import "./blog.scss";
import { Container } from "@material-ui/core";

import author1 from "./../../Assets/auth.png";
class Blog extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        load: false,
      };
    }
  }

  render() {
    const imgUrl = {
      General_Practitioner: {
        imgURL_art: [blog4, blog4],
        imgURL_aut: author1,
      },
      Praxismarketing: {
        imgURL_art: [blog4, blog4],
        imgURL_aut: author1,
      },
    };

    const blog_articles =
      blog_en &&
      blog_en.blogitems.map((blogPost, idx) => {
        console.log("blogPost", blogPost, idx);
        let name = blogPost.author[0] + "-" + blogPost.author[1];

        return (
          <>
            <a href={`/Blog/${blogPost.bId}/`} key={blogPost.bId}>
              <div className="blog_article" key={blogPost.bId}>
                <div className="img_wrapper">
                  <picture>
                    <source
                      srcSet={imgUrl[blogPost.bId].imgURL_art[1]}
                      type="image/webp"
                    />
                    <img
                      src={imgUrl[blogPost.bId].imgURL_art[0]}
                      alt="blog image"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="content_wrapper">
                  <div className="title">
                    <h1> {blogPost.blogtitle}</h1>
                  </div>
                  <div className="desc">{blogPost.blogdesc}</div>
                  <div className="author">
                    <div className="author_img_wrapper">
                      <img
                        src={imgUrl[blogPost.bId].imgURL_aut}
                        alt={blogPost.author[0]}
                        loading="lazy"
                      />
                    </div>
                    <div className="author_nd">
                      <div className="author_name ">
                        {`${blogPost.author[0]} ${blogPost.author[1]}`}
                      </div>
                      <div className="author_date ">{blogPost.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </>
        );
      });

    return (
      <div className="section blog_s">
        {/* <Container> */}

        <div className="blog_articles">{blog_articles}</div>
        {/* </Container> */}
      </div>
    );
  }
}

export default Blog;
