export default {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8000,
  API_URL: "http://localhost:3000",
  ACCESS_TOKEN : "0z6v8b4uua",
  ERROR: {
  	 100: 'Please put a valid image url',
  	 101: 'Please refresh and try to login again'
  },
  MONGO_URI : 'mongodb+srv://feelfunny:feelfunny123@feelfunny-jfu4v.mongodb.net/test?retryWrites=true',
}