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
    return (
      <div>
        <BrowserRouter>
          <Navbar onSearch={this.handleSearch}/>
          <Routes>
            <Route exact path='/' element={<News key='general' pageSize={5} country='in' category='general' query={this.state.searchQuery}/>}></Route>
            <Route exact path='/general' element={<News key='general' pageSize={5} country='in' category='general' query={this.state.searchQuery}/>}></Route>
            <Route exact path='/business' element={<News key='business' pageSize={5} country='in' category='business' query={this.state.searchQuery}/>}></Route>
            <Route exact path='/entertainment' element={<News key='entertainment' pageSize={5} country='in' category='entertainment' query={this.state.searchQuery}/>}></Route>
            <Route exact path='/health' element={<News key='health' pageSize={5} country='in' category='health' query={this.state.searchQuery}/>}></Route>
            <Route exact path='/science' element={<News key='science' pageSize={5} country='in' category='science' query={this.state.searchQuery}/>}></Route>
            <Route exact path='/sports' element={<News key='sports' pageSize={5} country='in' category='sports' query={this.state.searchQuery}/>}></Route>
            <Route exact path='/technology' element={<News key='technology' pageSize={5} country='in' category='technology' query={this.state.searchQuery}/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
