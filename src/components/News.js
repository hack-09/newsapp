import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {  
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page : 1,
      totalResults: 0,
    }
    document.title = `${this.capitalizeFLetter(this.props.category)} - NewsMonkey`;
  }

  capitalizeFLetter=(string)=> {
    return (string[0].toUpperCase() + string.slice(1));
  }

  async updateNews(){
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}&q=${this.props.searchQuery}`;
    this.setState({loading: true}); 
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({ articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }
  
  async componentDidMount() {
    this.updateNews();
  }

  handlePrevious = async() => {
    await this.setState({page : this.state.page-1});
    this.updateNews();
  }

  handleNext = async() => {
    await this.setState({page : this.state.page+1});
    this.updateNews();
  }

  fetchMoreData = async() => {
    this.setState({page : this.state.page+1}); 
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}&q=${this.props.searchQuery}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center my-4">NewsMonkey - Top {this.capitalizeFLetter(this.props.category)} Headlines </h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData} 
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
          <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt } source={element.source.name} />
            </div>
            })
          }  
          </div>
        </div>

        </InfiniteScroll>
      </>
    )
  }
}

export default News
