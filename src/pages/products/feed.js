import React from "react";
import "../../css/bootstrap.css";
import "../../css/feed.css";
import "../../css/homepage.css";
import "../../css/animate.css";
import "../../css/accordion.css";
import { StandardHeader } from "../../ProductsComponents";
import { MoreProducts, Footer } from "../../Components";
import { Link } from "gatsby";
import SmoothScroll from "smooth-scroll";

class Feed extends React.Component {
  Feed = () => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line
      const scroll = new SmoothScroll('a[href*="#"]', {
        header: "#navbar",
        speed: 1000,
        speedAsDuration: true,
        easing: "easeInOutQuad",
        clip: true,
        updateURL: true,
      });
    }
    return (
      <main role="main" id="api">
        <div className="feed text-purple">
          <div className="row">
            <div className="col">
              <div className="doc-navigation">
                <h4>API navigation</h4>
                <ul>
                  <li>
                    <Link className="doc" to="products/feed#connect-service">
                      Connect Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="doc"
                      to="/products/feed#connect-recommender"
                    >
                      Connect Recommender
                    </Link>
                  </li>
                  <li>
                    <Link className="doc" to="/products/feed#version-2">
                      REST API
                    </Link>
                    <ul>
                      <li>
                        <Link className="doc" to="/products/feed#version-2">
                          Version 2
                        </Link>
                        <ul>
                          <li>
                            <Link
                              className="doc"
                              to="/products/feed#version-2-recommender-rest-api"
                            >
                              Recommender REST API
                            </Link>
                            <ul>
                              <li>
                                <Link
                                  className="doc route"
                                  to="/products/feed#version-2-search-materials"
                                >
                                  GET search for relevant materials
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link className="doc" to="/products/feed#version-1">
                          Version 1
                        </Link>
                        <ul>
                          <li>
                            <Link
                              className="doc"
                              to="/products/feed#version-1-recommender-rest-api"
                            >
                              Recommender REST API
                            </Link>
                            <ul>
                              <li>
                                <Link
                                  className="doc route"
                                  to="/products/feed#version-1-search-materials"
                                >
                                  GET search for relevant materials
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="doc route"
                                  to="/products/feed#version-1-recommend-materials"
                                >
                                  GET recommended materials
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="doc route"
                                  to="/products/feed#version-1-recommend-bundles"
                                >
                                  GET recommended bundles (web pages)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="doc route"
                                  to="/products/feed#version-1-collaborative"
                                >
                                  GET personalized recommended bundles (web
                                  pages)
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link
                              className="doc"
                              to="/products/feed#version-1-query-rest-api"
                            >
                              Query REST API
                            </Link>
                            <ul>
                              <li>
                                <Link
                                  className="doc route"
                                  to="/products/feed#version-1-get-materials"
                                >
                                  GET list of materials
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="doc route"
                                  to="/products/feed#version-1-post-materials"
                                >
                                  POST list of materials
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="doc route"
                                  to="/products/feed#get-info-about-oer"
                                >
                                  GET specific material
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="doc route"
                                  to="/products/feed#version-1-get-contents"
                                >
                                  GET list of material contents
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="doc route"
                                  to="/products/feed#version-1-get-content"
                                >
                                  GET specific material content
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="doc route"
                                  to="/products/feed#version-1-get-content-value"
                                >
                                  GET the body value of a specific material
                                  content
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container api ml-0 pl-0 text-purple pt-5 mt-5 pb-128">
          <div className="row">
            <div className="col">
              <this.Accordion
                props={{ targetID: "connect1", title: "Connect Service" }}
              >
                <div className="anchor" id="connect-service" />
                <p className="information">
                  The library that enables connection between the OER repository
                  and the X5GON platform. The full documentation of the library
                  is available{" "}
                  <a href="/files/x5gon-docs.pdf" target="blank">
                    HERE
                  </a>
                  .
                </p>
                <div className="doc url_baseline p-4 mb-3">
                  <p className="information">
                    <b className="doc">
                      https://platform.x5gon.org/api/v1/snippet/{"{"}version
                      {"}"}
                      /x5gon-log.min.js
                    </b>
                  </p>
                </div>
                <h6 className="mt-2">Library URL parameters</h6>
                <div className="table-responsive">
                  <table className="table table-dashed-borders">
                    <thead>
                      <tr>
                        <th className="doc doc__query name" />
                        <th className="doc doc__query type" />
                        <th className="doc doc__query title" />
                        <th className="doc doc__query optional" />
                        <th className="doc doc__query description" />
                      </tr>
                    </thead>
                    <tbody>
                      <this.QueryTableRow
                        name={"version"}
                        type={"String"}
                        title={"Library Version"}
                        optional={"false"}
                        desc={
                          `The version of the library. The options are: v1, v2,
                          and latest. If latest, it will automatically take the
                          latest version available.`
                        }></this.QueryTableRow>
                    </tbody>
                  </table>
                </div>
                <p className="information">
                  To include the library add the following line in the
                  repository site header. Replace the{" "}
                  <b className="doc">latest</b> parameter with the appropriate
                  library URL parameter value.
                </p>
                <div className="doc url_baseline p-4 mb-3">
                  <p className="information">
                    &lt;script
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp; type="text/javascript"
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp;
                    src="https://platform.x5gon.org/api/v1/snippet/
                    <b className="doc">latest</b>/x5gon-log.min.js"
                    <br /> &gt;&lt;/script&gt;
                  </p>
                </div>
              </this.Accordion>

              <this.Accordion
                props={{ targetID: "connectrec", title: "Connect Recommender" }}
              >
                <div className="anchor" id="connect-recommender" />
                <p className="information">
                  Enables embedding of recommendations into HTML. The request
                  URL is different, as shown below.
                </p>
                <div className="doc url_baseline p-4 mb-3">
                  <p className="information">
                    <b className="doc">
                      https://platform.x5gon.org/embed/recommendations?text=text&amp;url=url&amp;width=width&amp;height=height
                    </b>
                  </p>
                </div>
                <h6 className="mt-2">Query string parameters</h6>
                <div className="table-responsive">
                  <table className="table table-dashed-borders">
                    <thead>
                      <tr>
                        <th className="doc doc__query name" />
                        <th className="doc doc__query type" />
                        <th className="doc doc__query title" />
                        <th className="doc doc__query optional" />
                        <th className="doc doc__query description" />
                      </tr>
                    </thead>
                    <tbody>
                      <this.QueryTableRow
                        name={"text"}
                        type={"String"}
                        title={"Query Text"}
                        optional={"true"}
                        desc={
                          `The query text. Longer text provides better results.
                          If both text and url query parameters are present,
                          <b className="doc">url</b> has the priority.`
                        }
                      ></this.QueryTableRow>

                      <this.QueryTableRow
                        name={"url"}
                        type={"String"}
                        title={"Query URL"}
                        optional={"true"}
                        desc={
                          `The query URL. The URL must be associated with a
                          material stored in the X5GON database. If no such URL
                          is found, it uses the <b className="doc">text</b>{" "}
                          query parameter, if present.`
                        }
                      ></this.QueryTableRow>

                      <this.QueryTableRow
                        name={"width"}
                        type={"String"}
                        title={"Container Width"}
                        optional={"true"}
                        desc={
                          `The embedded containers width. Used to setup the
                          container into HTML.
                          <br />
                          <b className="doc">Default value</b> is <b>280px</b>.`
                        }
                      ></this.QueryTableRow>

                      <this.QueryTableRow
                        name={"height"}
                        type={"String"}
                        title={"Container Height"}
                        optional={"true"}
                        desc={
                          `The embedded containers maximum height. Used to setup
                          the container into HTML.
                          <br />
                          <b className="doc">Default value</b> is <b>400px</b>.`
                        }
                      ></this.QueryTableRow>
                    </tbody>
                  </table>
                </div>
                <h6 className="doc doc__subsection mt-2 pb-3">
                  Embedding example
                </h6>
                <p className="information">
                  The recommendation results can be embedded by using different
                  tags. The example shows how to embed the recommendation
                  results using the <code>iframe</code> tag. We only use the{" "}
                  <b className="doc">text</b> query parameter for the
                  recommendations, and both <b className="doc">width</b> and{" "}
                  <b className="doc">height</b> parameters to assign the size of
                  the embedded page.
                  <br />
                  <b className="doc">NOTE:</b> the difference between the{" "}
                  <b className="doc">height</b> query parameter and the iframes{" "}
                  <b className="doc">height</b> style, which is 25px. This is
                  due to the iframes default configuration.
                </p>
                <div className="doc url_baseline p-4 mb-3">
                  <p className="information">
                    &lt;iframe
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp;
                    src="https://platform.x5gon.org/embed/recommendations?
                    <b className="doc">text</b>=machine%20learning&amp;
                    <b className="doc">width</b>=100%25&amp;
                    <b className="doc">height</b>=400px"
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp;
                    style="border:0px;width:100%;height:425px"
                    <br /> &gt;&lt;/iframe&gt;
                  </p>
                </div>
                <p className="information">
                  The representation of the embedded recommendations.
                </p>
                <iframe
                  className="d-block mx-auto"
                  src="https://platform.x5gon.org/embed/recommendations?text=machine%20learning&width=100%25&height=400px"
                  style={{ border: "0px", width: "100%", height: "425px" }}
                  title="iframe"
                />
              </this.Accordion>

              <this.Accordion
                props={{
                  targetID: "restapiversion2",
                  title: "REST API, Version 2",
                }}
              >
                <div id="version-2" className="anchor" />
                <p className="information">
                  All URLs referenced in the REST API Version 2 section have the
                  following base:
                </p>
                <div className="doc url_baseline p-4 mb-3">
                  <p className="information">
                    <b className="doc">https://platform.x5gon.org/api/v2</b>
                  </p>
                </div>
                <p className="information">
                  The X5GON Platform REST API is served over HTTPS.
                </p>

                <div className="anchor" id="version-2-recommender-rest-api" />
                <h5 className="doc doc__section mt-5">Recommender REST API</h5>
                <p className="information">
                  The Recommender REST API allows the user to retrieve OER
                  materials that are similar to the given query.
                </p>
                <h6 className="mt-2">Available methods</h6>
                <div className="table-responsive">
                  <table className="table table-borderless table-hover">
                    <thead>
                      <tr>
                        <th className="doc doc__method request" />
                        <th className="doc doc__method route" />
                        <th className="doc doc__method description" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        className="clickable-row"
                        data-href="#version-2-search-materials"
                      >
                        <td>
                          <b className="doc">GET</b>
                        </td>
                        <td>/search</td>
                        <td>
                          Get a list of relevant open educational resources
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="anchor" id="version-2-search-materials" />
                <h6 className="doc doc__subsection mt-5 mb-3">
                  Search for relevant materials
                </h6>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th className="doc doc__method request" />
                        <th className="doc doc__method route" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b className="doc">GET</b>
                        </td>
                        <td>
                          <b>/search</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="information">
                  Get a list of relevant open educational resources.
                </p>
                <h6 className="mt-2">Query string parameters</h6>
                <div className="table-responsive">
                  <table className="table table-dashed-borders">
                    <thead>
                      <tr>
                        <th className="doc doc__query name" />
                        <th className="doc doc__query type" />
                        <th className="doc doc__query title" />
                        <th className="doc doc__query optional" />
                        <th className="doc doc__query description" />
                      </tr>
                    </thead>
                    <tbody>
                      <this.QueryTableRow
                        name={"text"}
                        type={"String"}
                        title={"Query Text"}
                        optional={"false"}
                        desc={
                          `The seed text from which the system finds the relevant
                          open educational resources.`
                        }
                      ></this.QueryTableRow>

                      <this.QueryTableRow
                        name={"types"}
                        type={"String"}
                        title={"Material Types"}
                        optional={"true"}
                        desc={
                          `The type of open educational resources. There are two
                          approaches of setting this value: <br />
                          (1) set the type group. Options: all, video, audio,
                          text, and image. <b>Note:</b> When all, it will retrieve
                          only video, audio and text materials. When the type is image,
                          we use the <a href="https://api.creativecommons.engineering/v1/">
                          Creative Commons Search API</a> to retrieve the images.
                          <br />
                          (2) provide a string of file extensions separated by a
                          comma (example: <code>pdf,doc,docx,mp4</code>).
                          <br />
                          <b className="doc">Default value</b> is <b>all</b>.`
                        }
                      ></this.QueryTableRow>

                      <this.QueryTableRow
                        name={"licenses"}
                        type={"String"}
                        title={"Material Licenses"}
                        optional={"true"}
                        desc={
                          `Filters the open educational resources based on the
                          provided licenses. One can provide multiple Licenses
                          separated by a comma (example: <code>by,by-nd</code>
                          ). If parameter is <code>cc</code> returns materials
                          that have the license present. If Null, no filtering
                          is performed. Options: cc, by, by-nc, by-sa, by-nd,
                          by-nc-nd, by-nc-sa. <br />
                          <b className="doc">Default value</b> is <b>Null</b>.`
                        }
                      ></this.QueryTableRow>

                      <this.QueryTableRow
                        name={"languages"}
                        type={"String"}
                        title={"Material Languages"}
                        optional={"true"}
                        desc={
                          `The language of the open educational resources. This
                          parameter is a string of ISO 639-1 code languages
                          separated by a comma (example: <code>sl,es,de</code>
                          ). If Null, no filtering is performed.
                          <br />
                          <b className="doc">Default value</b> is <b>Null</b>.`
                        }
                      ></this.QueryTableRow>

                      <this.QueryTableRow
                        name={"content_languages"}
                        type={"String"}
                        title={"Material Content Languages"}
                        optional={"true"}
                        desc={
                          `The content languages of the open educational
                          resources. This parameter filters out resources that
                          have content (i.e. transcriptions, translations)
                          available in the provided content languages. It is a
                          string of ISO 639-1 code languages separated by a
                          comma (example: <code>sl,es,de</code>). If Null, no
                          filtering by content languages is performed.
                          <br />
                          <b className="doc">Default value</b> is <b>Null</b>.`
                        }
                      ></this.QueryTableRow>

                      <this.QueryTableRow
                        name={"content_extension"}
                        type={"String"}
                        title={"Material Content Extension"}
                        optional={"true"}
                        desc={
                          `The content extension of the open educational resources.
                          If this parameter is present, it will retrieve only
                          resources which contain the contents with the user
                          specified extensions. In addition, the contents of that type
                          will be in the result object under the <code>contents</code>
                          attribute.
                          Possible options: dfxp, webvtt, plain.
                          <br />
                          <b className="doc">Default value</b> is <b>Null</b>.`
                        }
                      ></this.QueryTableRow>

                      <this.QueryTableRow
                        name={"provider_ids"}
                        type={"String"}
                        title={"Material Provider IDs"}
                        optional={"true"}
                        desc={
                          `The list of material provider IDs. This parameter
                          filters out resources that are associated with the OER
                          providers associated. (example: <code>1,10</code>). If
                          Null, no filtering by providers is done.
                          <br />
                          <b className="doc">Default value</b> is <b>Null</b>.`
                        }
                      ></this.QueryTableRow>

                      <this.QueryTableRow
                        name={"wikipedia"}
                        type={"Boolean"}
                        title={"Material Wikipedia"}
                        optional={"true"}
                        desc={
                          `If True, provides the list of Wikipedia concepts
                          associated with the resource.
                          <br />
                          <b className="doc">Default value</b> is <b>False</b>.`
                        }
                      ></this.QueryTableRow>

                      <this.QueryTableRow
                        name={"wikipedia_limit"}
                        type={"Integer"}
                        title={"Wikipedia List Length"}
                        optional={"true"}
                        desc={
                          `The number of top Wikipedia concepts returned if the
                          <code>wikipedia</code> parameter is present. If Null,
                          returns all Wikipedia concepts.
                          <br />
                          <b className="doc">Default value</b> is <b>Null</b>.`
                        }
                      ></this.QueryTableRow>

                      <this.QueryTableRow
                        name={"sort_by"}
                        type={"String"}
                        title={"Sort By Field"}
                        optional={"true"}
                        desc={
                          `Sorts by the provided material field in descending order.
                          Possible options are: <code>creation_date</code> and
                          <code>retrieved_date</code>.
                          <br />
                          <b className="doc">Default value</b> is <b>Null</b>.`
                        }
                      ></this.QueryTableRow>

                      <this.QueryTableRow
                        name={"limit"}
                        type={"Integer"}
                        title={"Page Limit"}
                        optional={"true"}
                        desc={
                          `The number of open eduational resources to return. If
                          the value is zero or bellow, it automatically returns
                          the default number of resources. If value is greater
                          than 100 returns 100 resources.
                          <br />
                          <b className="doc">Default value</b> is <b>20</b>.`
                        }
                      ></this.QueryTableRow>

                      <this.QueryTableRow
                        name={"page"}
                        type={"Integer"}
                        title={"Page"}
                        optional={"true"}
                        desc={
                          `The page number of the recommended list.
                          <br />
                          <b className="doc">Default value</b> is <b>1</b>.`
                        }
                      ></this.QueryTableRow>

                    </tbody>
                  </table>
                </div>
                <h6 className="mt-2">Response body attributes</h6>
                <div className="table-responsive">
                  <table className="table table-dashed-borders">
                    <thead>
                      <tr>
                        <th className="doc doc__query name" />
                        <th className="doc doc__query type" />
                        <th className="doc doc__query title" />
                        <th className="doc doc__query optional" />
                        <th className="doc doc__query description" />
                      </tr>
                    </thead>
                    <tbody>

                      <this.ResultTableRow
                        name={"query"}
                        type={"JSON"}
                        title={"Query Parameters"}
                        desc={
                          `A JSON object containing the provided query
                          parameters.`
                        }
                      ></this.ResultTableRow>

                      <this.ResultTableRow
                        name={"rec_materials"}
                        type={"Array"}
                        title={"Recommended Materials"}
                        desc={
                          `An array of objects, each representing an recommended
                          open educational resource.`
                        }
                      ></this.ResultTableRow>

                      <tr className="no-top-border">
                        <td colSpan={5}>
                          <b className="doc">rec_materials object properties</b>
                          <table className="table table-dashed-borders table--second-level">
                            <thead>
                              <tr>
                                <th className="doc doc__query name" />
                                <th className="doc doc__query type" />
                                <th className="doc doc__query title" />
                                <th className="doc doc__query optional" />
                                <th className="doc doc__query description" />
                              </tr>
                            </thead>
                            <tbody>

                              <this.ResultTableRow
                                name={"weight"}
                                type={"Float"}
                                title={"Recommendation Weight"}
                                desc={
                                  `The number representing the relevance of the
                                  OER material. Greater weight means bigger
                                  relevance.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"material_id"}
                                type={"Integer"}
                                title={"Material ID"}
                                desc={
                                  `The unique ID of the OER material.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"title"}
                                type={"String"}
                                title={"Material Title"}
                                desc={
                                  `The title of the OER material.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"description"}
                                type={"String"}
                                title={"Material Description"}
                                desc={
                                  `The description of the OER material.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"creation_date"}
                                type={"Date"}
                                title={"Material Creation Date"}
                                desc={
                                  `The creation date of the OER material.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"retrieved_date"}
                                type={"Date"}
                                title={"Material Retrieved Date"}
                                desc={
                                  `The date when the OER material was indexed by
                                  the platform.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"type"}
                                type={"String"}
                                title={"Material Type"}
                                desc={
                                  `The type of the OER material.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"mimetype"}
                                type={"String"}
                                title={"Material Mimetype"}
                                desc={
                                  `The mimetype of the OER material.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"url"}
                                type={"String"}
                                title={"Material URL"}
                                desc={
                                  `The URL of the OER material.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"website"}
                                type={"String"}
                                title={"Material Container URL"}
                                desc={
                                  `The URL where the OER material is contained on
                                  the provider's website.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"language"}
                                type={"String"}
                                title={"Material Language"}
                                desc={
                                  `The language of the OER material in ISO 639-1
                                  code.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"language_full"}
                                type={"String"}
                                title={"Material Full Language"}
                                desc={
                                  `The full language name of the OER material.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"license"}
                                type={"JSON"}
                                title={"Material License"}
                                desc={
                                  `The JSON object containing the material's
                                  short_name, typed_name, disclaimer and license
                                  URL.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"provider"}
                                type={"JSON"}
                                title={"Material Provider"}
                                desc={
                                  `The JSON object containing the provider's id,
                                  name and domain values.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"content_ids"}
                                type={"Array"}
                                title={"Material Content IDs"}
                                desc={
                                  `The array of material's content IDs.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"contents"}
                                type={"Array"}
                                title={"Material Contents"}
                                desc={
                                  `The array of material's contents. Only present if the
                                  <code>content_extension</code> query parameter is specified.`
                                }
                              ></this.ResultTableRow>

                              <tr className="no-top-border">
                                <td colSpan={5}>
                                  <b className="doc">
                                    contents object properties
                                  </b>
                                  <table className="table table-dashed-borders table--third-level">
                                    <thead>
                                      <tr>
                                        <th className="doc doc__query name" />
                                        <th className="doc doc__query type" />
                                        <th className="doc doc__query title" />
                                        <th className="doc doc__query optional" />
                                        <th className="doc doc__query description" />
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <this.ResultTableRow
                                        name={"extension"}
                                        type={"String"}
                                        title={"Content Extension"}
                                        desc={
                                          `The OER material content extension.`
                                        }
                                      ></this.ResultTableRow>

                                      <this.ResultTableRow
                                        name={"language"}
                                        type={"String"}
                                        title={"Content Language"}
                                        desc={
                                          `The content language in ISO 639-1 code.`
                                        }
                                      ></this.ResultTableRow>

                                      <this.ResultTableRow
                                        name={"type"}
                                        type={"String"}
                                        title={"Content Type"}
                                        desc={
                                          `The content type (i.e. transcription, translation, etc).`
                                        }
                                      ></this.ResultTableRow>

                                      <this.ResultTableRow
                                        name={"value"}
                                        type={"String"}
                                        title={"Content Value"}
                                        desc={
                                          `The actual value of the content.`
                                        }
                                      ></this.ResultTableRow>

                                    </tbody>
                                  </table>
                                </td>
                              </tr>

                              <this.ResultTableRow
                                name={"wikipedia"}
                                type={"Array"}
                                title={"Material Wikipedia Concepts"}
                                desc={
                                  `An array of objects, each representing the
                                  most relevant wikipedia concept of the
                                  material. Only present if the <code>wikipedia</code>
                                  query parameter is set to True.`
                                }
                              ></this.ResultTableRow>

                            </tbody>
                          </table>
                        </td>
                      </tr>

                      <this.ResultTableRow
                        name={"metadata"}
                        type={"JSON"}
                        title={"Result Metadata"}
                        desc={
                          `A JSON object containing the associated metadata.
                          Helpful for navigating through the recommendations.`
                        }
                      ></this.ResultTableRow>

                      <tr className="no-top-border">
                        <td colSpan={5}>
                          <b className="doc">metadata object properties</b>
                          <table className="table table-dashed-borders table--second-level">
                            <thead>
                              <tr>
                                <th className="doc doc__query name" />
                                <th className="doc doc__query type" />
                                <th className="doc doc__query title" />
                                <th className="doc doc__query optional" />
                                <th className="doc doc__query description" />
                              </tr>
                            </thead>
                            <tbody>
                              <this.ResultTableRow
                                name={"total_hits"}
                                type={"Integer"}
                                title={"Number of Found Materials"}
                                desc={
                                  `Number of most relevant material.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"total_pages"}
                                type={"Integer"}
                                title={"Total Pages"}
                                desc={
                                  `The total number of result pages.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"prev_page"}
                                type={"String"}
                                title={"Previous Page"}
                                desc={
                                  `The URL to the previous result page.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"next_page"}
                                type={"String"}
                                title={"Next Page"}
                                desc={
                                  `The URL to the next result page.`
                                }
                              ></this.ResultTableRow>

                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </this.Accordion>


              <this.Accordion
                props={{
                  targetID: "restapiversion1",
                  title: "REST API, Version 1",
                }}
              >
                <div id="version-1" className="anchor" />
                <p className="information">
                  All URLs referenced in the REST API Version 1 section have the
                  following base:
                </p>
                <div className="doc url_baseline p-4 mb-3">
                  <p className="information">
                    <b className="doc">https://platform.x5gon.org/api/v1</b>
                  </p>
                </div>
                <p className="information">
                  The X5GON Platform REST API is served over HTTPS.
                </p>
                <div className="anchor" id="version-1-recommender-rest-api" />
                <h5 className="doc doc__section mt-5">Recommender REST API</h5>
                <p className="information">
                  The Recommender REST API allows the user to retrieve OER
                  materials that are similar to the given query.
                </p>
                <h6 className="mt-2">Available methods</h6>
                <div className="table-responsive">
                  <table className="table table-borderless table-hover">
                    <thead>
                      <tr>
                        <th className="doc doc__method request" />
                        <th className="doc doc__method route" />
                        <th className="doc doc__method description" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        className="clickable-row"
                        data-href="#version-1-search-materials"
                      >
                        <td>
                          <b className="doc">GET</b>
                        </td>
                        <td>/search</td>
                        <td>
                          Get a list of relevant open educational resources
                        </td>
                      </tr>
                      <tr
                        className="clickable-row"
                        data-href="#version-1-recommend-materials"
                      >
                        <td>
                          <b className="doc">GET</b>
                        </td>
                        <td>/recommend/oer_materials</td>
                        <td>
                          Get a list of relevant open educational resources
                        </td>
                      </tr>
                      <tr
                        className="clickable-row"
                        data-href="#version-1-recommend-bundles"
                      >
                        <td>
                          <b className="doc">GET</b>
                        </td>
                        <td>/recommend/oer_bundles</td>
                        <td>
                          Get a list of most relevant open educational bundles
                        </td>
                      </tr>
                      <tr
                        className="clickable-row"
                        data-href="#version-1-collaborative"
                      >
                        <td>
                          <b className="doc">GET</b>
                        </td>
                        <td>/recommend/collaborative_filtering</td>
                        <td>
                          Get a list of personalized open educational bundles
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="anchor" id="version-1-search-materials" />
                <h6 className="doc doc__subsection mt-5 mb-3">
                  Search for relevant materials
                </h6>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th className="doc doc__method request" />
                        <th className="doc doc__method route" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b className="doc">GET</b>
                        </td>
                        <td>
                          <b>/search</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="information">
                  Get a list of relevant open educational resources (10 per
                  page).
                </p>
                <h6 className="mt-2">Query string parameters</h6>
                <div className="table-responsive">
                  <table className="table table-dashed-borders">
                    <thead>
                      <tr>
                        <th className="doc doc__query name" />
                        <th className="doc doc__query type" />
                        <th className="doc doc__query title" />
                        <th className="doc doc__query optional" />
                        <th className="doc doc__query description" />
                      </tr>
                    </thead>
                    <tbody>
                      <this.QueryTableRow
                        name={"text"}
                        type={"String"}
                        title={"Query Text"}
                        optional={"false"}
                        desc={
                          `The seed text from which the system finds the relevant
                          open educational resources.`
                        }
                      ></this.QueryTableRow>

                      <this.QueryTableRow
                        name={"types"}
                        type={"String"}
                        title={"Material Types"}
                        optional={"true"}
                        desc={
                          `The type of open educational resources. There are two
                          approaches of setting this value: <br />
                          (1) set the type group. Options: all, video, audio and
                          text.
                          <br />
                          (2) provide a string of file extensions separated by a
                          comma (example: <code>pdf,doc,docx,mp4</code>).
                          <br />
                          <b className="doc">Default value</b> is <b>all</b>.`
                        }
                      ></this.QueryTableRow>

                      <this.QueryTableRow
                        name={"licenses"}
                        type={"String"}
                        title={"Material Licenses"}
                        optional={"true"}
                        desc={
                          `Filters the open educational resources based on the
                          provided licenses. One can provide multiple Licenses
                          separated by a comma (example: <code>by,by-nd</code>
                          ). If parameter is <code>cc</code> returns materials
                          that have the license present. If Null, no filtering
                          is performed. Options: cc, by, by-nc, by-sa, by-nd,
                          by-nc-nd, by-nc-sa. <br />
                          <b className="doc">Default value</b> is <b>Null</b>.`
                        }
                      ></this.QueryTableRow>

                      <this.QueryTableRow
                        name={"languages"}
                        type={"String"}
                        title={"Material Languages"}
                        optional={"true"}
                        desc={
                          `The language of the open educational resources. This
                          parameter is a string of ISO 639-1 code languages
                          separated by a comma (example: <code>sl,es,de</code>
                          ). If Null, no filtering is performed.
                          <br />
                          <b className="doc">Default value</b> is <b>Null</b>.`
                        }
                      ></this.QueryTableRow>

                      <this.QueryTableRow
                        name={"content_languages"}
                        type={"String"}
                        title={"Material Content Languages"}
                        optional={"true"}
                        desc={
                          `The content languages of the open educational
                          resources. This parameter filters out resources that
                          have content (i.e. transcriptions, translations)
                          available in the provided content languages. It is a
                          string of ISO 639-1 code languages separated by a
                          comma (example: <code>sl,es,de</code>). If Null, no
                          filtering by content languages is performed.
                          <br />
                          <b className="doc">Default value</b> is <b>Null</b>.`
                        }
                      ></this.QueryTableRow>

                      <this.QueryTableRow
                        name={"provider_ids"}
                        type={"String"}
                        title={"Material Provider IDs"}
                        optional={"true"}
                        desc={
                          `The list of material provider IDs. This parameter
                          filters out resources that are associated with the OER
                          providers associated. (example: <code>1,10</code>). If
                          Null, no filtering by providers is done.
                          <br />
                          <b className="doc">Default value</b> is <b>Null</b>.`
                        }
                      ></this.QueryTableRow>

                      <this.QueryTableRow
                        name={"wikipedia"}
                        type={"Boolean"}
                        title={"Material Wikipedia"}
                        optional={"true"}
                        desc={
                          `If True, provides the list of Wikipedia concepts
                          associated with the resource.
                          <br />
                          <b className="doc">Default value</b> is <b>False</b>.`
                        }
                      ></this.QueryTableRow>

                      <this.QueryTableRow
                        name={"wikipedia_limit"}
                        type={"Integer"}
                        title={"Wikipedia List Length"}
                        optional={"true"}
                        desc={
                          `The number of top Wikipedia concepts returned if the{" "}
                          <code>wikipedia</code> parameter is present. If Null,
                          returns all Wikipedia concepts.
                          <br />
                          <b className="doc">Default value</b> is <b>Null</b>.`
                        }
                      ></this.QueryTableRow>

                      <this.QueryTableRow
                        name={"limit"}
                        type={"Integer"}
                        title={"Page Limit"}
                        optional={"true"}
                        desc={
                          `The number of open eduational resources to return. If
                          the value is zero or bellow, it automatically returns
                          the default number of resources. If value is greater
                          than 100 returns 100 resources.
                          <br />
                          <b className="doc">Default value</b> is <b>20</b>.`
                        }
                      ></this.QueryTableRow>

                      <this.QueryTableRow
                        name={"page"}
                        type={"Integer"}
                        title={"Page"}
                        optional={"true"}
                        desc={
                          `The page number of the recommended list.
                          <br />
                          <b className="doc">Default value</b> is <b>1</b>.`
                        }
                      ></this.QueryTableRow>

                    </tbody>
                  </table>
                </div>
                <h6 className="mt-2">Response body attributes</h6>
                <div className="table-responsive">
                  <table className="table table-dashed-borders">
                    <thead>
                      <tr>
                        <th className="doc doc__query name" />
                        <th className="doc doc__query type" />
                        <th className="doc doc__query title" />
                        <th className="doc doc__query optional" />
                        <th className="doc doc__query description" />
                      </tr>
                    </thead>
                    <tbody>
                      <this.ResultTableRow
                        name={"query"}
                        type={"JSON"}
                        title={"Query Parameters"}
                        desc={
                          `A JSON object containing the provided query
                          parameters.`
                        }
                      ></this.ResultTableRow>

                      <tr className="no-top-border">
                        <td colSpan={5}>
                          <b className="doc">query object properties</b>
                          <table className="table table-dashed-borders table--second-level">
                            <thead>
                              <tr>
                                <th className="doc doc__query name" />
                                <th className="doc doc__query type" />
                                <th className="doc doc__query title" />
                                <th className="doc doc__query optional" />
                                <th className="doc doc__query description" />
                              </tr>
                            </thead>
                            <tbody>
                              <this.ResultTableRow
                                name={"text"}
                                type={"String"}
                                title={"Query Text"}
                                desc={
                                  `The user provided query text.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"type"}
                                type={"String"}
                                title={"Query Material Type"}
                                desc={
                                  `The material type provided.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"page"}
                                type={"Integer"}
                                title={"Result Page"}
                                desc={
                                  `The page number of the results.`
                                }
                              ></this.ResultTableRow>

                            </tbody>
                          </table>
                        </td>
                      </tr>

                      <this.ResultTableRow
                        name={"rec_materials"}
                        type={"Array"}
                        title={"Recommended Materials"}
                        desc={
                          `An array of objects, each representing an recommended
                          open educational resource.`
                        }
                      ></this.ResultTableRow>

                      <tr className="no-top-border">
                        <td colSpan={5}>
                          <b className="doc">rec_materials object properties</b>
                          <table className="table table-dashed-borders table--second-level">
                            <thead>
                              <tr>
                                <th className="doc doc__query name" />
                                <th className="doc doc__query type" />
                                <th className="doc doc__query title" />
                                <th className="doc doc__query optional" />
                                <th className="doc doc__query description" />
                              </tr>
                            </thead>
                            <tbody>
                              <this.ResultTableRow
                                name={"weight"}
                                type={"Float"}
                                title={"Recommendation Weight"}
                                desc={
                                  `The number representing the relevance of the
                                  OER material. Greater weight means bigger
                                  relevance.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"material_id"}
                                type={"Integer"}
                                title={"Material ID"}
                                desc={
                                  `The unique ID of the OER material.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"title"}
                                type={"String"}
                                title={"Material Title"}
                                desc={
                                  `The title of the OER material.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"description"}
                                type={"String"}
                                title={"Material Description"}
                                desc={
                                  `The description of the OER material.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"creation_date"}
                                type={"Date"}
                                title={"Material Creation Date"}
                                desc={
                                  `The creation date of the OER material.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"retrieved_date"}
                                type={"Date"}
                                title={"Material Retrieved Date"}
                                desc={
                                  `The date when the OER material was indexed by
                                  the platform.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"type"}
                                type={"String"}
                                title={"Material Type"}
                                desc={
                                  `The type of the OER material.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"mimetype"}
                                type={"String"}
                                title={"Material Mimetype"}
                                desc={
                                  `The mimetype of the OER material.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"url"}
                                type={"String"}
                                title={"Material URL"}
                                desc={
                                  `The URL of the OER material.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"website"}
                                type={"String"}
                                title={"Material Container URL"}
                                desc={
                                  `The URL where the OER material is contained on
                                  the provider's website.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"language"}
                                type={"String"}
                                title={"Material Language"}
                                desc={
                                  `The language of the OER material in ISO 639-1
                                  code.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"license"}
                                type={"Object"}
                                title={"Material License"}
                                desc={
                                  `The JSON object containing the material's
                                  short_name, typed_name, disclaimer and license
                                  URL.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"provider"}
                                type={"Object"}
                                title={"Material Provider"}
                                desc={
                                  `The JSON object containing the provider's id,
                                  name and domain values.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"content_ids"}
                                type={"Array"}
                                title={"Material Content IDs"}
                                desc={
                                  `The array of material's content IDs.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"wikipedia"}
                                type={"Array"}
                                title={"Material Wikipedia Concepts"}
                                desc={
                                  `An array of objects, each representing the
                                  most relevant wikipedia concept of the
                                  material.`
                                }
                              ></this.ResultTableRow>

                              <tr className="no-top-border">
                                <td colSpan={5}>
                                  <b className="doc">
                                    wikipedia object properties
                                  </b>
                                  <table className="table table-dashed-borders table--third-level">
                                    <thead>
                                      <tr>
                                        <th className="doc doc__query name" />
                                        <th className="doc doc__query type" />
                                        <th className="doc doc__query title" />
                                        <th className="doc doc__query optional" />
                                        <th className="doc doc__query description" />
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <this.ResultTableRow
                                        name={"concept"}
                                        type={"String"}
                                        title={"Wikipedia Concept"}
                                        desc={
                                          `The Wikipedia concept represented as
                                          an URL.`
                                        }
                                      ></this.ResultTableRow>

                                      <this.ResultTableRow
                                        name={"support"}
                                        type={"Integer"}
                                        title={"Wikipedia Concept Support"}
                                        desc={
                                          `The amount of elements in the material
                                          that support the given Wikipedia
                                          concept.`
                                        }
                                      ></this.ResultTableRow>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>

                      <this.ResultTableRow
                        name={"metadata"}
                        type={"JSON"}
                        title={"Result Metadata"}
                        desc={
                          `A JSON object containing the associated metadata.
                          Helpful for navigating through the recommendations.`
                        }
                      ></this.ResultTableRow>

                      <tr className="no-top-border">
                        <td colSpan={5}>
                          <b className="doc">metadata object properties</b>
                          <table className="table table-dashed-borders table--second-level">
                            <thead>
                              <tr>
                                <th className="doc doc__query name" />
                                <th className="doc doc__query type" />
                                <th className="doc doc__query title" />
                                <th className="doc doc__query optional" />
                                <th className="doc doc__query description" />
                              </tr>
                            </thead>
                            <tbody>
                              <this.ResultTableRow
                                name={"total_hits"}
                                type={"Integer"}
                                title={"Number of Found Materials"}
                                desc={
                                  `Number of most relevant material.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"total_pages"}
                                type={"Integer"}
                                title={"Total Pages"}
                                desc={
                                  `The total number of result pages.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"prev_page"}
                                type={"String"}
                                title={"Previous Page"}
                                desc={
                                  `The URL to the previous result page.`
                                }
                              ></this.ResultTableRow>

                              <this.ResultTableRow
                                name={"next_page"}
                                type={"String"}
                                title={"Next Page"}
                                desc={
                                  `The URL to the next result page.`
                                }
                              ></this.ResultTableRow>

                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="anchor" id="version-1-recommend-materials" />
                <h6 className="doc doc__subsection mt-5 mb-3">
                  Get a list of most relevant open educational resources
                  (similar to <code>/search</code>)
                </h6>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th className="doc doc__method request" />
                        <th className="doc doc__method route" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b className="doc">GET</b>
                        </td>
                        <td>
                          <b>/recommend/oer_materials</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="information">
                  Get a list of most relevant open educational resources.
                </p>
                <h6 className="mt-2">Query string parameters</h6>
                <div className="table-responsive">
                  <table className="table table-dashed-borders">
                    <thead>
                      <tr>
                        <th className="doc doc__query name" />
                        <th className="doc doc__query type" />
                        <th className="doc doc__query title" />
                        <th className="doc doc__query optional" />
                        <th className="doc doc__query description" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b className="doc">text</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          String
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Query Text
                        </td>
                        <td>
                          <span className="doc doc--small">Optional:</span>
                          <br />
                          false
                        </td>
                        <td>
                          The seed text from which the system finds the relevant
                          open educational resources.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b className="doc">type</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          String
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Material Type
                        </td>
                        <td>
                          <span className="doc doc--small">Optional:</span>
                          <br />
                          true
                        </td>
                        <td>
                          The type of open educational resources. Possible
                          options: all, video, audio and text.
                          <br />
                          <b className="doc">Default value</b> is <b>all</b>.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b className="doc">page</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          Integer
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Page
                        </td>
                        <td>
                          <span className="doc doc--small">Optional:</span>
                          <br />
                          true
                        </td>
                        <td>
                          The page number of the recommended list.
                          <br />
                          <b className="doc">Default value</b> is <b>1</b>.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h6 className="mt-2">Response body attributes</h6>
                <div className="table-responsive">
                  <table className="table table-dashed-borders">
                    <thead>
                      <tr>
                        <th className="doc doc__query name" />
                        <th className="doc doc__query type" />
                        <th className="doc doc__query title" />
                        <th className="doc doc__query optional" />
                        <th className="doc doc__query description" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="no-bottom-border">
                        <td>
                          <b className="doc">rec_materials</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          Array
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Recommended Materials
                        </td>
                        <td>
                          <span className="doc doc--small">Read only:</span>
                          <br />
                          true
                        </td>
                        <td>
                          An array of objects, each representing an recommended
                          open educational resource.
                        </td>
                      </tr>
                      <tr className="no-top-border">
                        <td colSpan={5}>
                          <b className="doc">rec_materials object properties</b>
                          <table className="table table-dashed-borders table--second-level">
                            <thead>
                              <tr>
                                <th className="doc doc__query name" />
                                <th className="doc doc__query type" />
                                <th className="doc doc__query title" />
                                <th className="doc doc__query optional" />
                                <th className="doc doc__query description" />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <b className="doc">material_id</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  Integer
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material ID
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The unique ID of the OER material.</td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">weight</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  Float
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Recommendation Weight
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>
                                  The number between 0 and 1 representing the
                                  relevance of the OER material. Greater weight
                                  means bigger relevance.
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">url</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material URL
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The URL of the OER material.</td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">title</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material Title
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The title of the OER material.</td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">description</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material Description
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The description of the OER material.</td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">provider</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material Provider
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The name of the OER materials provider.</td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">language</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material Language
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>
                                  The language of the OER material in ISO 639-1
                                  code.
                                </td>
                              </tr>
                              <tr className="no-bottom-border">
                                <td>
                                  <b className="doc">wikipedia</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  Array
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material Wikipedia Concepts
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>
                                  An array of objects, each representing the
                                  most relevant wikipedia concept of the
                                  material.
                                </td>
                              </tr>
                              <tr className="no-top-border">
                                <td colSpan={5}>
                                  <b className="doc">
                                    wikipedia object properties
                                  </b>
                                  <table className="table table-dashed-borders table--third-level">
                                    <thead>
                                      <tr>
                                        <th className="doc doc__query name" />
                                        <th className="doc doc__query type" />
                                        <th className="doc doc__query title" />
                                        <th className="doc doc__query optional" />
                                        <th className="doc doc__query description" />
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <b className="doc">concept</b>
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Type:
                                          </span>
                                          <br />
                                          String
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Title:
                                          </span>
                                          <br />
                                          Wikipedia Concept
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Read only:
                                          </span>
                                          <br />
                                          true
                                        </td>
                                        <td>
                                          The Wikipedia concept represented as
                                          an URL.
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <b className="doc">support</b>
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Type:
                                          </span>
                                          <br />
                                          Integer
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Title:
                                          </span>
                                          <br />
                                          Wikipedia Concept Support
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Read only:
                                          </span>
                                          <br />
                                          true
                                        </td>
                                        <td>
                                          The amount of elements in the material
                                          that support the given Wikipedia
                                          concept.
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">type</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material Type
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The type of the OER material.</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="anchor" id="version-1-recommend-bundles" />
                <h6 className="doc doc__subsection mt-5 mb-3">
                  Get a list of relevant open educational bundles (web pages)
                </h6>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th className="doc doc__method request" />
                        <th className="doc doc__method route" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b className="doc">GET</b>
                        </td>
                        <td>
                          <b>/recommend/oer_bundles</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="information">
                  Get a list of relevant open educational bundles (web pages).
                </p>
                <h6 className="mt-2">Query string parameters</h6>
                <div className="table-responsive">
                  <table className="table table-dashed-borders">
                    <thead>
                      <tr>
                        <th className="doc doc__query name" />
                        <th className="doc doc__query type" />
                        <th className="doc doc__query title" />
                        <th className="doc doc__query optional" />
                        <th className="doc doc__query description" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b className="doc">url</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          String
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Website URL
                        </td>
                        <td>
                          <span className="doc doc--small">Optional:</span>
                          <br />
                          false
                        </td>
                        <td>
                          The URL of the website containing the OER materials.
                          The URL must be present in the X5GON database
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b className="doc">page</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          Integer
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Page
                        </td>
                        <td>
                          <span className="doc doc--small">Optional:</span>
                          <br />
                          true
                        </td>
                        <td>
                          The page number of the recommended list.
                          <br />
                          <b className="doc">Default value</b> is <b>1</b>.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h6 className="mt-2">Response body attributes</h6>
                <div className="table-responsive">
                  <table className="table table-dashed-borders">
                    <thead>
                      <tr>
                        <th className="doc doc__query name" />
                        <th className="doc doc__query type" />
                        <th className="doc doc__query title" />
                        <th className="doc doc__query optional" />
                        <th className="doc doc__query description" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="no-bottom-border">
                        <td>
                          <b className="doc">rec_bundles</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          Array
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Recommended Bundles
                        </td>
                        <td>
                          <span className="doc doc--small">Read only:</span>
                          <br />
                          true
                        </td>
                        <td>
                          An array of objects, each representing an recommended
                          open educational resource bundle.
                        </td>
                      </tr>
                      <tr className="no-top-border">
                        <td colSpan={5}>
                          <b className="doc">rec_bundles object properties</b>
                          <table className="table table-dashed-borders table--second-level">
                            <thead>
                              <tr>
                                <th className="doc doc__query name" />
                                <th className="doc doc__query type" />
                                <th className="doc doc__query title" />
                                <th className="doc doc__query optional" />
                                <th className="doc doc__query description" />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <b className="doc">weight</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  Float
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Recommendation Weight
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>
                                  The number of common concepts between the
                                  given url bundle and this OER bundle. Greater
                                  weight means bigger relevance.
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">url</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Bundle URL
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The URL of the OER bundle.</td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">title</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Bundle Title
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The title of the OER bundle.</td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">description</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Bundle Description
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The description of the OER bundle.</td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">provider</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Bundle Provider
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The name of the OER bundle provider.</td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">language</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Bundle Language
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>
                                  The dominant language of the OER bundle in ISO
                                  639-1 code.
                                </td>
                              </tr>
                              <tr className="no-bottom-border">
                                <td>
                                  <b className="doc">wikipedia</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  Array
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Bundle Wikipedia Concepts
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>
                                  An array of objects, each representing the
                                  most relevant wikipedia concept of the bundle.
                                </td>
                              </tr>
                              <tr className="no-top-border">
                                <td colSpan={5}>
                                  <b className="doc">
                                    wikipedia object properties
                                  </b>
                                  <table className="table table-dashed-borders table--third-level">
                                    <thead>
                                      <tr>
                                        <th className="doc doc__query name" />
                                        <th className="doc doc__query type" />
                                        <th className="doc doc__query title" />
                                        <th className="doc doc__query optional" />
                                        <th className="doc doc__query description" />
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <b className="doc">concept</b>
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Type:
                                          </span>
                                          <br />
                                          String
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Title:
                                          </span>
                                          <br />
                                          Wikipedia Concept
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Read only:
                                          </span>
                                          <br />
                                          true
                                        </td>
                                        <td>
                                          The Wikipedia concept represented as
                                          an URL.
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <b className="doc">support</b>
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Type:
                                          </span>
                                          <br />
                                          Integer
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Title:
                                          </span>
                                          <br />
                                          Wikipedia Concept Support
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Read only:
                                          </span>
                                          <br />
                                          true
                                        </td>
                                        <td>
                                          The amount of elements in the material
                                          that support the given Wikipedia
                                          concept.
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">type</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Bundle Type
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The dominant type of the OER bundle.</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="anchor" id="version-1-collaborative" />
                <h6 className="doc doc__subsection mt-5 mb-3">
                  Get a list of personalized open educational bundles
                  recommendations
                </h6>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th className="doc doc__method request" />
                        <th className="doc doc__method route" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b className="doc">GET</b>
                        </td>
                        <td>
                          <b>/recommend/collaborative_filtering</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="information">
                  Get a list of personalized open educational bundles
                  recommendations. The personalization is performed via the
                  <a
                    href="https://en.wikipedia.org/wiki/Collaborative_filtering"
                    target="blank"
                  >
                    <b className="doc">collaborative filtering</b>
                  </a>
                  method.
                </p>
                <h6 className="mt-2">Query string parameters</h6>
                <div className="table-responsive">
                  <table className="table table-dashed-borders">
                    <thead>
                      <tr>
                        <th className="doc doc__query name" />
                        <th className="doc doc__query type" />
                        <th className="doc doc__query title" />
                        <th className="doc doc__query optional" />
                        <th className="doc doc__query description" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b className="doc">page</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          Integer
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Page
                        </td>
                        <td>
                          <span className="doc doc--small">Optional:</span>
                          <br />
                          true
                        </td>
                        <td>
                          The page number of the recommended list.
                          <br />
                          <b className="doc">Default value</b> is <b>1</b>.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h6 className="mt-2">Response body attributes</h6>
                <div className="table-responsive">
                  <table className="table table-dashed-borders">
                    <thead>
                      <tr>
                        <th className="doc doc__query name" />
                        <th className="doc doc__query type" />
                        <th className="doc doc__query title" />
                        <th className="doc doc__query optional" />
                        <th className="doc doc__query description" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="no-bottom-border">
                        <td>
                          <b className="doc">rec_bundles</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          Array
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Personalized Bundles
                        </td>
                        <td>
                          <span className="doc doc--small">Read only:</span>
                          <br />
                          true
                        </td>
                        <td>
                          An array of objects, each representing an recommended
                          open educational resource bundle.
                        </td>
                      </tr>
                      <tr className="no-top-border">
                        <td colSpan={5}>
                          <b className="doc">rec_bundles object properties</b>
                          <table className="table table-dashed-borders table--second-level">
                            <thead>
                              <tr>
                                <th className="doc doc__query name" />
                                <th className="doc doc__query type" />
                                <th className="doc doc__query title" />
                                <th className="doc doc__query optional" />
                                <th className="doc doc__query description" />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <b className="doc">weight</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  Float
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Recommendation Weight
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>
                                  The number of times the bundle was viewed by
                                  similar users. Greater weight means bigger
                                  relevance.
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">url</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Bundle URL
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The URL of the OER bundle.</td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">title</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Bundle Title
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The title of the OER bundle.</td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">description</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Bundle Description
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The description of the OER bundle.</td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">provider</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Bundle Provider
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The name of the OER bundle provider.</td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">language</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Bundle Language
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>
                                  The dominant language of the OER bundle in ISO
                                  639-1 code.
                                </td>
                              </tr>
                              <tr className="no-bottom-border">
                                <td>
                                  <b className="doc">wikipedia</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  Array
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Bundle Wikipedia Concepts
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>
                                  An array of objects, each representing the
                                  most relevant wikipedia concept of the bundle.
                                </td>
                              </tr>
                              <tr className="no-top-border">
                                <td colSpan={5}>
                                  <b className="doc">
                                    wikipedia object properties
                                  </b>
                                  <table className="table table-dashed-borders table--third-level">
                                    <thead>
                                      <tr>
                                        <th className="doc doc__query name" />
                                        <th className="doc doc__query type" />
                                        <th className="doc doc__query title" />
                                        <th className="doc doc__query optional" />
                                        <th className="doc doc__query description" />
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <b className="doc">concept</b>
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Type:
                                          </span>
                                          <br />
                                          String
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Title:
                                          </span>
                                          <br />
                                          Wikipedia Concept
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Read only:
                                          </span>
                                          <br />
                                          true
                                        </td>
                                        <td>
                                          The Wikipedia concept represented as
                                          an URL.
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <b className="doc">support</b>
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Type:
                                          </span>
                                          <br />
                                          Integer
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Title:
                                          </span>
                                          <br />
                                          Wikipedia Concept Support
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Read only:
                                          </span>
                                          <br />
                                          true
                                        </td>
                                        <td>
                                          The amount of elements in the material
                                          that support the given Wikipedia
                                          concept.
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">type</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Bundle Type
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The dominant type of the OER bundle.</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="anchor" id="version-1-query-rest-api" />
                <h5 className="doc doc__section mt-5">Query REST API</h5>
                <p className="information">
                  This section contains the API routes for retrieving resources
                  based on the query parameters. It contains different examples
                  of resource retrieval based on the provided query parameters.{" "}
                  <b className="doc">NOTE:</b> Some of the API routes are
                  private and are available only to those who have special
                  credentials.
                </p>
                <h6 className="doc doc__subsection mt-2 pb-3">
                  Query REST API: Open Educational Resources
                </h6>
                <p className="information">
                  The Open Educational Resources REST API allows the user to
                  retrieve OER materials.
                </p>
                <h6 className="mt-2">Available methods</h6>
                <div className="table-responsive">
                  <table className="table table-borderless table-hover">
                    <thead>
                      <tr>
                        <th className="doc doc__method request" />
                        <th className="doc doc__method route" />
                        <th className="doc doc__method description" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        className="clickable-row"
                        data-href="#version-1-get-materials"
                      >
                        <td>
                          <b className="doc">GET</b>
                        </td>
                        <td>/oer_materials</td>
                        <td>Get a list of open educational resources</td>
                      </tr>
                      <tr
                        className="clickable-row"
                        data-href="#version-1-post-materials"
                      >
                        <td>
                          <b className="doc">POST</b>
                        </td>
                        <td>/oer_materials</td>
                        <td>Upload a list of open educational resources</td>
                      </tr>
                      <tr
                        className="clickable-row"
                        data-href="#version-1-get-material"
                      >
                        <td>
                          <b className="doc">GET</b>
                        </td>
                        <td>
                          /oer_materials/{"{"}material_id{"}"}
                        </td>
                        <td>
                          Get information of a specific open educational
                          resource
                        </td>
                      </tr>
                      <tr
                        className="clickable-row"
                        data-href="#version-1-get-contents"
                      >
                        <td>
                          <b className="doc">GET</b>
                        </td>
                        <td>
                          /oer_materials/{"{"}material_id{"}"}/contents
                        </td>
                        <td>
                          Get a list of content of a specific open educational
                          resource
                        </td>
                      </tr>
                      <tr
                        className="clickable-row"
                        data-href="#version-1-get-content"
                      >
                        <td>
                          <b className="doc">GET</b>
                        </td>
                        <td>
                          /oer_materials/{"{"}material_id{"}"}/contents/{"{"}
                          content_id{"}"}
                        </td>
                        <td>
                          Get information of a specific content of a specific
                          open educational resource
                        </td>
                      </tr>
                      <tr
                        className="clickable-row"
                        data-href="#version-1-get-content-value"
                      >
                        <td>
                          <b className="doc">GET</b>
                        </td>
                        <td>
                          /oer_materials/{"{"}material_id{"}"}/contents/{"{"}
                          content_id{"}"}/value
                        </td>
                        <td>
                          Get the body value of a specific content of a specific
                          open educational resource
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="anchor" id="version-1-get-materials" />
                <h6 className="doc doc__subsection mt-5 mb-3">
                  Get a list of open educational resources
                </h6>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th className="doc doc__method request" />
                        <th className="doc doc__method route" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b className="doc">GET</b>
                        </td>
                        <td>
                          <b>/oer_materials</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="information">
                  Get a list of open educational resources.
                </p>
                <h6 className="mt-2">Query string parameters</h6>
                <div className="table-responsive">
                  <table className="table table-dashed-borders">
                    <thead>
                      <tr>
                        <th className="doc doc__query name" />
                        <th className="doc doc__query type" />
                        <th className="doc doc__query title" />
                        <th className="doc doc__query optional" />
                        <th className="doc doc__query description" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b className="doc">languages</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          Array
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Languages
                        </td>
                        <td>
                          <span className="doc doc--small">Optional:</span>
                          <br />
                          true
                        </td>
                        <td>
                          A comma-separated list of languages in ISO 639-1 code.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b className="doc">limit</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          Integer
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Limit
                        </td>
                        <td>
                          <span className="doc doc--small">Optional:</span>
                          <br />
                          true
                        </td>
                        <td>
                          The number of records to return.
                          <br />
                          <b className="doc">Default value</b> is <b>20</b>.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b className="doc">offset</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          Integer
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Offset
                        </td>
                        <td>
                          <span className="doc doc--small">Optional:</span>
                          <br />
                          true
                        </td>
                        <td>
                          The number of records from a collection to skip.
                          Iterating over large collections with this parameter
                          can be slow.
                          <br />
                          <b className="doc">Default value</b> is <b>0</b>.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b className="doc">page</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          Integer
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Page
                        </td>
                        <td>
                          <span className="doc doc--small">Optional:</span>
                          <br />
                          true
                        </td>
                        <td>
                          The page number of the record collection. It overrides
                          the offset parameter.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h6 className="mt-2">Response body attributes</h6>
                <div className="table-responsive">
                  <table className="table table-dashed-borders">
                    <thead>
                      <tr>
                        <th className="doc doc__query name" />
                        <th className="doc doc__query type" />
                        <th className="doc doc__query title" />
                        <th className="doc doc__query optional" />
                        <th className="doc doc__query description" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="no-bottom-border">
                        <td>
                          <b className="doc">oer_materials</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          Array
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          OER Materials
                        </td>
                        <td>
                          <span className="doc doc--small">Read only:</span>
                          <br />
                          true
                        </td>
                        <td>
                          An array of objects, each representing an open
                          educational resource.
                        </td>
                      </tr>
                      <tr className="no-top-border">
                        <td colSpan={5}>
                          <b className="doc">oer_materials object properties</b>
                          <table className="table table-dashed-borders table--second-level">
                            <thead>
                              <tr>
                                <th className="doc doc__query name" />
                                <th className="doc doc__query type" />
                                <th className="doc doc__query title" />
                                <th className="doc doc__query optional" />
                                <th className="doc doc__query description" />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <b className="doc">material_id</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  Integer
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material ID
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The unique ID of the OER material.</td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">title</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material Title
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The title of the OER material.</td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">description</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material Description
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The description of the OER material.</td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">url</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material URL
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The URL of the OER material.</td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">language</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material Language
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>
                                  The language of the OER material in ISO 639-1
                                  code.
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">type</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material Type
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The type of the OER material.</td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">mimetype</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material Mimetype
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The mimetype of the OER material.</td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">content_ids</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  Array
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material Content IDs
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>
                                  The IDs of the material contents. Can be
                                  accessed through
                                  <Link to="/products/feed#version-1-get-content">
                                    content info method
                                  </Link>
                                  .
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">provider</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  JSON
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material Provider
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>
                                  The JSON object containing the provider's name
                                  and domain.
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="anchor" id="version-1-post-materials" />
                <h6 className="doc doc__subsection mt-5 mb-3">
                  Upload a list of open educational resources
                </h6>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th className="doc doc__method request" />
                        <th className="doc doc__method route" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b className="doc">POST</b>
                        </td>
                        <td>
                          <b>/oer_materials</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="information">
                  Uploads a list of open educational resources.
                </p>
                <h6 className="mt-2">Request body parameters</h6>
                <div className="table-responsive">
                  <table className="table table-dashed-borders">
                    <thead>
                      <tr>
                        <th className="doc doc__query name" />
                        <th className="doc doc__query type" />
                        <th className="doc doc__query title" />
                        <th className="doc doc__query optional" />
                        <th className="doc doc__query description" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b className="doc">api_key</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          String
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          API Key
                        </td>
                        <td>
                          <span className="doc doc--small">Optional:</span>
                          <br />
                          false
                        </td>
                        <td>
                          The API key used to submit the OER materials.{" "}
                          <b className="doc">NOTE:</b> to obtain an API key,
                          please contact the project administrator.
                        </td>
                      </tr>
                      <tr className="no-bottom-border">
                        <td>
                          <b className="doc">oer_materials</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          Array
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          OER Materials
                        </td>
                        <td>
                          <span className="doc doc--small">Optional:</span>
                          <br />
                          false
                        </td>
                        <td>
                          An array of objects, each representing an open
                          educational resource.
                        </td>
                      </tr>
                      <tr className="no-top-border">
                        <td colSpan={5}>
                          <b className="doc">oer_materials object properties</b>
                          <table className="table table-dashed-borders table--second-level">
                            <thead>
                              <tr>
                                <th className="doc doc__query name" />
                                <th className="doc doc__query type" />
                                <th className="doc doc__query title" />
                                <th className="doc doc__query optional" />
                                <th className="doc doc__query description" />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <b className="doc">title</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material Title
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Optional:
                                  </span>
                                  <br />
                                  false
                                </td>
                                <td>The title of the OER material.</td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">description</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material Description
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Optional:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The description of the OER material.</td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">provider_uri</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Provider URI
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Optional:
                                  </span>
                                  <br />
                                  false
                                </td>
                                <td>
                                  The URL of the webpage on which the material
                                  is located.
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">material_url</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material URL
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Optional:
                                  </span>
                                  <br />
                                  false
                                </td>
                                <td>The URL of the OER material.</td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">language</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material Language
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Optional:
                                  </span>
                                  <br />
                                  false
                                </td>
                                <td>
                                  The language of the OER material in ISO 639-1
                                  code.
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">type</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material Type
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Optional:
                                  </span>
                                  <br />
                                  false
                                </td>
                                <td>
                                  An object containing the type information of
                                  an open educational resource.
                                </td>
                              </tr>
                              <tr className="no-top-border">
                                <td colSpan={5}>
                                  <b className="doc">type object properties</b>
                                  <table className="table table-dashed-borders table--third-level">
                                    <thead>
                                      <tr>
                                        <th className="doc doc__query name" />
                                        <th className="doc doc__query type" />
                                        <th className="doc doc__query title" />
                                        <th className="doc doc__query optional" />
                                        <th className="doc doc__query description" />
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <b className="doc">ext</b>
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Type:
                                          </span>
                                          <br />
                                          String
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Title:
                                          </span>
                                          <br />
                                          Material Extension
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Optional:
                                          </span>
                                          <br />
                                          false
                                        </td>
                                        <td>
                                          The extension of the material (i.e.
                                          .pdf, .mov, etc).
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <b className="doc">mime</b>
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Type:
                                          </span>
                                          <br />
                                          String
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Title:
                                          </span>
                                          <br />
                                          Material Mimetype
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Optional:
                                          </span>
                                          <br />
                                          false
                                        </td>
                                        <td>The mimetype of the material.</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">date_created</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  Datetime
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material Creation Date
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Optional:
                                  </span>
                                  true
                                </td>
                                <td>
                                  The date of the materials creation.{" "}
                                  <b className="doc">Format</b> is{" "}
                                  <b>YYYY-MM-DD</b>.
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">provider_token</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material Provider Token
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Optional:
                                  </span>
                                  <br />
                                  false
                                </td>
                                <td>
                                  The token of the material provider. Token must
                                  be first created via the
                                  <Link to="/join#form" className="doc">
                                    registration form
                                  </Link>
                                  .
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">license</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material License
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Optional:
                                  </span>
                                  <br />
                                  false
                                </td>
                                <td>
                                  The material license. Since we are dealing
                                  with OER materials, the license should be
                                  CC-BY.
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h6 className="mt-2">Response body attributes</h6>
                <div className="table-responsive">
                  <table className="table table-dashed-borders">
                    <thead>
                      <tr>
                        <th className="doc doc__query name" />
                        <th className="doc doc__query type" />
                        <th className="doc doc__query title" />
                        <th className="doc doc__query optional" />
                        <th className="doc doc__query description" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="no-bottom-border">
                        <td>
                          <b className="doc">num_submitted</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          Integer
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Number of Materials Submitted
                        </td>
                        <td>
                          <span className="doc doc--small">Read only:</span>
                          <br />
                          true
                        </td>
                        <td>Number of successfully submitted materials.</td>
                      </tr>
                      <tr className="no-bottom-border">
                        <td>
                          <b className="doc">errors</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          Object
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Submission Errors
                        </td>
                        <td>
                          <span className="doc doc--small">Read only:</span>
                          <br />
                          true
                        </td>
                        <td>
                          The object containing submission error information.{" "}
                          <b className="doc">NOTE:</b> only present if there are
                          any errors.
                        </td>
                      </tr>
                      <tr className="no-top-border">
                        <td colSpan={5}>
                          <b className="doc">errors object properties</b>
                          <table className="table table-dashed-borders table--second-level">
                            <thead>
                              <tr>
                                <th className="doc doc__query name" />
                                <th className="doc doc__query type" />
                                <th className="doc doc__query title" />
                                <th className="doc doc__query optional" />
                                <th className="doc doc__query description" />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <b className="doc">message</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Error Message
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The submission error message.</td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">invalid_count</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  Integer
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Invalid Count
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>Number of invalid materials.</td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">invalid_materials</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  Array
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Invalid Materials
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>
                                  An array of not valid material objects format.
                                </td>
                              </tr>
                              <tr className="no-top-border">
                                <td colSpan={5}>
                                  <b className="doc">
                                    invalid_materials object properties
                                  </b>
                                  <table className="table table-dashed-borders table--third-level">
                                    <thead>
                                      <tr>
                                        <th className="doc doc__query name" />
                                        <th className="doc doc__query type" />
                                        <th className="doc doc__query title" />
                                        <th className="doc doc__query optional" />
                                        <th className="doc doc__query description" />
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <b className="doc">material</b>
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Type:
                                          </span>
                                          <br />
                                          Object
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Title:
                                          </span>
                                          <br />
                                          OER Material
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Read only:
                                          </span>
                                          <br />
                                          true
                                        </td>
                                        <td>
                                          The OER material object with a not
                                          valid format.
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <b className="doc">errors</b>
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Type:
                                          </span>
                                          <br />
                                          Array
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Title:
                                          </span>
                                          <br />
                                          Material Errors
                                        </td>
                                        <td>
                                          <span className="doc doc--small">
                                            Read only:
                                          </span>
                                          <br />
                                          true
                                        </td>
                                        <td>
                                          An array of errors telling why is the
                                          material object not valid.
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="anchor" id="version-1-get-material" />
                <h6 className="doc doc__subsection mt-5 mb-3">
                  Get information of a specific open educational resource
                </h6>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th className="doc doc__method request" />
                        <th className="doc doc__method route" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b className="doc">GET</b>
                        </td>
                        <td>
                          <b>
                            /oer_materials/{"{"}material_id{"}"}
                          </b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="information">
                  Get information of a specific open educational resource.
                </p>
                <h6 className="mt-2">Path parameters</h6>
                <div className="table-responsive">
                  <table className="table table-dashed-borders">
                    <thead>
                      <tr>
                        <th className="doc doc__method request" />
                        <th className="doc doc__method route" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b className="doc">material_id</b>
                        </td>
                        <td>The unique ID of the open educational resource.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h6 className="mt-2">Response body attributes</h6>
                <div className="table-responsive">
                  <table className="table table-dashed-borders">
                    <thead>
                      <tr>
                        <th className="doc doc__query name" />
                        <th className="doc doc__query type" />
                        <th className="doc doc__query title" />
                        <th className="doc doc__query optional" />
                        <th className="doc doc__query description" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b className="doc">material_id</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          Integer
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Material ID
                        </td>
                        <td>
                          <span className="doc doc--small">Read only:</span>
                          <br />
                          true
                        </td>
                        <td>The unique ID of the OER material.</td>
                      </tr>
                      <tr>
                        <td>
                          <b className="doc">title</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          String
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Material Title
                        </td>
                        <td>
                          <span className="doc doc--small">Read only:</span>
                          <br />
                          true
                        </td>
                        <td>The title of the OER material.</td>
                      </tr>
                      <tr>
                        <td>
                          <b className="doc">description</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          String
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Material Description
                        </td>
                        <td>
                          <span className="doc doc--small">Read only:</span>
                          <br />
                          true
                        </td>
                        <td>The description of the OER material.</td>
                      </tr>
                      <tr>
                        <td>
                          <b className="doc">url</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          String
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Material URL
                        </td>
                        <td>
                          <span className="doc doc--small">Read only:</span>
                          <br />
                          true
                        </td>
                        <td>The URL of the OER material.</td>
                      </tr>
                      <tr>
                        <td>
                          <b className="doc">language</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          String
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Material Language
                        </td>
                        <td>
                          <span className="doc doc--small">Read only:</span>
                          <br />
                          true
                        </td>
                        <td>
                          The language of the OER material in ISO 639-1 code.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b className="doc">type</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          String
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Material Type
                        </td>
                        <td>
                          <span className="doc doc--small">Read only:</span>
                          <br />
                          true
                        </td>
                        <td>The type of the OER material.</td>
                      </tr>
                      <tr>
                        <td>
                          <b className="doc">mimetype</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          String
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Material Mimetype
                        </td>
                        <td>
                          <span className="doc doc--small">Read only:</span>
                          <br />
                          true
                        </td>
                        <td>The mimetype of the OER material.</td>
                      </tr>
                      <tr>
                        <td>
                          <b className="doc">content_ids</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          Array
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Material Content IDs
                        </td>
                        <td>
                          <span className="doc doc--small">Read only:</span>
                          <br />
                          true
                        </td>
                        <td>
                          The IDs of the material contents. Can be accessed
                          through{" "}
                          <Link to="/products/feed#version-1-get-content">
                            content info method
                          </Link>
                          .
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b className="doc">provider</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          JSON
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Material Provider
                        </td>
                        <td>
                          <span className="doc doc--small">Read only:</span>
                          <br />
                          true
                        </td>
                        <td>
                          version-1-get-contents The JSON object containing the
                          provider's name and domain.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="anchor" id="version-1-get-contents" />
                <h6 className="doc doc__subsection mt-5 mb-3">
                  Get a list of content of a specific open educational resource
                </h6>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th className="doc doc__method request" />
                        <th className="doc doc__method route" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b className="doc">GET</b>
                        </td>
                        <td>
                          <b>
                            /oer_materials/{"{"}material_id{"}"}/contents
                          </b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="information">
                  Get a list of content of a specific open educational resource.
                </p>
                <h6 className="mt-2">Path parameters</h6>
                <div className="table-responsive">
                  <table className="table table-dashed-borders">
                    <thead>
                      <tr>
                        <th className="doc doc__method request" />
                        <th className="doc doc__method route" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b className="doc">material_id</b>
                        </td>
                        <td>The unique ID of the open educational resource.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h6 className="mt-2">Response body attributes</h6>
                <div className="table-responsive">
                  <table className="table table-dashed-borders">
                    <thead>
                      <tr>
                        <th className="doc doc__query name" />
                        <th className="doc doc__query type" />
                        <th className="doc doc__query title" />
                        <th className="doc doc__query optional" />
                        <th className="doc doc__query description" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="no-bottom-border">
                        <td>
                          <b className="doc">oer_materials</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          JSON
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          OER Materials
                        </td>
                        <td>
                          <span className="doc doc--small">Read only:</span>
                          <br />
                          true
                        </td>
                        <td>
                          The JSON object of the OER material with ID equal to{" "}
                          <code>material_id</code> (path parameter).
                        </td>
                      </tr>
                      <tr className="no-top-border">
                        <td colSpan={5}>
                          <b className="doc">oer_materials object properties</b>
                          <table className="table table-dashed-borders table--second-level">
                            <thead>
                              <tr>
                                <th className="doc doc__query name" />
                                <th className="doc doc__query type" />
                                <th className="doc doc__query title" />
                                <th className="doc doc__query optional" />
                                <th className="doc doc__query description" />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <b className="doc">material_id</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  Integer
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Material ID
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>The unique ID of the OER material.</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr className="no-bottom-border">
                        <td>
                          <b className="doc">oer_contents</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          Array
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          OER Material Contents
                        </td>
                        <td>
                          <span className="doc doc--small">Read only:</span>
                          <br />
                          true
                        </td>
                        <td>
                          An array of objects, each representing a content of
                          the open educational resource.
                        </td>
                      </tr>
                      <tr className="no-top-border">
                        <td colSpan={5}>
                          <b className="doc">oer_contents object properties</b>
                          <table className="table table-dashed-borders table--second-level">
                            <thead>
                              <tr>
                                <th className="doc doc__query name" />
                                <th className="doc doc__query type" />
                                <th className="doc doc__query title" />
                                <th className="doc doc__query optional" />
                                <th className="doc doc__query description" />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <b className="doc">content_id</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  Integer
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Content ID
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>
                                  The unique ID of the content of OER material.
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">type</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Content Type
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>
                                  The type of content. Possible types:
                                  text_extraction, transcription, or
                                  translation.
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">extension</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Content Extension
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>
                                  The extension of content. Possible types:
                                  plain, or dfxp.
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">value</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  JSON
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Content Value
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>
                                  The value of the content. Dependant of the
                                  content type and extension.
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <b className="doc">language</b>
                                </td>
                                <td>
                                  <span className="doc doc--small">Type:</span>
                                  <br />
                                  String
                                </td>
                                <td>
                                  <span className="doc doc--small">Title:</span>
                                  <br />
                                  Content Language
                                </td>
                                <td>
                                  <span className="doc doc--small">
                                    Read only:
                                  </span>
                                  <br />
                                  true
                                </td>
                                <td>
                                  The language of the OER material in ISO 639-1
                                  code.
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="anchor" id="version-1-get-content" />
                <h6 className="doc doc__subsection mt-5 mb-3">
                  Get information of a specific content of a specific open
                  educational resource
                </h6>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th className="doc doc__method request" />
                        <th className="doc doc__method route" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b className="doc">GET</b>
                        </td>
                        <td>
                          <b>
                            /oer_materials/{"{"}material_id{"}"}/contents/
                            {"{"}
                            content_id{"}"}
                          </b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="information">
                  Get information of a specific content of a specific open
                  educational resource.
                </p>
                <h6 className="mt-2">Path parameters</h6>
                <div className="table-responsive">
                  <table className="table table-dashed-borders">
                    <thead>
                      <tr>
                        <th className="doc doc__method request" />
                        <th className="doc doc__method route" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b className="doc">material_id</b>
                        </td>
                        <td>The unique ID of the open educational resource.</td>
                      </tr>
                      <tr>
                        <td>
                          <b className="doc">content_id</b>
                        </td>
                        <td>The unique ID of the OER content.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h6 className="mt-2">Response body attributes</h6>
                <div className="table-responsive">
                  <table className="table table-dashed-borders">
                    <thead>
                      <tr>
                        <th className="doc doc__query name" />
                        <th className="doc doc__query type" />
                        <th className="doc doc__query title" />
                        <th className="doc doc__query optional" />
                        <th className="doc doc__query description" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b className="doc">content_id</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          Integer
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Content ID
                        </td>
                        <td>
                          <span className="doc doc--small">Read only:</span>
                          <br />
                          true
                        </td>
                        <td>The unique ID of the content of OER material.</td>
                      </tr>
                      <tr>
                        <td>
                          <b className="doc">type</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          String
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Content Type
                        </td>
                        <td>
                          <span className="doc doc--small">Read only:</span>
                          <br />
                          true
                        </td>
                        <td>
                          The type of content. Possible types: text_extraction,
                          transcription, or translation.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b className="doc">extension</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          String
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Content Extension
                        </td>
                        <td>
                          <span className="doc doc--small">Read only:</span>
                          <br />
                          true
                        </td>
                        <td>
                          The extension of content. Possible types: plain, or
                          dfxp.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b className="doc">value</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          JSON
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Content Value
                        </td>
                        <td>
                          <span className="doc doc--small">Read only:</span>
                          <br />
                          true
                        </td>
                        <td>
                          The value of the content. Dependant of the content
                          type and extension.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b className="doc">language</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          String
                        </td>
                        <td>
                          <span className="doc doc--small">Title:</span>
                          <br />
                          Content Language
                        </td>
                        <td>
                          <span className="doc doc--small">Read only:</span>
                          <br />
                          true
                        </td>
                        <td>
                          The language of the OER material in ISO 639-1 code.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="anchor" id="version-1-get-content-value" />
                <h6 className="doc doc__subsection mt-5 mb-3">
                  Get the body value of a specific content of a specific open
                  educational resource
                </h6>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th className="doc doc__method request" />
                        <th className="doc doc__method route" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b className="doc">GET</b>
                        </td>
                        <td>
                          <b>
                            /oer_materials/{"{"}material_id{"}"}/contents/
                            {"{"}
                            content_id{"}"}/value
                          </b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="information">
                  Get the body value of a specific content of a specific open
                  educational resource.
                </p>
                <h6 className="mt-2">Path parameters</h6>
                <div className="table-responsive">
                  <table className="table table-dashed-borders">
                    <thead>
                      <tr>
                        <th className="doc doc__method request" />
                        <th className="doc doc__method route" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b className="doc">material_id</b>
                        </td>
                        <td>The unique ID of the open educational resource.</td>
                      </tr>
                      <tr>
                        <td>
                          <b className="doc">content_id</b>
                        </td>
                        <td>The unique ID of the OER content.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h6 className="mt-2">Response value</h6>
                <div className="table-responsive">
                  <table className="table table-dashed-borders">
                    <thead>
                      <tr>
                        <th className="doc doc__query name" />
                        <th className="doc doc__query type" />
                        <th className="doc doc__query description" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b className="doc">content body</b>
                        </td>
                        <td>
                          <span className="doc doc--small">Type:</span>
                          <br />
                          String
                        </td>
                        <td>
                          The body value of the content of a specific open
                          educational resource.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </this.Accordion>
            </div>
          </div>
        </div>
      </main>
    );
  };
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

  QueryTableRow = props => {
    const {
      name,
      type,
      title,
      optional,
      desc
    } = props;

    return (
      <tr>
        <td>
          <b className="doc">{name}</b>
        </td>
        <td>
          <span className="doc doc--small">Type:</span>
          <br />
          {type}
        </td>
        <td>
          <span className="doc doc--small">Title:</span>
          <br />
          {title}
        </td>
        <td>
          <span className="doc doc--small">Optional:</span>
          <br />
          {optional}
        </td>
        <td dangerouslySetInnerHTML={{ __html: desc }}></td>
      </tr>
    );
  };

  ResultTableRow = props => {
    const {
      name,
      type,
      title,
      desc
    } = props;

    return (
      <tr>
        <td>
          <b className="doc">{name}</b>
        </td>
        <td>
          <span className="doc doc--small">
            Type:
          </span>
          <br />
          {type}
        </td>
        <td>
          <span className="doc doc--small">
            Title:
          </span>
          <br />
          {title}
        </td>
        <td>
          <span className="doc doc--small">
            Read only:
          </span>
          <br />
          true
        </td>
        <td dangerouslySetInnerHTML={{ __html: desc }}></td>
      </tr>
    );
  };

  Content = () => {
    return (
      <div>
        <StandardHeader
          object={{
            subheader: "FEED",
            product: "API Documentation",
            description: "Read the X5GON REST API documentation",
            button: {
              text: "Read API",
              link: "products/feed#api",
            },
          }}
        />
        <div className="maxer mx-auto px-4 ml-1">
          <h4 className="p-128 maxer-880 text-purple">
            This document contains the X5GON platform REST API documentation. It
            contains all of the API routes and their explanation; the route, the
            possible parameters, and the response. The document is split into
            sections based on the functionality of the API routes.
          </h4>
          <this.Feed />
        </div>
      </div>
    );
  };
  render() {
    return (
      <div>
        <this.Content />
        <MoreProducts padding current="Feed" />
        <Footer />
      </div>
    );
  }
}

export default Feed;
