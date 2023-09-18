import "./App.css";

import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

import Navbar from "./components/Navbar";
import News from "./components/News";


const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(10)}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" category="general" />}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" category="business" />} ></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" category="entertainment" />} ></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" category="health" />} ></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" category="science" />} ></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" category="sports" />} ></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" category="technology" />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
