import React, {Component, Fragment}  from 'react';
import {connect} from 'react-redux'
import * as actions from './actions'
import CommonClass from './CommonClass'
import CONFIG from '../../config';
import axios from 'axios';
import LocalDataHeader from './partials/LocalDataHeader';
// import InfiniteScroll from 'react-infinite-scroller';
import ScrollTest from './ScrollTest'


class Crawler extends CommonClass(Component){
      state =  {
          loading: 0,
          loading_posts: 0,
          section : 'funny',
          tracks: [],
          hasMoreItems: true,
          nextHref: null,
          offset : 0, 
          limit: 1
      }
      componentDidMount(){
               this.toggleNavigationView('popular_section', 'popular-section-links', 'popular-selected');
               const section = this.state.section.toLowerCase();
            //    this.props.loadAllMemes(section, ()=>{
            //        this.setState({loading_posts: 1});
            //    });
      }
      sectionClicked = async (e)=>{
           await this.setState({section : e.target.innerHTML});
           //this.loadItems();
      }
      crawldata = async (e)=>{
          const mine = e.target.dataset.mine ? 'mine' : '';
          await this.setState({loading :1});
          e.preventDefault();
          let section = this.state.section.toLowerCase();
          const {data} = await axios.get(`/api/9gag-data?section=${section}&mine=${mine}`);
          await this.setState({loading :0});
      } 
      loadEmojis = ()=>{
          console.log("dsdsdsd");
      }



    //   loadItems = ()=>{
    //     const section = this.state.section.toLowerCase();
    //     const offset = this.state.offset, 
    //           limit = this.state.limit; 
    //     this.props.loadAllMemes({section, offset, limit}, async ()=>{
    //         await this.setState((state)=>({ offset: state.offset + 1}));
    //         await this.setState({tracks : this.props.listOfMemes})
    //         // await this.setState({loading_posts: 1});
    //         await this.setState({hasMoreItems: true});
    //     });
    //   }

      render(){
        return(
                <Fragment>
               <LocalDataHeader/>

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
                                {/* crawled_id: "aQ1XzE2"
                                created: "2019-11-15T17:17:18.622Z"
                                ext: "mp4"
                                media_type: 2
                                next_cursor: "after=aN0PwEK%2CaQ1XzE2%2Can5g7z5&c=50"
                                post_id: "ccc1beda-11bc-4a73-a26a-36d3cbba70b3"
                                post_title: "&ldquo;Whoops, wasn&rsquo;t me!&rdquo;"
                                post_type: "awesome"
                                post_url: "https://stylemycv.s3.ap-south-1.amazonaws.com/9gag_data/ccc1beda-11bc-4a73-a26a-36d3cbba70b3.mp4"
                                posted_fb: false
                                posted_web: false
                                refresh: false
                                __v: 0
                                _id: "5dcedd9e2a16732714a3b7e6" */}
                                <div className="posts-container">
                                        
                                {/*this.state.section && <ScrollTest onSectionSelect={this.state.section.toLowerCase()}/>*/}				   
                                            
                                </div>
                        </div>
                 </div>
                </main>
                </Fragment>
            )
      }
}

export default connect(state=>state, actions)(Crawler);