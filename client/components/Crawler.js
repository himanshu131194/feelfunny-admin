import React, {Component, Fragment}  from 'react';
import CommonClass from './CommonClass'
import CONFIG from '../../config';
import axios from 'axios';

class Crawler extends CommonClass(Component){
      state =  {
          loading: 0,
          loading_posts: 0,
          section : 'india'
      }
      componentDidMount(){
               this.toggleNavigationView('popular_section', 'popular-section-links', 'popular-selected');
      }
      sectionClicked = async (e)=>{
           await this.setState({section : e.target.innerHTML});
      }
      crawldata = async (e)=>{
          const mine = e.target.dataset.mine ? 'mine' : '';
          await this.setState({loading :1});
          e.preventDefault();
          let section = this.state.section.toLowerCase();
          const {data} = await axios.get(`/api/9gag-data?section=${section}&mine=${mine}`);
          await this.setState({loading :0});
      } 
      render(){
            return(
                <Fragment>
                <main className="main-content-box">
                  <div className="flex main-content-wrapper">
                      <div className="sidebar-content">
                              <div className="popular-section" id="popular_section">
                                 <div className="popular-section-box">
                                     <a href="#" onClick={this.sectionClicked} className="popular-section-links popular-selected">India</a>
                                 </div>
                                 <div className="popular-section-box">
                                         <a href="#" onClick={this.sectionClicked} className="popular-section-links">Funny</a>
                                 </div>
                                 <div className="popular-section-box">
                                     <a href="#" onClick={this.sectionClicked} className="popular-section-links">Awesome</a>
                                 </div>
                                 <div className="popular-section-box">
                                         <a href="#" onClick={this.sectionClicked} className="popular-section-links">Anime &amp; Manga</a>
                                 </div>                                
                                 <div className="popular-section-box">
                                     <a href="#" onClick={this.sectionClicked} className="popular-section-links">Video</a>
                                 </div>
                                 <div className="popular-section-box">
                                         <a href="#" onClick={this.sectionClicked} className="popular-section-links">Travel &amp; Photography</a>
                                 </div>                                 
                                 <div className="popular-section-box">
                                     <a href="#" onClick={this.sectionClicked} className="popular-section-links">Sport</a>
                                 </div>
                                 <div className="popular-section-box">
                                         <a href="#" onClick={this.sectionClicked} className="popular-section-links">Science &amp; Tech</a>
                                 </div>                                 
                                 <div className="popular-section-box">
                                     <a href="#" onClick={this.sectionClicked} className="popular-section-links">NSFW</a>
                                 </div>
                                 <div className="popular-section-box">
                                         <a href="#" onClick={this.sectionClicked} className="popular-section-links">Music</a>
                                 </div>                                 
                                 <div className="popular-section-box">
                                     <a href="#" onClick={this.sectionClicked} className="popular-section-links">Movie &amp; TV</a>
                                 </div>
                                 <div className="popular-section-box">
                                         <a href="#" onClick={this.sectionClicked} className="popular-section-links">Meme</a>
                                 </div>                                 
                                 <div className="popular-section-box">
                                     <a href="#" onClick={this.sectionClicked} className="popular-section-links">Gaming</a>
                                 </div>
                                 <div className="popular-section-box">
                                         <a href="#" onClick={this.sectionClicked} className="popular-section-links">Girl</a>
                                 </div>
                                 <div className="popular-section-box">
                                         <a href="#" onClick={this.sectionClicked} className="popular-section-links">GIF</a>
                                 </div>
                              </div>
                      </div>
                     
                      <div className="main-content">

                      <div className="featured-tags">
		        	 	  	   <div className="flex-center">
							      <a className="tags-box featured-tags-box margin-ryt-10" onClick={this.crawldata}>
							        Refresh Crawled Data
							      </a>
                                  <a className="tags-box featured-tags-box margin-ryt-10" data-mine="true" onClick={this.crawldata}>
							         Data Mining
							      </a>
                                  {this.state.loading==1 &&
                                    <div id="canvas-loader" className="loader-circular loader-30"></div>
                                  }
		        	 	  	   </div>
		        	 	</div>


                        <div className="posts-container">
                                    {this.state.loading_posts==0
                                    ? <div className="txt-center">
                                        <div className="margin-top-20">
                                        <h3 className="color-90949c">No posts to show</h3>
                                        <svg className="svg-icons-200" viewBox="0 0 59.227 59.227">
                                                <use href="/icons/sprites.svg#empty_box" />
                                        </svg>
                                        </div>
                                    </div>
                                    :
                                    // : this.props.postsList.map((result)=>{
                                        // return (
                                                <div className="posts" key={result._id}>
                                                    <header className="post-header">
                                                    <div className="flex margin-botm-8">
                                                            <a href="#" className="post-categoty-icon margin-ryt-10">
                                                                <img src={result.section_details[0].url} alt="" />
                                                            </a>
                                                            <span className="flex-center color-90949c">
                                                                <a href="#" className="capitalize margin-ryt-10">{result.section_details[0].value}</a> 
                                                                <svg className="svg-icons-12 margin-ryt-5" viewBox="0 0 510 510">
                                                                    <use href="/icons/sprites.svg#postage_icon" />
                                                                </svg>
                                                                1d
                                                            </span>
                                                    </div>
                                                    <div>
                                                        <a href={"/posts/123456"+result._id} className="post-title"><h1 className="font-20 padding-botm-8">{result.title}</h1></a>
                                                    </div>
                                                    </header>
                                                    <div className="posts-body">
                                                        <a href={"/posts/"+result._id} className="margin-botm-8">
                                                            {result.content_type==1
                                                            ? <img src={result.url} alt="" />
                                                            : <video src={result.url} controls></video>
                                                            }
                                                        </a>
                                                    </div>
                                                </div>
                                        // )
                                    // })						   
                                    }
                                </div>
                        </div>
                 </div>
                </main>
                </Fragment>
            )
      }
}

export default Crawler;