import React from "react";
import Row from '../Rows/Row';
import requests from '../requests';
import Banner from '../Banner/Banner';


class Home extends React.Component {
  render() {

    return (
  
      <div className = "Home">
       
        <Banner />
        <Row title="NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals}/>
        <Row title="Trending Now" fetchUrl = {requests.fetchTrending} />
        <Row title="Top rated" fetchUrl = {requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl = {requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl = {requests.fetchRomanceMovies} />
        <Row title="Documentares" fetchUrl = {requests.fetchDocumentaries} />

        

   
    </div>
     )
    }
}

export default Home;

//c727fa048d12c0e056aa7b5c30c33384
