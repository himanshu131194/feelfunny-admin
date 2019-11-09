import React, {Component, Fragment} from 'react'
import {Switch, Route} from 'react-router-dom'

import Header from './components/partials/Header'
import Home from './components/Home'
import Crawler from './components/Crawler'


class MainRouter extends Component{
	  render(){
	  	  return(
             <Fragment>
               <Header/>
               <Switch>
               	   <Route exact path="/" component={Home}/>
                    <Route path="/crawler" component={Crawler}/>
               </Switch>
             </Fragment>
	  	  )
	  }
}

export default MainRouter;