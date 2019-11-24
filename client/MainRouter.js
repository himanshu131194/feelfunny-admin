import React, {Component, Fragment} from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Crawler from './components/Crawler'
import LocalData from './components/LocalData'
import ScrollTest from './components/ScrollTest'



class MainRouter extends Component{
	  render(){
	  	  return(
             <Fragment>
               <Switch>
               	    <Route exact path="/" component={Home}/>
                    <Route path="/crawler" component={Crawler}/>
                    <Route path="/local-posts" component={LocalData}/>
                    <Route path="/scroll-test" component={ScrollTest}/>
               </Switch>
             </Fragment>
	  	  )
	  }
}

export default MainRouter;