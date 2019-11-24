import React, {Component, Fragment} from 'react'
import CONFIG from '../../../config'
import {connect} from 'react-redux'
import * as actions from '../actions'
import UploadPosts from '../UploadPosts'

class Header extends Component{
	  state = {
           loading: 0,
           uploadState: 0
	  }
	  constructor(){
	  	 super();
	  }
	  componentDidMount(){
         window.onclick = function(e){
		       if(e.target.classList.contains('model-backdrop'))
		          e.target.classList.add('display-none');
		 }
		this.props.authUser()
	  }
	  closeModel = (e)=>{
	  	 document.querySelector(e.currentTarget.dataset.model).classList.add('display-none')
	  }
	  openModel = (e)=>{
	  	 this.clearInputs()
	  	 this.props.setDefaultState(1);
         document.querySelector(e.currentTarget.dataset.model).classList.remove('display-none')
	  }
	  userProfile = (e)=>{
	  	  document.querySelector(e.target.dataset.toggle).classList.toggle('display-none')
	  }
	  clearInputs(){
	  	 let a = document.getElementsByClassName('model-input');
	  	 for(let x of a)
	  	 	x.value = '';
	  }
      render(){
      	return(
          <Fragment>
               <header className="main-header">
		      	  <div className="main-header-box">
		      	  	 <div className="flex-center main-logo font-bold logo"><a href="#">MEMES</a></div>
		      	  	 <div className="flex align-center main-header-account">
	                        <Fragment>
	                        	 <div className="upload-container"><button className="uppercase header-actions" data-model="#upload_model" onClick={this.openModel}><i className="icon wb-plus font-bold padding-ryt-10"></i>upload new</button></div>
		      	  	 	         {/* <div className="upload-container-box flex-center">
		      	  	 	            <button className="userprofile-pic font-16 pointer" data-toggle="#profile_opt" onClick={this.userProfile}>S</button>
                                    <ul className="profile-options display-none" id="profile_opt">
                                       <li><a href="#">My Profile</a></li>
                                       <li><a href="#">Settings</a></li>
                                       <li><a href="#" onClick={this.props.logoutUser}>Logout</a></li>
                                    </ul>
		      	  	 	         </div> */}
	                        </Fragment>
		      	  	 </div>
		      	  </div>
		       </header>
		        <UploadPosts/>
          </Fragment>
        )
      }
}

export default connect(state=>state, actions)(Header);





