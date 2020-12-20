import React from "react";
import "../../css/bootstrap.css";
import "../../css/homepage.css";

import { MoreProducts, Footer } from "../../Components";
import { StandardHeader, MakeParagraphs } from "../../ProductsComponents";

export default class Moodle extends React.Component {
  Description = () => {
    const contents = [];
    return (
      <div className="bg-white p-128 maxer mx-auto">
        <div className="mx-lg-1 px-4">
          <h4 className="maxer-880 pb-128 mb-0 text-purple">
            Discover our Moodle plugin.
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
