import React from "react";
import "../../css/homepage.css";
import "../../css/bootstrap.css";
import "../../css/accordion.css";
import { Link } from "gatsby";
import { StandardHeader } from "../../ProductsComponents";
import { Footer } from "../../Components";
import { graphql, StaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";


export default class Join extends React.Component {

  constructor(props) {
		super(props);
    // spread operator
    const params = props.location.search.substr(1);
    // get the state from the parameters
    const state = params.split(',').map(pair => {
      const [attribute, value] = pair.split('=');
      return { [attribute]: value };
    }).reduce((prev, curr) => ({ ...curr, ...prev }), {});
    // setup the state from the query parameters
		this.state = {
      ...state,
      callback: () => { console.log('Done!!!'); },
      verifyCallback: (response) => { console.log(response); }
    };
	}


  Form = props => {
    return (
      <div className="bg-green-transparent app-form">
        <div className="maxer mx-auto">
          <div className="application px-4 p-128 mr-auto text-purple" id="form">
            <h4 className="text-green">OER Repository Login</h4>
            <p className="my-4 mb-5 text-muted maxer-700">
            Use the repository name and the token provided by the X5GON platform
            to login into your OER repository profile.
            </p>
            <form
              action="/oer_provider"
              method="GET"
            >
              <div className="py-3 mt-4 mb-2 btb-green">
                <div className="maxer-500">
                  <div className="form-group">
                    <label
                      htmlFor="oer-repository-name"
                      className="ml-1 text-muted"
                    >
                      OER Repository Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="oer-repository-name"
                      name="name"
                      aria-describedby="oer-repository-name-help"
                      placeholder="Enter repository name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="oer-repository-token"
                      className="ml-1 text-muted"
                    >
                      Repository Token
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="oer-repository-token"
                      name="providerId"
                      aria-describedby="oer-repository-token-help"
                      placeholder="Enter provider token id"
                      required
                    />
                    <small
                      id="oer-repository-token-help"
                      className="form-text text-muted"
                    >
                      The token provided by X5GON Platform upon joining the network
                    </small>
                  </div>
                </div>
              </div>
              <div className="text-muted">
                <small>
                  Not a member?{" "}
                  <Link to="/join" className="text-green">
                    Join the OER Network
                  </Link>
                </small>
              </div>

              <button type="submit" className="button-green mt-4 px-4">
                Login
              </button>

            </form>
          </div>
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
              subheader: "LOGIN",
              product: "Platform Activity",
              description:
                "Providing insight into user activities on your platform.",
              button: {
                text: "To login Form",
                link: "/oer_provider/login#form",
              },
            }}
          />
        </BackgroundSection>
        <this.Form object={this.state} />
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
