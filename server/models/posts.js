import mongoose from 'mongoose'

const Comments = new mongoose.Schema({
      post_url:{
          type: String
      },
      post_title:{
          type: String
      },
      post_type:{
          type: String
      },
      crawled_id:{
          type: String
      },
      posted_fb:{
          type: Boolean,
          default: 0
      },
      post_id:{
          type: String
      },
      posted_web:{
        type: Boolean,
        default: 0
      },
      posted_web_time:{ 
        type: Date
      },
      posted_fb_time:{ 
        type: Date
      },
      ext:{
        type: String
      },
      media_type:{
         type : Number 
      },
      next_cursor:{
         type: String
      },
      refresh: {
          type: Boolean,
          default: 0
      },
      created: {
      	 type: Date,
      	 default: Date.now
      },
      updated:{ 
         type: Date
      },
      comment: {
      	 type: String
      }
});

export default mongoose.model('crawled_data', Comments);