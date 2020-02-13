import React from "react";
import "../css/bootstrap.css";
import "../css/accordion.css";
import "../css/homepage.css";
import { Link } from "gatsby";
import fetch from "isomorphic-fetch";
import { StandardHeader } from "../ProductsComponents";
import { Footer } from "../Components";
import { graphql, StaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

export default class OERProvider extends React.Component {
  constructor(props) {
    super(props);
    // setup the state from the query parameters
    // spread operator
    const params = props.location.search.substr(1);
    // get the state from the parameters
    const state = params
      .split("&")
      .map(pair => {
        const [attribute, value] = pair.split("=");
        return { [attribute]: value };
      })
      .reduce((prev, curr) => ({ ...curr, ...prev }), {});

    this.state = {
      repositoryToken: state.repositoryToken ? state.repositoryToken : "",
      error: null,
      repository: null,
      loading: true,
    };

    // TODO - maybe convert to arrow funcs? - have to check with backend
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    if (this.state.repositoryToken) {
      this.handleSubmit();
    } else {
      this.state.loading = false;
    }
  }

  handleChange(event) {
    switch (event.target.name) {
      case "token":
        this.setState({ repositoryToken: event.target.value });
        break;
      default:
        break;
    }
  }

  handleSubmit(event) {
    if (event) {
      event.preventDefault();
    }
    this.setState({ loading: true });
    // get the provider information
    fetch(`/api/v1/oer_provider?providerId=${this.state.repositoryToken}`)
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          console.log(json);

          this.setState({ repository: null, error: json.error });
        } else {
          console.log(json);

          this.setState({ repository: json, error: null });
        }
        this.setState({ loading: false });
      });
  }

  Accordion = props => {
    const object = props.props;
    const targetID = object.targetID;
    const title = object.title;
    return (
      <div className="accordion accordion-single" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <div
              className="btn w-100 text-left .h4"
              data-toggle="collapse"
              data-target={"#" + targetID}
              aria-expanded="true"
              aria-controls={"collapse" + targetID}
            >
              <h4 className="mb-0 text-green">
                {title}
                <span
                  id={targetID}
                  className="float-right collapse show plus-minus"
                ></span>
              </h4>
            </div>
          </div>

          <div
            id={targetID}
            className="collapse show"
            aria-labelledby="headingOne"
          >
            <div className="card-body pb-5">{props.children}</div>
          </div>
        </div>
      </div>
    );
  };

  Loading = props => {
    return (
      <div className="bg-white p-128 maxer mx-auto repository">
        <div className="mx-lg-1 px-4">
          <h4 className="maxer-880 text-purple">
            Loading{" "}
            <img src="/imgs/svgs/Loading.svg" alt="loading" height="65px" />
          </h4>
        </div>
      </div>
    );
  };

  Login = props => {
    const object = props.object;
    return (
      <div className="bg-green-transparent app-form">
        <div className="maxer mx-auto">
          <div className="application px-4 p-128 mr-auto text-purple" id="form">
            <h4 className="text-green">Provider Login</h4>
            <p className="my-4 mb-5 text-muted maxer-700">
              Use the token provided by the X5GON platform to login into your
              OER repository profile.
            </p>
            <form onSubmit={this.handleSubmit}>
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
                      The token provided by X5GON Platform upon joining the
                      network
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

              {object.error ? (
                <div>
                  <small className="text-red">
                    Invalid X5GON token. Please input the correct one.
                  </small>
                </div>
              ) : null}

              <button type="submit" className="button-green mt-4 px-4">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  TokenBASEapi = props => {
    const token = props.props.token;
    return (
      <div className="text-purple maxer-880 api tokenapi">
        <div id="oer-provider-token" className="resource">
          <p className="form-text">
            This is the X5GON Token generated for the your OER repository. Copy
            this token somewhere safe as it is your identification token in the
            X5GON OER Network.
          </p>
          <pre className="mb-4 code-block">
            <code className="language-handlebars">{token}</code>
          </pre>
          <p className="form-text">
            Using this token, you can can integrate the X5GON services into your
            repository. To do this, please see the{" "}
            <Link to="/products/connect" className="text-green">
              Connect Product.
            </Link>
          </p>
        </div>
      </div>
    );
  };

  Statistics = props => {
    const repository = props.props;
    return (
      <div className="text-purple maxer-880 api tokenapi">
        <div id="oer-provider-token" className="resource">
          <p className="form-text">
            This section contains the provider statistics the X5GON platform was
            able to collect.
          </p>

          <p>
            <b>Number of Materials Indexed:</b>{" "}
            {repository.material_count_clean}
          </p>
          <p>
            <b>Number of User Visits:</b> {repository.visit_count_clean}
          </p>
        </div>
      </div>
    );
  };

  Description = props => {
    // get repository information
    const repository = props.repository;
    return (
      <div className="bg-white p-128 maxer mx-auto repository">
        <div className="mx-lg-1 px-4">
          <h4 className="maxer-880 text-purple">{repository.name}</h4>

          <p>
            Domain:{" "}
            <a href={repository.domain} className="text-green">
              {repository.domain}
            </a>
          </p>
          <p className="pb-128 mb-0">
            Contact:{" "}
            <a href={`mailto:${repository.contact}`} className="text-green">
              {repository.contact}
            </a>
          </p>

          <this.Accordion
            props={{ targetID: "token", title: "Your X5GON Token" }}
          >
            <this.TokenBASEapi props={{ token: repository.token }} />
          </this.Accordion>
          <this.Accordion
            props={{ targetID: "statistics", title: "Provider Statistics" }}
          >
            <this.Statistics props={repository} />
          </this.Accordion>
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
              product: "Repository Activity",
              description:
                "Providing insight into user activities on your Repository.",
            }}
          />
        </BackgroundSection>
        {this.state.loading ? (
          <this.Loading />
        ) : this.state.repository ? (
          <this.Description repository={this.state.repository} />
        ) : (
          <this.Login object={this.state} />
        )}

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
