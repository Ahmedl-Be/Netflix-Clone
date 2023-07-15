import React from "react";
import Row from "./row/Row";
import requests from "./fetchingData/requests";
import Banner from "./banner/Banner";
import "./App.css"
import NavBar from "./navBar/NavBar"

function App() {
  return (
    <div className="app">
    <NavBar/>
    <Banner />
    <Row  title="Netflix Originals"
    fetchUrl ={requests.fetchNetflixOriginals}
    isLargRow
    />
    <Row  title="Trending Now" fetchUrl ={requests.fetchTrending}/>
    <Row  title="Top Rated" fetchUrl ={requests.fetchTopRated}/>
    <Row  title="Action Movies" fetchUrl ={requests.fetchActionMovies}/>
    <Row  title="Comedy Movies" fetchUrl ={requests.fetchComedyMovies}/>
    <Row  title="Horror Movies" fetchUrl ={requests.fetchHorrorMovies}/>
    <Row  title="Romance Movies" fetchUrl ={requests.fetchRomanceMovies}/> 
    <Row  title="Documantaries" fetchUrl ={requests.fetchDocumantaries}/>
    </div>
  );
}
export default App;
// C:\Users\20101\AppData\Roaming\npm