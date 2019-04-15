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
	  	 this.props.setDefaultState(1);
         document.querySelector(e.currentTarget.dataset.model).classList.remove('display-none')
	  }
	  userProfile = (e)=>{
	  	  document.querySelector(e.target.dataset.toggle).classList.toggle('display-none')
	  }
	  submitLogin = (e)=>{
           e.preventDefault();
           this.setState({loading: 1})
           const email = (e.target.elements['login_email'].value).trim(),
                 password = (e.target.elements['login_password'].value).trim();
           if(email.length>0 && password.length>0){
           	  this.props.loginUser({email, password}, (err)=>{
                    if(err)
                    	console.log(err)
                    localStorage.setItem(CONFIG.ACCESS_TOKEN, this.props.auth.token);
                    this.setState({loading: 0})
                    document.querySelector("#close_loginmodel").click()
           	  });
           }
	  }
	  submitSignup = (e)=>{
           e.preventDefault();
           const usrname = (e.target.elements['signup_name'].value).trim(),
                 email = (e.target.elements['signup_email'].value).trim(),
                 password = (e.target.elements['signup_password'].value).trim();
           if(usrname.length>0 && email.length>0 && password.length>0){
           	  this.props.addUser({usrname, email, password}, (err)=>{
                    if(err)
                    	console.log(err)
                    localStorage.setItem(CONFIG.ACCESS_TOKEN, this.props.auth.token);
                    document.querySelector("#close_signupmodel").click();
           	  });
           }
	  }
      render(){
      	return(
          <Fragment>
               <header className="main-header">
		      	  <div className="main-header-box">
		      	  	 <div className="flex-center main-logo font-bold logo"><a href="#">MEMES</a></div>
		      	  	 <div className="flex align-center main-header-account">
                        {!this.props.auth
                            ? 
	                        <Fragment>
	                         <a href="#" className="uppercase margin-ryt-30" data-model="#login_model" onClick={this.openModel}>Login</a>
			      	  	 	 <div><button className="uppercase header-actions" data-model="#signup_model" onClick={this.openModel}>Signup</button></div>
	                        </Fragment>
	                        :
	                        <Fragment>
	                        	 <div className="upload-container"><button className="uppercase header-actions" data-model="#upload_model" onClick={this.openModel}><i className="icon wb-plus font-bold padding-ryt-10"></i>upload new</button></div>
		      	  	 	         <div className="upload-container-box flex-center">
		      	  	 	            <button className="userprofile-pic font-16 pointer" data-toggle="#profile_opt" onClick={this.userProfile}>S</button>
                                    <ul className="profile-options display-none" id="profile_opt">
                                       <li><a href="#">My Profile</a></li>
                                       <li><a href="#">Settings</a></li>
                                       <li><a href="#" onClick={this.props.logoutUser}>Logout</a></li>
                                    </ul>
		      	  	 	         </div>
	                        </Fragment>
                        }
		      	  	 </div>
		      	  </div>
		       </header>
		        <div className="model-backdrop display-none" id="login_model">
		              <div className="model-box">
		              	 <header className="flex">
		              	 	<h3>Login</h3>
					        <a href="#" data-model="#login_model" id="close_loginmodel" onClick={this.closeModel}>
					          <svg className="svg-icons-20 pointer" viewBox="0 0 612 612">
					          	   <use href="/icons/sprites.svg#croos_icon" />
							  </svg>
					        </a>
		              	 </header>
		              	 <main>
		              	 	  <div className="social-login-box margin-top-20 border-botm">
		              	 	  	  <div className="font-14 color-90949c">Connect with a social network</div>
		              	 	  	  <div className="flex margin-top-15 social-logins">
		              	 	  	  	 <div><button className="btn-social-login google-login">
										<svg viewBox="0 0 512 512" className="svg-icons-30 margin-ryt-15">
									  	 <use href="/icons/sprites.svg#googleplus_icon" />
										</svg>
		              	 	  	  	 Google</button>
		              	 	  	  	 </div>
		              	 	  	  	 <div><button className="btn-social-login facebook-login">
		              	 	  	  	 	<svg viewBox="0 0 216 216" className="svg-icons-30 margin-ryt-15">
                                             <use href="/icons/sprites.svg#facebooklogin_icon" />
		                                </svg>
		              	 	  	  	 Facebook</button></div>
		              	 	  	  </div>
		              	 	  </div>
		                      <div className="margin-top-20">
		                      	<div className="font-14 color-90949c">Log in with your email address</div>
		                      	<form method="post" onSubmit={this.submitLogin}>
			                      <div className="margin-top-15">
			              	 	  	<input type="text" className="model-input font-14" name="login_email" placeholder="Your email" />
			              	 	  </div>
			              	 	  <div className="margin-top-15">
			              	 	  	<input type="password" className="model-input font-14" name="login_password" placeholder="Your password"/>
			              	 	  </div>
			              	 	  <div className="margin-top-15 txt-center">
			              	 	    {this.state.loading==1 
			              	 	     ? <div id="canvas-loader" className="loader-circular"></div>
			              	 	     : <button className="uppercase btn btn-default">Log in</button>
			              	 	     }
			              	 	  </div>
		                      	</form>
		                      </div>
		              	 </main>
		              	 <footer></footer>
		              </div>
		        </div>
		        <div className="model-backdrop display-none" id="signup_model">
		              <div className="model-box">
		              	 <header className="flex">
		              	 	<h3>Hey there!</h3>
					        <a href="#" data-model="#signup_model" id="close_signupmodel" onClick={this.closeModel}>
					            <svg className="svg-icons-20 pointer" viewBox="0 0 612 612">
							          	    <use href="/icons/sprites.svg#croos_icon" />
								</svg>
					        </a>
		              	 </header>
		              	 <main>
		              	 	  <div className="social-login-box margin-top-20 border-botm">
		              	 	  	  <div className="font-14 color-90949c">Connect with a social network</div>
		              	 	  	  <div className="flex margin-top-15 social-logins">
		              	 	  	  	 <div><button className="btn-social-login google-login">
										  <svg viewBox="0 0 512 512" className="svg-icons-30 margin-ryt-15">
									  	  <use href="/icons/sprites.svg#googleplus_icon" />
										  </svg>
		              	 	  	  	 Google</button>
		              	 	  	  	 </div>
		              	 	  	  	 <div><button className="btn-social-login facebook-login">
		              	 	  	  	 	<svg viewBox="0 0 216 216" className="svg-icons-30 margin-ryt-15">
		                                     <use href="/icons/sprites.svg#facebooklogin_icon" />
		                                </svg>
		              	 	  	  	 Facebook</button></div>
		              	 	  	  </div>
		              	 	  </div>
		                      <div className="margin-top-20">
		                      	<div className="font-14 color-90949c">Sign up with your email address</div>
		                      	<form method="post" onSubmit={this.submitSignup}>
		                          <div className="margin-top-15">
			              	 	  	<input type="text" className="model-input font-14" id="signup_name" placeholder="Your username" />
			              	 	  </div>
			                      <div className="margin-top-15">
			              	 	  	<input type="email" className="model-input font-14" id="signup_email" placeholder="Your email" />
			              	 	  </div>
			              	 	  <div className="margin-top-15">
			              	 	  	<input type="password" className="model-input font-14" id="signup_password" placeholder="Your password" />
			              	 	  </div>
			              	 	  <div className="margin-top-15 txt-center">
			              	 	  	<button className="uppercase btn btn-default">Sign up</button>
			              	 	  </div>
		                      	</form>
		                      </div>
		              	 </main>
		              	 <footer></footer>
		              </div>
		        </div>
		        <UploadPosts/>
          </Fragment>
        )
      }
}

export default connect(state=>state, actions)(Header);





