import React from "react";
import "../../css/bootstrap.css";
import "../../css/homepage.css";

import { MoreProducts, Footer } from "../../Components";
import { StandardHeader, MakeParagraphs } from "../../ProductsComponents";

export default class Moodle extends React.Component {
  Description = () => {
    const contents = [
      [
        "Using the OER collection and the AI tools developed within X5GON, a new learning activity is designed following the Moodle specification and workflow, as well as the new-fashioned spirit of using AI to support learning. The X5-Moodle uses:",
        "•	The X5GON Search Engine to find more OERs, and",
        "•	The X5-Recommend item-based system available via the Learning Analytics Machine to provide recommended OERs based on the resources’ usage history.",
        "The plugin can be used through 2 different perspectives: the teacher and the students.",
        "From the teachers point of view, the plugin is mainly a configuration interface in which they can choose between 3 functionalities that can be seen by the students: The X5GON Search Engine, the X5-Recommend, and the X5-Playlist provided by the X5Learn (see Section 10). The teacher sets up the required configuration of the specific functionality, such as the Search Engine initialization, playlist upload, and other. Figure 9 shows the Moodle interface where the teacher configures the plugin functionalities.",
        "Once the plugin is instantiated inside the Moodle course, the students can see the plugin functionalities configured by the teacher. The X5GON Search Engine allows the students search for new OER resources. In addition, they are able to see a list of the most frequent search queries performed by the course participants. Figure 10 shows an example of the configured X5GON Search Engine view in the Moodle.",
        "The X5-Playlist functionality allows the teacher to embed a playlist that was created through the X5Learn service. The published playlists can be embedded into the Moodle course via the plugin, making it available to the students. Figure 11 shows the embedded playlist in the Moodle course.",
        "The X5-Recommend functionality provides OER recommendations based on the students current work. It also provides viewing statistics, e.g. how many times an OER was viewed by the students’ fellows, as well as additional OER metadata. Figure 12 shows an example of the OER recommendation list.",
        "With the objective of improving the learning experience of both the teacher and students, the X5-Moodle is designed to offer several features that hopefully will lead us to achieving our objective. These features include:",
        "•	OER based search engine through the rich X5GON OER network.",
        "•	Usage-focused functionalities, instead of tracking the users.",
        "•	X5-Trends, the most popular search queries based on the viewers’ history.",
        "•	Extra information about the OERs, including the history of views, the OER metadata, and the enriched information such as keywords, concepts, difficulty score, and other.",
        "•	X5-Recommend. Built as a linear combination of the recommendations from the item-based X5GON recommendation system and the popularity of the viewed OERs in the Moodle course. The recommendations are systematically evolving (with popular and new resources) with the students exploration as well as the Moodle class shifting their attention to new OERs.",
      ],
    ];
    return (
      <div className="bg-white p-128 maxer mx-auto">
        <div className="mx-lg-1 px-4">
          <h4 className="maxer-880 pb-128 mb-0 text-purple">
            The X5-Moodle is a Moodle activity plugin implemented based on 2 key
            ideas: <br /> 1) providing AI-based smart tools for delivering open
            resources as a support during the course session, and
            <br /> 2) evolving the tools through the usage-based approaches
            rather than focusing on the user data. The aim of the plugin is to
            provide the teachers and students the best learning experience.
          </h4>
          <MakeParagraphs object={contents} />
        </div>
      </div>
    );
  };

  render() {
    const currentProduct = "Moodle plugin";
    return (
      <div>
        <StandardHeader
          object={{
            product: currentProduct,
            description: "",
            button: {
              text: "Try Now",
              externalLink: "https://wp3.x5gon.org/moodle/login/index.php",
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
