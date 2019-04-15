import React, {Component, Fragment} from 'react'
import {Switch, Route} from 'react-router-dom'

import Header from './components/partials/Header'
import Home from './components/Home'


class MainRouter extends Component{
	  render(){
	  	  return(
             <Fragment>
               <Header/>
               <Switch>
               	   <Route exact path="/" component={Home}/>
               </Switch>
             </Fragment>
	  	  )
	  }
}

export default MainRouter;