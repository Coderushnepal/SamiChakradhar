
import React ,{ Component, useEffect } from 'react';
import Topbar from '../Topbar/Topbar';
import axios from '../axios';
import requests from '../requests';
import Row from '../Rows/Row'

 function searchingFor(searchText) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
        );
        return request;
    }
    fetchData();

}, []);
  return function(movie) {
      return movie?.title.toLowerCase().includes(searchText.toLowerCase()||searchText)
  }
}

 class Grid extends Component {
  constructor(props){
    super(props)
  
  this.state={
    isLoading:true,
    //data 
    data:[],
    searchFor:"",
  };
}
 
 
//dummydata call
fetchData=async() => {
  setTimeout(()=> {
    this.setState({
      data: movie?.title,
      isLoading:false,
    });
  },1000);
};
 
componentDidMount() {
  this.fetchData();
 
} 


setSearchText = (searchText) => {
  this.setState(
    {
      searchFor: searchText,
    }
    
  );
};
 
   render(){
    const { searchFor,data} = this.state;
       return(
         <div>
           <Topbar setSearchText={this.setSearchText}  />
           <main>
            {data.filter(searchingFor(searchFor)).map(Row => 
              <Row/> 
            )}

        </main> 
         
        </div>
       ); 
   }
}
 export default Grid


