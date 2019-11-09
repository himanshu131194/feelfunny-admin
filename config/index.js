export default {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4000,
  API_URL: "http://localhost:3000",
  ACCESS_TOKEN : "0z6v8b4uua",
  ERROR: {
  	 100: 'Please put a valid image url',
  	 101: 'Please refresh and try to login again'
  },
  S3: {
    BUCKET : 'stylemycv',
    URL : 'https://stylemycv.s3.ap-south-1.amazonaws.com',
    ACCESS: 'AKIA3YIPQLXVUZ3S3UD7',
    SECRET: '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',
    PASSWORD: 'WMwQ}t%c(XqR'
 },
  FB:{
     ACCESS_TOKEN: "EAAGETN1D20EBAEiWQvpJ9v0v0zfyeDYWzo9C8qqVJucIve3FsUOPKrGDFuJZBMZAediW9ZCKZChvNkQDeElzU4dKOhaf7UxFzPNt4pzKojBZB7mZBHIFCmmERlDDXpFYE1jq9wZBfVxmZCJHL5tSeyjekjKqF4xlZALdqlz9xfz8mxwZDZD",
     PAGE_ID: "1034103903466704"
  },
  CONTENT_TYPE:{
     PHOTO: 1,
     VIDEO: 2
  },
  MONGO_URI : 'mongodb+srv://feelfunny:feelfunny123@feelfunny-jfu4v.mongodb.net/test?retryWrites=true',
}