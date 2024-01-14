import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


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
    }
    document.title = `${this.capitalizeFLetter(this.props.category)} - NewsMonkey`;
  }

  capitalizeFLetter=(string)=> {
    return (string[0].toUpperCase() + string.slice(1));
  }

  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=040d388cc1394f2bb0565fd328ca90f5&page=${this.state.page}&pageSize=${this.props.pageSize}&q=${this.props.searchQuery}`;
    this.setState({loading: true}); 
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
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

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center my-4">NewsMonkey - Top {this.capitalizeFLetter(this.props.category)} Headlines </h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt } source={element.source.name} />
          </div>
          })
        }  
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
