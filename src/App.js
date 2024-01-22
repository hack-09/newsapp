import './App.css';

import React, { Component } from 'react'
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API 

  constructor() {
    super();
    this.state = {
      searchQuery: ''
    };
  }
  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  };

  state={
    progress: 0
  }

  setProgress=(progress) => {
    this.setState({ progress: progress });
  }

  render() {
    const pageSize = 10;
    return (
      <div>
        <BrowserRouter>
          <Navbar onSearch={this.handleSearch}/>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path='/' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='general' pageSize={pageSize} country='in' category='general' searchQuery={this.state.searchQuery}/>}></Route>
            <Route exact path='/general' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='general' pageSize={pageSize} country='in' category='general' searchQuery={this.state.searchQuery}/>}></Route>
            <Route exact path='/business' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='business' pageSize={pageSize} country='in' category='business' searchQuery={this.state.searchQuery}/>}></Route>
            <Route exact path='/entertainment' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='entertainment' pageSize={pageSize} country='in' category='entertainment' searchQuery={this.state.searchQuery}/>}></Route>
            <Route exact path='/health' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='health' pageSize={pageSize} country='in' category='health' searchQuery={this.state.searchQuery}/>}></Route>
            <Route exact path='/science' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='science' pageSize={pageSize} country='in' category='science' searchQuery={this.state.searchQuery}/>}></Route>
            <Route exact path='/sports' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='sports' pageSize={pageSize} country='in' category='sports' searchQuery={this.state.searchQuery}/>}></Route>
            <Route exact path='/technology' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='technology' pageSize={pageSize} country='in' category='technology' searchQuery={this.state.searchQuery}/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
