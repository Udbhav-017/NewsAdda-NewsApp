import './App.css';
import Navbar from './components/Navbar'
import News from './components/News'
import React, { Component } from 'react'
import {Switch, Route} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  pageSize = 9;
  apiKey = process.env.REACT_APP_NEWS_API;

  state={
    progress:0,
    keyword:''
  }

  setProgress = (progress) =>{
    this.setState({progress:progress})
  }
  
  getKeyword = (keyword) =>{
    this.setState({keyword:keyword})
  }


  render() {
    return (
      <>
        <LoadingBar color='#f11946' progress= {this.state.progress}/>
        <Navbar getKeyword = {this.getKeyword}/>
          <Switch>
            <Route exact path="/">
              <News  setProgress={this.setProgress} key="general" category="general" pageSize={this.pageSize} apiKey={this.apiKey} />       
                                               
                                               {/* unique [Key] is used to force rerender component */}
            </Route>
            <Route exact path="/sports">
              <News  setProgress={this.setProgress} key="sports" category="sports" pageSize={this.pageSize} apiKey={this.apiKey} />
            </Route>
            <Route exact path="/business">
              <News  setProgress={this.setProgress} key="business" category="business" pageSize={this.pageSize} apiKey={this.apiKey} />
            </Route>
            <Route exact path="/health">
              <News  setProgress={this.setProgress} key="health" category="health" pageSize={this.pageSize} apiKey={this.apiKey} />
            </Route>
            <Route exact path="/entertainment">
              <News  setProgress={this.setProgress} key="entertainment" category="entertainment" pageSize={this.pageSize} apiKey={this.apiKey} />
            </Route>
            <Route exact path="/science">
              <News  setProgress={this.setProgress} key="science" category="science" pageSize={this.pageSize} apiKey={this.apiKey} />
            </Route>
            <Route exact path="/technology">
              <News  setProgress={this.setProgress} key="technology" category="technology" pageSize={this.pageSize} apiKey={this.apiKey} />
            </Route>
            <Route exact path='/:slug'>
              <p>search</p>
              <News  setProgress={this.setProgress} key={`${this.state.keyword}`} keyword={this.state.keyword} pageSize={this.pageSize} apiKey={this.apiKey} />
            </Route>
          </Switch>
      </>
    )
  }
}
