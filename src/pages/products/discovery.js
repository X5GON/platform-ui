import React from "react";
import "../../css/bootstrap.css";
import "../../css/homepage.css";

import { MoreProducts, Footer } from "../../Components";
import { StandardHeader, MakeParagraphs } from "../../ProductsComponents";

export default class Discovery extends React.Component {
  Description = () => {
    const contents = [
      [
        "The materials shown currently are text, video and audio. They are enriched them through a process called Wikification and stored into a database that contains data about user activities on the OER repositories that integrated the Connect Service, a library developed for acquiring behavior data. ",
      ],
    ];
    return (
      <div className="bg-white p-128 maxer mx-auto">
        <div className="mx-lg-1 px-4">
          <h4 className="maxer-880 pb-128 mb-0 text-purple">
            The material search enables anyone to search through the indexed OER
            materials that are connected in our network via our Connect service.
            The material search functionality is cross-lingual and functions as
            a Recommendation engine.
          </h4>
          <MakeParagraphs object={contents} />
          <p className="p2 p-128 pb-5 mb-3">Check the API</p>
          <this.Accordion />
        </div>
      </div>
    );
  };
  Accordion = () => {
    const targetID = "dAPI";
    const object = { title: "Discovery API" };
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
                {object.title}
                <span
                  id={targetID}
                  className="float-right collapse show plus-minus"
                ></span>
              </h4>
            </div>
          </div>

          <div id={targetID} className="collapse" aria-labelledby="headingOne">
            <div className="card-body">
              <this.ServiceApi />
            </div>
          </div>
        </div>
      </div>
    );
  };
  ServiceApi = () => (
    <div className="maxer-880">
      <div className="anchor" id="get-list-of-rec-materials" />
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
        Get a list of relevant open educational resources (10 per page).
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
                <span className="doc doc--small">Type:</span> String
              </td>
              <td>
                <span className="doc doc--small">Title:</span> Query Text
              </td>
              <td>
                <span className="doc doc--small">Optional:</span> false
              </td>
              <td>
                The seed text from which the system finds the relevant open
                educational resources.
              </td>
            </tr>
            <tr>
              <td>
                <b className="doc">type</b>
              </td>
              <td>
                <span className="doc doc--small">Type:</span> String
              </td>
              <td>
                <span className="doc doc--small">Title:</span> Material Type
              </td>
              <td>
                <span className="doc doc--small">Optional:</span> true
              </td>
              <td>
                The type of open educational resources. Possible options: all,
                video, audio and text.
                <b className="doc">Default value</b> is <b>all</b>.
              </td>
            </tr>
            <tr>
              <td>
                <b className="doc">page</b>
              </td>
              <td>
                <span className="doc doc--small">Type:</span> Integer
              </td>
              <td>
                <span className="doc doc--small">Title:</span> Page
              </td>
              <td>
                <span className="doc doc--small">Optional:</span> true
              </td>
              <td>
                The page number of the recommended list.
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
                <b className="doc">query</b>
              </td>
              <td>
                <span className="doc doc--small">Type:</span> JSON
              </td>
              <td>
                <span className="doc doc--small">Title:</span> Query Parameters
              </td>
              <td>
                <span className="doc doc--small">Read only:</span> true
              </td>
              <td>A JSON object containing the provided query parameters.</td>
            </tr>
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
                    <tr>
                      <td>
                        <b className="doc">text</b>
                      </td>
                      <td>
                        <span className="doc doc--small">Type:</span> String
                      </td>
                      <td>
                        <span className="doc doc--small">Title:</span> Query
                        Text
                      </td>
                      <td>
                        <span className="doc doc--small">Read only:</span> true
                      </td>
                      <td>The user provided query text.</td>
                    </tr>
                    <tr>
                      <td>
                        <b className="doc">type</b>
                      </td>
                      <td>
                        <span className="doc doc--small">Type:</span> String
                      </td>
                      <td>
                        <span className="doc doc--small">Title:</span> Material
                        Type
                      </td>
                      <td>
                        <span className="doc doc--small">Read only:</span> true
                      </td>
                      <td>The material type provided.</td>
                    </tr>
                    <tr>
                      <td>
                        <b className="doc">page</b>
                      </td>
                      <td>
                        <span className="doc doc--small">Type:</span> Integer
                      </td>
                      <td>
                        <span className="doc doc--small">Title:</span> Result
                        Page
                      </td>
                      <td>
                        <span className="doc doc--small">Read only:</span> true
                      </td>
                      <td>The page number of the results.</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="no-bottom-border">
              <td>
                <b className="doc">rec_materials</b>
              </td>
              <td>
                <span className="doc doc--small">Type:</span> Array
              </td>
              <td>
                <span className="doc doc--small">Title:</span> Recommended
                Materials
              </td>
              <td>
                <span className="doc doc--small">Read only:</span> true
              </td>
              <td>
                An array of objects, each representing an recommended open
                educational resource.
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
                        <span className="doc doc--small">Type:</span> Integer
                      </td>
                      <td>
                        <span className="doc doc--small">Title:</span> Material
                        ID
                      </td>
                      <td>
                        <span className="doc doc--small">Read only:</span> true
                      </td>
                      <td>The unique ID of the OER material.</td>
                    </tr>
                    <tr>
                      <td>
                        <b className="doc">weight</b>
                      </td>
                      <td>
                        <span className="doc doc--small">Type:</span> Float
                      </td>
                      <td>
                        <span className="doc doc--small">Title:</span>{" "}
                        Recommendation Weight
                      </td>
                      <td>
                        <span className="doc doc--small">Read only:</span> true
                      </td>
                      <td>
                        The number between 0 and 1 representing the relevance of
                        the OER material. Greater weight means bigger relevance.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b className="doc">url</b>
                      </td>
                      <td>
                        <span className="doc doc--small">Type:</span> String
                      </td>
                      <td>
                        <span className="doc doc--small">Title:</span> Material
                        URL
                      </td>
                      <td>
                        <span className="doc doc--small">Read only:</span> true
                      </td>
                      <td>The URL of the OER material.</td>
                    </tr>
                    <tr>
                      <td>
                        <b className="doc">title</b>
                      </td>
                      <td>
                        <span className="doc doc--small">Type:</span> String
                      </td>
                      <td>
                        <span className="doc doc--small">Title:</span> Material
                        Title
                      </td>
                      <td>
                        <span className="doc doc--small">Read only:</span> true
                      </td>
                      <td>The title of the OER material.</td>
                    </tr>
                    <tr>
                      <td>
                        <b className="doc">description</b>
                      </td>
                      <td>
                        <span className="doc doc--small">Type:</span> String
                      </td>
                      <td>
                        <span className="doc doc--small">Title:</span> Material
                        Description
                      </td>
                      <td>
                        <span className="doc doc--small">Read only:</span> true
                      </td>
                      <td>The description of the OER material.</td>
                    </tr>
                    <tr>
                      <td>
                        <b className="doc">provider</b>
                      </td>
                      <td>
                        <span className="doc doc--small">Type:</span> String
                      </td>
                      <td>
                        <span className="doc doc--small">Title:</span> Material
                        Provider
                      </td>
                      <td>
                        <span className="doc doc--small">Read only:</span> true
                      </td>
                      <td>The name of the OER materials provider.</td>
                    </tr>
                    <tr>
                      <td>
                        <b className="doc">language</b>
                      </td>
                      <td>
                        <span className="doc doc--small">Type:</span> String
                      </td>
                      <td>
                        <span className="doc doc--small">Title:</span> Material
                        Language
                      </td>
                      <td>
                        <span className="doc doc--small">Read only:</span> true
                      </td>
                      <td>
                        The language of the OER material in ISO 639-1 code.
                      </td>
                    </tr>
                    <tr className="no-bottom-border">
                      <td>
                        <b className="doc">wikipedia</b>
                      </td>
                      <td>
                        <span className="doc doc--small">Type:</span> Array
                      </td>
                      <td>
                        <span className="doc doc--small">Title:</span> Material
                        Wikipedia Concepts
                      </td>
                      <td>
                        <span className="doc doc--small">Read only:</span> true
                      </td>
                      <td>
                        An array of objects, each representing the most relevant
                        wikipedia concept of the material.
                      </td>
                    </tr>
                    <tr className="no-top-border">
                      <td colSpan={5}>
                        <b className="doc">wikipedia object properties</b>
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
                                <span className="doc doc--small">Type:</span>{" "}
                                String
                              </td>
                              <td>
                                <span className="doc doc--small">Title:</span>{" "}
                                Wikipedia Concept
                              </td>
                              <td>
                                <span className="doc doc--small">
                                  Read only:
                                </span>{" "}
                                true
                              </td>
                              <td>
                                The Wikipedia concept represented as an URL.
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b className="doc">support</b>
                              </td>
                              <td>
                                <span className="doc doc--small">Type:</span>{" "}
                                Integer
                              </td>
                              <td>
                                <span className="doc doc--small">Title:</span>{" "}
                                Wikipedia Concept Support
                              </td>
                              <td>
                                <span className="doc doc--small">
                                  Read only:
                                </span>{" "}
                                true
                              </td>
                              <td>
                                The amount of elements in the material that
                                support the given Wikipedia concept.
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
                        <span className="doc doc--small">Type:</span> String
                      </td>
                      <td>
                        <span className="doc doc--small">Title:</span> Material
                        Type
                      </td>
                      <td>
                        <span className="doc doc--small">Read only:</span> true
                      </td>
                      <td>The type of the OER material.</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="no-bottom-border">
              <td>
                <b className="doc">metadata</b>
              </td>
              <td>
                <span className="doc doc--small">Type:</span> JSON
              </td>
              <td>
                <span className="doc doc--small">Title:</span> Result Metadata
              </td>
              <td>
                <span className="doc doc--small">Read only:</span> true
              </td>
              <td>
                A JSON object containing the associated metadata. Helpful for
                navigating through the recommendations.
              </td>
            </tr>
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
                    <tr>
                      <td>
                        <b className="doc">num_or_materials</b>
                      </td>
                      <td>
                        <span className="doc doc--small">Type:</span> Integer
                      </td>
                      <td>
                        <span className="doc doc--small">Title:</span> Number of
                        Found Materials
                      </td>
                      <td>
                        <span className="doc doc--small">Read only:</span> true
                      </td>
                      <td>Number of most relevant relevant recommendations.</td>
                    </tr>
                    <tr>
                      <td>
                        <b className="doc">max_pages</b>
                      </td>
                      <td>
                        <span className="doc doc--small">Type:</span> Integer
                      </td>
                      <td>
                        <span className="doc doc--small">Title:</span> Max Pages
                      </td>
                      <td>
                        <span className="doc doc--small">Read only:</span> true
                      </td>
                      <td>The total number of result pages.</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="anchor" id="get-list-of-rec-materials-2" />
      <h6 className="doc doc__subsection mt-5 mb-3">
        Get a list of most relevant open educational resources (similar to{" "}
        <code>/search</code>)
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
                <span className="doc doc--small">Type:</span> String
              </td>
              <td>
                <span className="doc doc--small">Title:</span> Query Text
              </td>
              <td>
                <span className="doc doc--small">Optional:</span> false
              </td>
              <td>
                The seed text from which the system finds the relevant open
                educational resources.
              </td>
            </tr>
            <tr>
              <td>
                <b className="doc">type</b>
              </td>
              <td>
                <span className="doc doc--small">Type:</span> String
              </td>
              <td>
                <span className="doc doc--small">Title:</span> Material Type
              </td>
              <td>
                <span className="doc doc--small">Optional:</span> true
              </td>
              <td>
                The type of open educational resources. Possible options: all,
                video, audio and text.
                <b className="doc">Default value</b> is <b>all</b>.
              </td>
            </tr>
            <tr>
              <td>
                <b className="doc">page</b>
              </td>
              <td>
                <span className="doc doc--small">Type:</span> Integer
              </td>
              <td>
                <span className="doc doc--small">Title:</span> Page
              </td>
              <td>
                <span className="doc doc--small">Optional:</span> true
              </td>
              <td>
                The page number of the recommended list.
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
                <span className="doc doc--small">Type:</span> Array
              </td>
              <td>
                <span className="doc doc--small">Title:</span> Recommended
                Materials
              </td>
              <td>
                <span className="doc doc--small">Read only:</span> true
              </td>
              <td>
                An array of objects, each representing an recommended open
                educational resource.
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
                        <span className="doc doc--small">Type:</span> Integer
                      </td>
                      <td>
                        <span className="doc doc--small">Title:</span> Material
                        ID
                      </td>
                      <td>
                        <span className="doc doc--small">Read only:</span> true
                      </td>
                      <td>The unique ID of the OER material.</td>
                    </tr>
                    <tr>
                      <td>
                        <b className="doc">weight</b>
                      </td>
                      <td>
                        <span className="doc doc--small">Type:</span> Float
                      </td>
                      <td>
                        <span className="doc doc--small">Title:</span>{" "}
                        Recommendation Weight
                      </td>
                      <td>
                        <span className="doc doc--small">Read only:</span> true
                      </td>
                      <td>
                        The number between 0 and 1 representing the relevance of
                        the OER material. Greater weight means bigger relevance.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b className="doc">url</b>
                      </td>
                      <td>
                        <span className="doc doc--small">Type:</span> String
                      </td>
                      <td>
                        <span className="doc doc--small">Title:</span> Material
                        URL
                      </td>
                      <td>
                        <span className="doc doc--small">Read only:</span> true
                      </td>
                      <td>The URL of the OER material.</td>
                    </tr>
                    <tr>
                      <td>
                        <b className="doc">title</b>
                      </td>
                      <td>
                        <span className="doc doc--small">Type:</span> String
                      </td>
                      <td>
                        <span className="doc doc--small">Title:</span> Material
                        Title
                      </td>
                      <td>
                        <span className="doc doc--small">Read only:</span> true
                      </td>
                      <td>The title of the OER material.</td>
                    </tr>
                    <tr>
                      <td>
                        <b className="doc">description</b>
                      </td>
                      <td>
                        <span className="doc doc--small">Type:</span> String
                      </td>
                      <td>
                        <span className="doc doc--small">Title:</span> Material
                        Description
                      </td>
                      <td>
                        <span className="doc doc--small">Read only:</span> true
                      </td>
                      <td>The description of the OER material.</td>
                    </tr>
                    <tr>
                      <td>
                        <b className="doc">provider</b>
                      </td>
                      <td>
                        <span className="doc doc--small">Type:</span> String
                      </td>
                      <td>
                        <span className="doc doc--small">Title:</span> Material
                        Provider
                      </td>
                      <td>
                        <span className="doc doc--small">Read only:</span> true
                      </td>
                      <td>The name of the OER materials provider.</td>
                    </tr>
                    <tr>
                      <td>
                        <b className="doc">language</b>
                      </td>
                      <td>
                        <span className="doc doc--small">Type:</span> String
                      </td>
                      <td>
                        <span className="doc doc--small">Title:</span> Material
                        Language
                      </td>
                      <td>
                        <span className="doc doc--small">Read only:</span> true
                      </td>
                      <td>
                        The language of the OER material in ISO 639-1 code.
                      </td>
                    </tr>
                    <tr className="no-bottom-border">
                      <td>
                        <b className="doc">wikipedia</b>
                      </td>
                      <td>
                        <span className="doc doc--small">Type:</span> Array
                      </td>
                      <td>
                        <span className="doc doc--small">Title:</span> Material
                        Wikipedia Concepts
                      </td>
                      <td>
                        <span className="doc doc--small">Read only:</span> true
                      </td>
                      <td>
                        An array of objects, each representing the most relevant
                        wikipedia concept of the material.
                      </td>
                    </tr>
                    <tr className="no-top-border">
                      <td colSpan={5}>
                        <b className="doc">wikipedia object properties</b>
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
                                <span className="doc doc--small">Type:</span>{" "}
                                String
                              </td>
                              <td>
                                <span className="doc doc--small">Title:</span>{" "}
                                Wikipedia Concept
                              </td>
                              <td>
                                <span className="doc doc--small">
                                  Read only:
                                </span>{" "}
                                true
                              </td>
                              <td>
                                The Wikipedia concept represented as an URL.
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b className="doc">support</b>
                              </td>
                              <td>
                                <span className="doc doc--small">Type:</span>{" "}
                                Integer
                              </td>
                              <td>
                                <span className="doc doc--small">Title:</span>{" "}
                                Wikipedia Concept Support
                              </td>
                              <td>
                                <span className="doc doc--small">
                                  Read only:
                                </span>{" "}
                                true
                              </td>
                              <td>
                                The amount of elements in the material that
                                support the given Wikipedia concept.
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
                        <span className="doc doc--small">Type:</span> String
                      </td>
                      <td>
                        <span className="doc doc--small">Title:</span> Material
                        Type
                      </td>
                      <td>
                        <span className="doc doc--small">Read only:</span> true
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
    </div>
  );

  render() {
    const currentProduct = "Discovery";
    return (
      <div>
        <StandardHeader
          object={{
            product: currentProduct,
            description: "Search and find materials from all over the world",
            button: {
              text: "Try Now",
              link: "",
            },
          }}
        />
        <this.Description />
        <MoreProducts current={currentProduct} padding />
        <Footer />
      </div>
    );
  }
}
