import React from "react";
import "../css/homepage.css";
import "../css/bootstrap.css";
import "../css/accordion.css";
import { Link } from "gatsby";
import fetch from 'isomorphic-fetch';
import { StandardHeader } from "../ProductsComponents";
import { Footer } from "../Components";
import { graphql, StaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { isThisTypeNode } from "typescript";


export default class OERProvider extends React.Component {

  constructor(props) {
		super(props);
    // setup the state from the query parameters
    // spread operator
    const params = props.location.search.substr(1);
    // get the state from the parameters
    const state = params.split(',').map(pair => {
      const [attribute, value] = pair.split('=');
      return { [attribute]: value };
    }).reduce((prev, curr) => ({ ...curr, ...prev }), {});

		this.state = {
      repositoryToken: state.repositoryToken ? state.repositoryToken : '',
      error: null,
      repository: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    switch (event.target.name) {
      case 'token':
        this.setState({ repositoryToken: event.target.value });
        break;
      default:
        console.log('Not know target name');
        break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    // get the provider information
    console.log(this.state);
    fetch(`http://127.0.0.1:8081/api/v1/oer_provider?providerId=${this.state.repositoryToken}`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        if (json.error) {
          return this.setState({ error: json.error });
        }
        console.log(json);
        return this.setState({ repository: json, error: null });
      });
  }

  Login = props => {
    const object = props.object;
    return (
      <div className="bg-green-transparent app-form">
        <div className="maxer mx-auto">
          <div className="application px-4 p-128 mr-auto text-purple" id="form">
            <h4 className="text-green">Provider Login</h4>
            <p className="my-4 mb-5 text-muted maxer-700">
            Use the token provided by the X5GON platform
            to login into your OER repository profile.
            </p>
            <form
              onSubmit={this.handleSubmit}
            >
              <div className="py-3 mt-4 mb-2 btb-green">
                <div className="maxer-500">

                  <div className="form-group">
                    <label
                      htmlFor="oer-repository-token"
                      className="ml-1 text-muted"
                    >
                      X5GON Token
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="oer-repository-token"
                      name="token"
                      aria-describedby="oer-repository-token-help"
                      placeholder="Enter the provider token"
                      value={object.repositoryToken}
                      onChange={this.handleChange}
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

              {object.error ?
                <div>
                  <small className="text-red">
                    Invalid X5GON token. Please input the correct one.
                  </small>
                </div> :
                null
              }

              <button type="submit" className="button-green mt-4 px-4">
                Login
              </button>

            </form>
          </div>
        </div>
      </div>
    );
  };


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
        {this.state.repository ?
          <this.Description object={this.state.repository} /> :
          <this.Login object={this.state} />
        }

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
