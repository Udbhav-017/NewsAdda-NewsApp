import './App.css';
import Navbar from './components/Navbar'
import News from './components/News'
import React, { Component } from 'react'
import {Switch, Route} from "react-router-dom"

export default class App extends Component {

  pageSize = 9;
  apiKey = process.env.REACT_APP_NEWS_API;


  render() {
    return (
      <div>
        <Navbar />
          <Switch>
            <Route exact path="/">
              <News key="general" category="general" pageSize={this.pageSize} apiKey={this.apiKey} />
            </Route>
            <Route exact path="/sports">
              <News key="sports" category="sports" pageSize={this.pageSize} apiKey={this.apiKey} />
            </Route>
            <Route exact path="/business">
              <News key="business" category="business" pageSize={this.pageSize} apiKey={this.apiKey} />
            </Route>
            <Route exact path="/health">
              <News key="health" category="health" pageSize={this.pageSize} apiKey={this.apiKey} />
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" category="entertainment" pageSize={this.pageSize} apiKey={this.apiKey} />
            </Route>
            <Route exact path="/science">
              <News key="science" category="science" pageSize={this.pageSize} apiKey={this.apiKey} />
            </Route>
            <Route exact path="/technology">
              <News key="technology" category="technology" pageSize={this.pageSize} apiKey={this.apiKey} />
            </Route>
            {/* <Route>
              <News keyword={keyword} pageSize={this.pageSize} apiKey={this.apiKey} />
            </Route> */}
          </Switch>
      </div>
    )
  }
}
