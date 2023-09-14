import React, { Component } from "react";
import loading from "./loading.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="" height="300px" width="300px" />
      </div>
    );
  }
}

export default Spinner;
