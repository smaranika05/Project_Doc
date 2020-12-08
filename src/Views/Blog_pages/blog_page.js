import React, { Component } from "react";
import blog1 from "./../../Assets/blog1_big.webp";
import blog2 from "./../../Assets/blog2_big.webp";
import author1 from "./../../Assets/auth.png";
import Blog2 from "./Praxismarketing";
import Blog1 from "./General_Practitioner";
import "./blog_page.scss";
class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laod: false,
    };
    this.blog_content = {
      General_Practitioner: {
        name: "MARC MÜLLER",
        title:
          "Terminbuchungen online - Wir haben die 4 besten Terminbuchungssoftwares für Ärzte und Krankenhäuser analysiert, um Zeit und Geld zu sparen",
        date: "11th September 2020",
        blogimage: blog1,
        imgURL_aut: author1,
        englishBlog: <Blog1 />,
      },
      Praxismarketing: {
        name: "MARC MÜLLER",
        title:
          "Praxismarketing - Die perfekte Praxis-Website mit passendem Arzt-Logo erstellen",
        date: "4th September 2020",
        blogimage: blog2,
        imgURL_aut: author1,
        englishBlog: <Blog2 />,
      },
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({ load: true });
  }

  render() {
    if (!this.state.load) {
      return <div>Loading...</div>;
    }

    let id = this.props.match.params.blogid;
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="section blogpage_s" id="blogpage">
          <h1 className="title">{this.blog_content[id].title}</h1>
          <div className="author">
            <div className="details">
              <div className="img_wrapper">
                <img
                  src={this.blog_content[id].imgURL_aut}
                  alt={this.blog_content[id].name}
                />
              </div>
              <div className="nd">
                <div className="name">{`${this.blog_content[id].name}`}</div>
                <div className="date">{this.blog_content[id].date}</div>
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

          <div className="Blogdesc">{this.blog_content[id].englishBlog}</div>
        </div>
      </div>
    );
  }
}

export default BlogPage;
