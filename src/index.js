import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./utility/Header";
import Footer from "./utility/Footer";
import Counter from "./counter";
import MoviePage from "./MovieComponents/moviepage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header></Header>
    <div className="p-2 m-2 row text-center">
      <Counter></Counter>
      <MoviePage />
    </div>
    <Footer></Footer>
  </div>
);
