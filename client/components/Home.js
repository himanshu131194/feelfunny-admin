import React, {Component, Fragment} from 'react';
import axios from 'axios';
import CONFIG from '../../config';
//import axios from axios;

class Home extends Component{
	  state = {
	  	 users: []
	  }
	  componentDidMount(){
         window.onclick = function(e){
               if(e.target.classList.contains('model-backdrop'))
                  e.target.classList.add('display-none');
         }
         this.listUsers();
      }
      closeModel = (e)=>{
           document.querySelector(e.currentTarget.dataset.model).classList.add('display-none')
      }
      openModel = (e)=>{
           this.clearInputs()
           document.querySelector(e.currentTarget.dataset.model).classList.remove('display-none')
           let user = e.currentTarget.dataset.user;
      }
      clearInputs(){
           let a = document.getElementsByClassName('model-input');
           for(let x of a)
               x.value = '';
      }
      listUsers = async ()=>{
      	  const {data} = await axios.get(`${CONFIG.API_URL}/api/list-users`);
      	  this.setState({users: data});
      }
      render(){
      	 return(
           <Fragment>
           <main className="main-content-box">
        	 <div className="flex main-content-wrapper">
	        	 <div className="sidebar-content">
	        	 		<div className="popular-section">
        	 			   <div className="popular-section-box">
        	 			   	<a href="#" className="popular-section-links popular-selected">
                            <span className="padding-ryt-10">
                            	<svg className="svg-icons" viewBox="0 0 533.333 533.333">
								   <use href="/icons/sprites.svg#hotcontent_icon" />
								</svg>
                            </span>
        	 			   	Hot</a>
        	 			   </div>
        	 			   <div className="popular-section-box">
    	 			   	        <a href="#" className="popular-section-links">
	                            <span className="padding-ryt-10">
									<svg viewBox="0 0 512 512" className="svg-icons">
										<use href="/icons/sprites.svg#trending_icon" />
									</svg>
	                            </span>
	        	 			   	Trending</a>
        	 			   </div>
        	 			   <div className="popular-section-box">
    	 			   	        <a href="#" className="popular-section-links">
	                            <span className="padding-ryt-10">
									<svg className="svg-icons" viewBox="0 0 47.001 47.001">
										<use href="/icons/sprites.svg#fresh_icon" />
									</svg>
	                            </span>
	        	 			   	Fresh</a>
        	 			   </div>
	        	 		</div>
	        	 </div>
	        	 <div className="main-content">
                
		                <div className="model-backdrop display-none" id="user_model">
		                      <div className="model-box">
		                           <header className="flex">
		                               <h3>Add Section</h3>
		                            <a href="#" data-model="#user_model" id="close_signupmodel" onClick={this.closeModel}>
		                                <svg className="svg-icons-20 pointer" viewBox="0 0 612 612">
		                                              <use href="/icons/sprites.svg#croos_icon" />
		                                </svg>
		                            </a>
		                           </header>
		                           <main>
		                              <div className="margin-top-20">
		                                  <div className="font-14 color-90949c">New section for post categorization</div>
		                                  <form method="post" onSubmit={this.submitSignup}>
		                                  <div className="margin-top-15">
		                                         <input type="text" className="model-input font-14" name="edit_name" placeholder="Section value" />
		                                     </div>
		                                  <div className="margin-top-15">
		                                         <input type="text" className="model-input font-14" name="edit_email" placeholder="Section describe" />
		                                     </div>
		                                     <div className="margin-top-15">
		                                         <input type="text" className="model-input font-14" name="edit_pic" placeholder="Section url" />
		                                     </div>
		                                     <div className="margin-top-15 txt-center">
		                                         <button className="uppercase btn btn-default">submit</button>
		                                     </div>
		                                  </form>
		                              </div>
		                           </main>
		                           <footer></footer>
		                      </div>
		                </div>

                          <div className="users_list">
                               {this.state.users.length==0
                               	? <div id="canvas-loader" className="loader-circular"></div>
                               	: this.state.users.data.map((result)=>{
                               		 return (
			                               	 <div className="user margin-botm-10" id="123456" key={result._id}>
				                                  <div className="flex space-bw margin-botm-10">
				                                          <div className="user-pic margin-ryt-10">
				                                                 <img className="user_img" src={result.profile_pic && result.profile_pic.original && result.profile_pic.original.url}/>
				                                          </div>
				                                          <div>
				                                                 <div className="flex space-bw">
				                                                     <div className="user_name capitalize">
				                                                         {result.name} 
				                                                  </div>
				                                                 <div>
				                                                        <a href="#" data-model="#user_model" data-user="123456" className="uppercase color-2196f3" onClick={this.openModel}>edit</a>
				                                                 </div> 
				                                              </div>  
				                                             <div className="user_email">
                                                                   {result.email}
				                                             </div>
				                                          </div>
				                                   </div>
				                                   <div>
				                                          <div className="flex margin-botm-10 space-bw">
				                                              <div>Total comments <span className="padding-lft-8">5</span></div>
				                                              <div className="uppercase"><a href="#" className="color-2196f3">new comment</a></div>
				                                          </div>
				                                          <div className="flex margin-botm-10 space-bw">
				                                               <div>Total upvotes <span className="padding-lft-8">10</span></div>
				                                               <div className="uppercase"><a href="#" className="color-2196f3">upvote new</a></div>
				                                          </div>
				                                          <div className="flex margin-botm-10 space-bw">
				                                               <div>Total downvotes <span className="padding-lft-8">12</span></div>
				                                               <div className="uppercase"><a href="#" className="color-2196f3">downvote new</a></div>
				                                          </div>
				                                   </div>
			                                 </div>
                               		 )
                               	})

                                }
                          </div>




			 </div>
	        </div>
           </main>
           </Fragment>
      	 )
      }
}

export default Home;