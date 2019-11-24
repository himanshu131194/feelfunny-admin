import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import qwest from 'qwest';

const imageList = [];
const api = {
    baseUrl: '/api/memes-list',
};

class ScrollTest extends Component {
    counter = 0;
    constructor(props) {
        super(props);
        
        this.state = {
            tracks: [],
            hasMoreItems: true,
            nextHref: null,
            offset : 0,
            section : 'awesome'
        };
        console.log(this.props.onSectionSelect);
    }

    async loadItems(page) {
        var self = this;

        var url = '/api/memes-list';

        if(this.props.onSectionSelect!==this.state.section){
            console.log("time to change");
            await this.setState({ section : this.props.onSectionSelect });
            await this.setState({ tracks : []});
            this.counter = 0;
        }
       // let limit =  this.setState((state)=>({ offset: state.offset + 5}));
        this.counter = this.counter + 5;
        qwest.get(url, {
                section : (this.props.onSectionSelect),
                limit: 5,
                offset : this.counter
            }, {
                cache: true
            })
            .then(function(xhr, resp) {
                resp = resp.data;
                console.log(resp);
                if(resp) {
                    var tracks = self.state.tracks;
                    console.log(tracks);
                    resp.map((track) => {
                        tracks.push(track);
                    });
                    self.setState({
                            hasMoreItems: true
                    });
                }
            });
    }

    render() {
        const loader = <div className="txt-center"><div id="canvas-loader" className="loader-circular loader-100"></div></div>;
        var items = [];
        this.state.tracks.map((result, i) => {
            items.push(
                <div className="posts" key={result._id}>
                        <header className="post-header">
                            <div>
                                <a  onLoad={this.loadEmojis} className="post-title"><h1 className="font-20 padding-botm-8">{result.post_title}</h1></a>
                            </div>
                        </header>
                        <div className="posts-body">
                            <a className="margin-botm-8">
                                {result.media_type==1
                                ? <img src={result.post_url} alt="" />
                                : <video src={result.post_url} controls></video>
                                }
                            </a>
                        </div>
                </div>
            );
        });

        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems.bind(this)}
                hasMore={this.state.hasMoreItems}
                loader={loader}>
                {items}
            </InfiniteScroll>
        );
    }
};

export default ScrollTest;