import React, {Component, Fragment} from 'react'
import _ from 'lodash'
import CONFIG from '../../config'
import {connect} from 'react-redux'
import * as actions from './actions'


class UploadPosts extends Component{
	  state = {
	  	  // uploadStage: 1,
	  	  uploadType: 1,
	  	  uploaded: 0,
	  	  error: 0,
	  	  loading: 1,
	  	  urlLoaded: 0,
	  	  uploadedURL : null,
	  	  postSlug: null,
	  	  postTitle:null,
	  	  postTags:null,
	  	  postSection:null,
	  	  postMime: null,
	  	  postNSFW : null
	  }
	  componentDidMount(){
	  	console.log(this.props)
	  	this.props.listSections();
	  }
	  closeModel = (e, ele)=>{
	  	 ele  = ele ? document.getElementById(ele) : e.currentTarget
	  	 ele = ele.dataset.model
	  	 document.querySelector(ele).classList.add('display-none')
	  }
	  validateUplaodURL = (url)=>{
         return /^(https?:\/\/).+(\.(jpe?g|png|gif))?$/.test(url);
	  }
	  displayError = (code)=>{
           return (
             <div className="font-14 color-err margin-top-5">{CONFIG.ERROR[code]}</div>
           )
	  }
	  loadUploadedImage= ()=>{

	  }
	  onAddImageURL = (e)=>{
	  	   this.setState({urlLoaded: 1})
           let a = document.getElementById('checkloaded_img'),
               b = (e.target.value).trim();
               this.canvas = document.getElementById('canvas');
               a.crossOrigin="Anonymous";
               a.width = 0, a.height = 0;
               if(this.validateUplaodURL(b)){
               	   let mimeType = "image/jpg", ext = 'jpg'
               	   if(b.split('.').pop()==('jpg'|'png'|'gif'|'jpeg')){
                       mimeType = `image/${b.split('.').pop()}`;
                       ext = b.split('.').pop();
               	   }
	               a.src = b;
	               a.onload = (e)=>{
	               	    this.props.uploadS3({url: b, mime: mimeType, ext}, (err, res)=>{
                             if(!err){
                             	this.props.setDefaultState(3);
                             	this.setState({
                             		// uploadStage: 3, 
                             		error: 0, 
                             		uploadedURL: res.url,
                             		urlLoaded: 0,
                                    postMime: mimeType,
                                    postSlug: res.slug
                             	});
                             }
	               	    })
	               }
	               a.onerror = ()=>this.setState({error: 1})
	               return;
               }
               this.setState({error: 1});
               return;
	  }
	  onAddVidoeURL = (e)=>{
          this.setState({urlLoaded: 1});
          const url = (e.target.value).trim();
          if(this.validateUplaodURL(url)){
          	    const mime = "video/mp4", ext = 'mp4';
          		this.props.uploadS3({url, mime, ext}, (err, res)=>{
	                 if(!err){
	                 	this.props.setDefaultState(3);
	                 	this.setState({
	                 		error: 0, 
	                 		uploadedURL: res.url,
	                 		urlLoaded: 0,
	                        postMime: mime,
	                        postSlug: res.slug
	                 	});
	                 }
	            })
          }

	  }
	  addDescToImage = (e)=>{
	  	    e.preventDefault();
	  	    //GET TAGS
	  	    let tags = (e.target.elements.post_tags.value).trim();
	  	        tags = tags.split(',');
	  	    this.setState({
	  	    	postTitle: (e.target.elements.post_desc.value).trim(),
	  	    	postTags: tags,
	  	    	postNSFW: (e.target.elements.is_sensitive.checked),
	  	    	// uploadStage: 4
	  	    });
	  	    this.props.setDefaultState(4);
	  }
	  uploadAll=(e)=>{
          e.preventDefault();
          this.setState({loading: 1})
          this.props.uploadAll(this.state, (err, res)=>{
          	   this.setState({loading: 0, uploaded: 1})
          	   setTimeout(()=>{
                   this.closeModel(null, "close-uploaded-model")
                   this.setState({
                   	// uploadStage:1, 
                   	error:0, 
                   	uploaded:0})
                   this.props.setDefaultState(1);
          	   }, 1500)          	   
          })
	  }
	  selectSection = (e)=>{
         let k = document.getElementsByClassName('selected-sections');
         for(let x of k)
             x.checked = false;
         e.target.checked = true;
         this.setState({ postSection: e.target.id })
	  }
	  uploadNext=(e)=>{
          this.props.setDefaultState(3);
	  }
	  draggableLeave = (e)=>{
	  	  e.preventDefault();
	  	  e.target.classList.remove('upload-enter');
          e.target.childNodes[0].classList.remove('display-none');
          document.getElementById("drop_it").classList.add('display-none');
	  }
	  draggableEnter = (e)=>{
         e.preventDefault();
         e.target.classList.add('upload-enter');
         e.target.childNodes[0].classList.add('display-none');
          document.getElementById("drop_it").classList.remove('display-none');
	  }
	  draggableDrop = (e)=>{
	  	 this.setState({urlLoaded: 1})
		   e.preventDefault();
         if(e.target.id!=="choose_file"){
            e.target.classList.remove('upload-enter');
            e.target.childNodes[0].classList.remove('display-none');
         }
         document.getElementById("drop_it").classList.add('display-none');
		 let uploadedFiles = e.dataTransfer ? e.dataTransfer.files: e.target.files;

		 let postedCounter = 0;
		 for(let x of uploadedFiles){
			let uploadedFile = x;
			let mime = uploadedFile.type,
			    ext = uploadedFile.name.split('.').pop();
		    let reader = new FileReader;
				reader.onload =  (data64)=>{
							 this.props.uploadMimeToS3({url: null, mime, ext, data64: data64.target.result}, (err, res)=>{
								console.log(res)
								if(!err){
									++postedCounter;
									if(postedCounter==uploadedFiles.length){
									 this.closeModel(null, "close-multiple-uploaded");
									 this.setState({urlLoaded: 0});
									}
								}
							})
						console.log(data64.target.result)
				}
				reader.readAsDataURL(uploadedFile);
		 }
	  }

	  uploadVideo = ()=>{
	  	 this.setState({uploadType: 0});
	  	 this.props.setDefaultState(2);
	  }
	  render(){
	  	    return(
              <Fragment>
              	  <div className="model-backdrop display-none" id="upload_model">
              	      {this.props.uploadedState==1 &&
			              <div className="model-box">
			              	 <header className="flex">
			              	 	<h3>Upload a Post</h3>
						        <a href="#" data-model="#upload_model" id="close-multiple-uploaded" onClick={this.closeModel}>
						            <svg className="svg-icons-20 pointer" viewBox="0 0 612 612">
								          	    <use href="/icons/sprites.svg#croos_icon" />
									</svg>
						        </a>
			              	 </header>
			              	 <main>
			              	 	  <div className=" margin-top-20">
			              	 	       <div className="font-14 color-90949c">Choose how you want to upload the post</div>
			              	 	  	   <div className="flex-center justify-center margin-top-15 upload-files-container" onDragOver={this.draggableEnter} onDrop={this.draggableDrop} onDragLeave={this.draggableLeave}>
			                             {this.state.urlLoaded==1 
			                              ? <div className="loader inline-block"></div>
			                              : <Fragment>
				                             <div className="upload-btn-wrapper">
				                             <button className="upload-btn uppercase">click to upload an image</button>
				                             <input type="file" id="choose_file" name="myfile" onChange={this.draggableDrop} multiple/>
				                             </div>
				                             <div className="upload-btn-wrapper drop-it display-none" id="drop_it">
				                                 <h1 className="uppercase color-fff">drop it</h1>
				                             </div>
			                                </Fragment>
			                              }
			              	 	  	   </div>	
			              	 	  </div>
			                      <div className="flex-center space-bw margin-top-20">
			                           <div className="paste-urls">
	                                        <a href="#" onClick={()=>{this.props.setDefaultState(2);}}>
	                                        	 <span className="font-14 padding-top-5">Paste image URL</span>
	                                        	 <svg className="svg-icons-50" viewBox="0 0 315.58 315.58">
			                                       <use href="/icons/sprites.svg#uploadimage_icon" />
			                                    </svg>
	                                        </a>  
			                           </div>
	                                   <div className="paste-urls">
	                                        <a href="#" onClick={this.uploadVideo}>
	                                        	 <span className="font-14 padding-top-5">Paste video URL</span>
	                                        	 <svg className="svg-icons-50" viewBox="0 0 60 60">
			                                       <use href="/icons/sprites.svg#uploadvideo_icon" />
			                                    </svg>
	                                        </a> 
	                                   </div>
			                           <div className="paste-urls">
	                                        <a href="#">
	                                        	 <span className="font-14 padding-top-5">Make a Meme</span>
	                                        	 <svg className="svg-icons-50" viewBox="0 0 1200 1200">
			                                       <use href="/icons/sprites.svg#memeface_icon" />
			                                    </svg>
	                                        </a> 
			                           </div>
			                      </div>
			              	 </main>
			              	 <footer>
			              	 	
			              	 </footer>
			              </div>
		              }
		              {this.props.uploadedState==2 &&
			               <div className="model-box">
			              	 <header className="flex">
			              	 	<h3>Upload from URL</h3>
						        <a href="#" data-model="#upload_model" onClick={this.closeModel}>
						            <svg className="svg-icons-20 pointer" viewBox="0 0 612 612">
								          	    <use href="/icons/sprites.svg#croos_icon" />
									</svg>
						        </a>
			              	 </header>
			              	 <main>
			              	      {this.state.uploadType==1
			              	       ?
			              	 	     <div className=" margin-top-20">
			              	 	       <div className="font-14 color-90949c">Type or paste Image URL</div>
			              	 	       <input className="model-input font-14 margin-top-20" type="text" onInput={this.onAddImageURL} onKeyUp={this.onAddImageURL} placeholder="http://"/>
			              	 	       <img className="checkloaded-img" id="checkloaded_img"/>
			              	 	       {this.state.error==1 && this.displayError(100)}
			              	 	     </div>
			              	 	   :
			              	 	     <div className=" margin-top-20">
			              	 	       <div className="font-14 color-90949c">Type or paste Video URL</div>
			              	 	       <input className="model-input font-14 margin-top-20" type="text" onInput={this.onAddVideoURL} onKeyUp={this.onAddVidoeURL} placeholder="http://"/>
			              	 	       <img className="checkloaded-img" id="checkloaded_img"/>
			              	 	       {this.state.error==1 && this.displayError(100)}
			              	 	     </div>
			              	       }
			              	 </main>
			              	 <footer className="txt-right margin-top-15">
                                    {this.state.urlLoaded==0
                                     ? <Fragment>
                                        <button className="btn btn-secondary margin-ryt-15" onClick={()=>{this.props.setDefaultState(1);}}>Back</button>
			              	 	        <button className="btn btn-default" onClick={this.uploadNext}>Next</button>
                                       </Fragment>
                                     : <div className="loader inline-block"></div>}
			              	 </footer>
			              </div>
		              }
                      {this.props.uploadedState==3 &&
			               <div className="model-box">
			                 <form method="post" onSubmit={this.addDescToImage}>
			                        <header className="flex">
					              	 	<h3>Give your post a title</h3>
								        <a href="#" data-model="#upload_model" onClick={this.closeModel}>
								            <svg className="svg-icons-20 pointer" viewBox="0 0 612 612">
										          	    <use href="/icons/sprites.svg#croos_icon" />
											</svg>
								        </a>
					              	 </header>
					              	 <main>
					              	 	  <div className=" margin-top-20">
					              	 	       <div className="font-14 color-90949c">An accurate, descriptive title can help people discover your post.</div>
					              	 	  	   <div className="flex margin-top-15 border-light border-botm-none padding-10-13">
			                                         <div className="flex-3 sample-upload-content txt-center">
			                                              {this.state.loading==1 && !this.state.uploadedURL && <div id="canvas-loader" className="loader-circular loader-50"></div>}
			                                         	  {this.state.uploadType==1 
			                                         	   ? <img src={this.state.uploadedURL} onLoad={()=>this.setState({loading:0})} id="test"/>
			                                         	   : <video src={this.state.uploadedURL} onLoadStart={()=>this.setState({loading:0})} id="test"></video>
			                                         	  }
			                                         </div>
			                                         <div className="flex-8">
			                                             <textarea className="desc-post no-border font-14" name="post_desc" placeholder="Describe your post..." maxLength="250">
		                                                 </textarea>
			                                         </div>
					              	 	  	   </div>	
					              	 	  	   <div className="flex-center border-light border-botm-none padding-10-13">
			                                        <div className="flex-1">Tags :</div>
			                                        <div className="flex-8"><input className="model-input font-14 no-border" name="post_tags" type="text" placeholder="tag1, tag2, tag3 "/></div>
					              	 	  	   </div>	
					              	 	  	   <label htmlFor="is_sensitive">
					              	 	  	    <div className="flex-center space-bw border-light border-botm-none padding-13 pointer">
			                                        	 <div>This is sensitive content :</div>
			                                             <div><input id="is_sensitive" name="is_sensitive" type="checkbox"/></div>
					              	 	  	    </div>
					              	 	  	   </label>	
					              	 	  </div>
					              	 </main>
					              	 <footer className="txt-right margin-top-15">
					              	       	<button className="btn btn-secondary margin-ryt-15" onClick={()=>{this.props.setDefaultState(2);}}>Back</button>
					              	 	    <button className="btn btn-default">Next</button>
					              	 </footer>
			                 </form>
			               </div>
		              }
                      {this.props.uploadedState==4 &&
		              <div className="model-box">
                           <form method="post" onSubmit={this.uploadAll}>
                             		 <header className="flex">
					              	 	<h3>Pick a section</h3>
								        <a href="#" data-model="#upload_model" id="close-uploaded-model" onClick={this.closeModel}>
								            <svg className="svg-icons-20 pointer" viewBox="0 0 612 612">
										          	    <use href="/icons/sprites.svg#croos_icon" />
											</svg>
								        </a>
					              	 </header>
					              	 <main>
					              	 	  <div className=" margin-top-20">
					              	 	       <div className="font-14 color-90949c">Submitting to the right section to make sure your post gets the right exposure it deserves!</div>
					                          	 {this.state.loading==1 &&
                                                   <div className="txt-center"><div id="canvas-loader" className="loader-circular loader-50"></div></div> }
                                                 {this.state.loading==0 && this.state.uploaded==0 &&
					                              <div className="sections-container border-light margin-top-15">
					                           	   {this.props.sectionsList.data.map((result)=>{
			                                         return (
			                                           <label htmlFor={result._id} key={result._id}>
								                           <div className="flex-center sections-box space-bw padding-15 pointer">
							                                     <div className="flex-center sections-logo"><img className="margin-ryt-15" src={result.url} />
							                                      <span>
							                                      	  <h3 className="capitalize padding-botm-2">{result.value}</h3>
							                                      	  <p className="font-12 color-90949c">{result.describe}</p>
							                                      </span></div>
							                                     <div className="sections-select">
			                                                       <div className="container">
																	  <input type="checkbox" name="selected_sections" onClick={this.selectSection} className="selected-sections" id={result._id} />
																	  <span className="checkmark"></span>
																   </div>
							                                     </div>
									              	 	   </div>
			                                           </label>
			                                         )
					                               })}
					                             </div>
					                           }
					                           {this.state.uploaded==1 && <div className="txt-center color-success margin-top-20">Congratulations, Your post has been added successfully.</div>}
					              	 	  </div>
					              	 </main>
                                     {this.state.uploaded==0
                                     	&& 	<footer className="txt-right margin-top-15">
					              	        	<button className="btn btn-secondary margin-ryt-15" onClick={()=>{this.props.setDefaultState(2);}}>Back</button>
					              	 	        <button className="btn btn-default">Next</button>
					              	       </footer>
                                     }

                                     {this.state.uploaded==1
                                     	&& 	<footer className="txt-right margin-top-15">
					              	 	        <button className="btn btn-default margin-ryt-15" onClick={()=>{this.setState({uploaded:0, error:0}); this.props.setDefaultState(1)}}>Add More</button>
					              	 	        <button className="btn btn-secondary" onClick={()=>{this.props.setDefaultState(2)}}>Close</button>
					              	       </footer>
                                     }
                           </form>
		              </div>
		            }
		        </div>
              </Fragment>
	  	    )
	  }
}

export default connect(state=>state, actions)(UploadPosts);