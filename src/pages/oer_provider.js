import React from "react";
import "../css/homepage.css";
import "../css/bootstrap.css";
import "../css/accordion.css";
import { Link } from "gatsby";
import { StandardHeader } from "../ProductsComponents";
import { Footer } from "../Components";
import { graphql, StaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";


export default class OERProvider extends React.Component {

  constructor(props) {
		super(props);
    // spread operator
    const params = props.location.search.substr(1);

    fetch(`https://platform.x5gon.org/api/v1/oer_provider?${params}`)
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          console.log('error');
          window.location = '/oer_provider/login';
        }
        console.log('this is a json', json);
        this.state = json;
      });
	}

  Description = () => {
    return (
      <div className="bg-white p-128 maxer mx-auto">
        <div className="mx-lg-1 px-4 offers">
          <h4 className="maxer-880 text-purple">
            X5GON's Recommendation increases user engagement across each of your
            content pages, improving visibility of your content.
          </h4>
          <p>TODO: add provider information</p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <BackgroundSection>
          <StandardHeader
            object={{
              background: "bg-none",
              subheader: "OVERVIEW",
              product: "Platform Activity",
              description:
                "Providing insight into user activities on your platform.",
            }}
          />
        </BackgroundSection>
        <this.Description />
        <Footer />
      </div>
    );
  }
}

// DUPLICATED FOR GRAPHQL SECURITY REASONS!
const BackgroundSection = props => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "policy_header.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          className={""}
          fluid={imageData}
          backgroundColor={`none`}
        >
          {props.children}
        </BackgroundImage>
      );
    }}
  />
);
