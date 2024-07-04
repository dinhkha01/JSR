import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div>
        <h1>Hello Pro </h1>
        <Link to={"/admin/product"}>bam ne</Link>
      </div>
    </div>
  );
};

export default HomePage;
