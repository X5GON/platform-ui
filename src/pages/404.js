import React from "react";
import { Navbar, Footer } from "../Components";

class Products extends React.Component {
  render() {
    return (
      <div className="bg-black text-white">
        <Navbar />
        <div
          className="bg-sky text-center"
          style={{ minHeight: "50vh", paddingTop: "15vh" }}
        >
          <h1>ERROR 404:</h1> This site does not exist
        </div>
        <Footer />
      </div>
    );
  }
}

export default Products;
