import React from "react";
import "../../css/bootstrap.css";
import "../../css/homepage.css";

import { MoreProducts, Footer } from "../../Components";
import { StandardHeader, MakeParagraphs } from "../../ProductsComponents";

export default class Code extends React.Component {
  Description = () => {
    const contents = [];
    return (
      <div className="bg-white p-128 maxer mx-auto">
        <div className="mx-lg-1 px-4">
          <h4 className="maxer-880 pb-128 mb-0 text-purple">
            Complete code on Github
          </h4>
          <MakeParagraphs object={contents} />
        </div>
      </div>
    );
  };

  render() {
    const currentProduct = "Code";
    return (
      <div>
        <StandardHeader
          object={{
            product: currentProduct,
            description: "Github code",
            button: {
              text: "Try Now",
              externalLink: "https://github.com/X5GON",
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
