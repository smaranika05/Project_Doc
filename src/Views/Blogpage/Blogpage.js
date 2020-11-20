import React, { Component } from "react";
import { Container } from "@material-ui/core";
import Blog1 from "./blog1";
import blog4 from "./../../Assets/blog1.png";
import author1 from "./../../Assets/auth.png";
import "./blogpage.scss";
class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laod: false,
    };
    this.blog_content = {
    blog1: {
        name: "MARC MÜLLER",
        title: "Blog1",
        date: "11th September 2020",
        blogimage: blog4,
       
        imgURL_aut: author1,
        englishBlog: <Blog1 />,
        
      },
    
   
    };
  }
  

  render() {
    if (!this.state.load) {
      return <div>Loading...</div>;
    }

    let id = this.props.match.params.blogid;
    return (
      <div className="section blogpage_s" id="blogpage">
        <Container>
          <h2 className="title">{this.blog_content[id].title}</h2>

          <div className="author">
            <div className="details">
              <div className="img_wrapper">
                <img
                  src={this.blog_content[id].imgURL_aut}
                  alt={this.blog_content[id].name}
                />
              </div>
              <div className="nd">
                <div className="name desc">
                  {`${this.blog_content[id].name}`}
                </div>
                <div className="date desc">{this.blog_content[id].date}</div>
              </div>
            </div>
           
          </div>

          <div className="divider" />
          <div className="blgimg">
            <img
              src={this.blog_content[id].blogimage}
              alt={this.blog_content[id].name}
            />
          </div>

          <div className="Blogdesc">
            {
              this.blog_content[id].englishBlog
              }
          </div>

          <div className="wrapper">
            <a href="/#CONTACT" class="button">
              GET IN TOUCH
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

export default(BlogPage);