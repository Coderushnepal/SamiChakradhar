import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Beer from "./Beer";
 import * as toast from "../../../utils/toast";
import { Header, Spinner } from "../../common";
import { fetchBeers } from "../../../services/beerService";

class BeerGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // isLoading: true,
      beers: [],
      pageInfo: { page: 0, size: 25},
      hasMore: true,
      searchFor: "",
      hasFilter: false,
    };
  }


  // toggleLoading = (value) => {
  //   this.setState({
  //     isLoading: value,
  //   });
  // };

  scrollParentRef = null;

  
  fetchBeers = async () => {
    try {
      const { beers, pageInfo, searchFor, hasFilter } = this.state;
      let { page, size } = pageInfo;

      
      if(hasFilter) {
          page = 0
      }

      // this.toggleLoading(true);
      const data = await fetchBeers(page + 1, size, searchFor);

      this.setState({
        beers: hasFilter ? data : [...beers, ...data],
        // isLoading: false,
        pageInfo: {
          ...pageInfo,
          page: data.length ? page + 1 : page,
          
        },
        hasMore: !!data.length,
        hasFilter: false,
      });
      
    } catch (error) {
      const errorMsg = error.response.data.message;

      // this.toggleLoading(false)

       toast.error({ title: "Oh Snap!!", message: errorMsg });
    }
  };

  setSearchText = (searchText) =>  {
    this.setState({
      searchFor: searchText,
      hasFilter: true,
    },
     () => this.fetchBeers()
    );
};


  componentDidMount() {
    this.fetchBeers();
  }

  render() {
    const { beers, hasMore } = this.state;

    return (
      <div>
        <Header setSearchText={this.setSearchText} />

        
          <main>
            <div className="container" ref={(r) => (this.scrollParentRef = r)}>
              {/* <Counter /> */}
              <InfiniteScroll 
              dataLength={beers.length}
              next={this.fetchBeers}
              hasMore={hasMore}
              loader={<Spinner />}
              >
                
                  {beers.map((beer) => (
                   <Beer key={beer.id} info={beer} />
                   ))}
              </InfiniteScroll>
              
            </div>
          </main>
        
      </div>
    );
  }
}

export default BeerGrid;
