import './App.css';

import React, { Component } from 'react'
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      searchQuery: ''
    };
  }
  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  };

  render() {
    const pageSize = 10;
    return (
      <div>
        <BrowserRouter>
          <Navbar onSearch={this.handleSearch}/>
          <Routes>
            <Route exact path='/' element={<News key='general' pageSize={pageSize} country='in' category='general' searchQuery={this.state.searchQuery}/>}></Route>
            <Route exact path='/general' element={<News key='general' pageSize={pageSize} country='in' category='general' searchQuery={this.state.searchQuery}/>}></Route>
            <Route exact path='/business' element={<News key='business' pageSize={pageSize} country='in' category='business' searchQuery={this.state.searchQuery}/>}></Route>
            <Route exact path='/entertainment' element={<News key='entertainment' pageSize={pageSize} country='in' category='entertainment' searchQuery={this.state.searchQuery}/>}></Route>
            <Route exact path='/health' element={<News key='health' pageSize={pageSize} country='in' category='health' searchQuery={this.state.searchQuery}/>}></Route>
            <Route exact path='/science' element={<News key='science' pageSize={pageSize} country='in' category='science' searchQuery={this.state.searchQuery}/>}></Route>
            <Route exact path='/sports' element={<News key='sports' pageSize={pageSize} country='in' category='sports' searchQuery={this.state.searchQuery}/>}></Route>
            <Route exact path='/technology' element={<News key='technology' pageSize={pageSize} country='in' category='technology' searchQuery={this.state.searchQuery}/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
