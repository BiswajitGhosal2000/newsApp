import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News key="general" headline="Top Headlines" category="general" />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                headline="Top Headlines-Business"
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                headline="Top Headlines-Entertainment"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                headline="Top Headlines-Health"
                category="health"
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                headline="Top Headlines-science"
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                key="sports"
                headline="Top Headlines-Sports"
                category="sports"
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                headline="Top Headlines-Technology"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </div>
    );
  }
}
