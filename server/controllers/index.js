import request from 'request'
import rp from 'request-promise'

export default (router)=>{
 
      router.get('/facebook-page', (req, res)=>{
            // GET https://graph.facebook.com/1034103903466704?fields=access_token&access_token=EAAGETN1D20EBAJemWQhgpahrbJqYOuzKZCmufsAzw2d9ZBJWeHS1NK2oFnJTZByZBvOvjD2QHstVlCy8IisUG8UF1pRDOnDXheh3KbMXU5XLLglgdQMZAWXEnfPA9OtsN6Yx9c0mZActxJ4GEOqECOEV6ghfuFXpZA3AgkLocoZCkR8zXEHhMSC8uX7mx0bdyr59yGDItpx88wZDZD

            // {
            //     "access_token": "EAAGETN1D20EBACSsZAErRNODDBKN9QpzLMLTkVUIlzNm9WtlqoAs8cZCo9vJfdSXlCqt61zHOAR5XMQ3B94i1a6mGc7voLDQTtNUZB3ZCrI97qNqbLapW2SkCAFsfkjxZAZBP3t7aS84vF4mMq1Xb4fx3ZBpHj3oOtlPjU5i3fG4QZDZD",
            //     "id": "1034103903466704"
            //   }
            var options = {
                method: 'POST',
                uri: 'https://graph.facebook.com/v5.0/1034103903466704/photos',
                body: {
                    published : 'true',
                    caption: "WTF Life is",
                    url: "https://img-9gag-fun.9cache.com/photo/ayoe39W_700bwp.webp",
                    access_token: "EAAGETN1D20EBANjfgB8cqZAvJXyZBi7HDPZBbtlGQVi1l59LC5nUefgMyfEwDEHpvZCmqNQBmW3SoGpFKq1AKeq0fgcGw9hddeXjsZBo944El37eUP30CSUKJMAn8E40NdK58BfsZC6AgJaQLDN3Bh3bRqzI7F6QNHAS2sH5BZAZApS2cJYYiVMmT9MRad57LZAioShFJRM1wpgZDZD"
                },
                json: true
            };
             
            rp(options)
                .then(function (parsedBody) {
                    res.send({
                        key: parsedBody
                   })
                })
                .catch(function (err) {
                    res.send({
                        key: err
                   })
                });
      })

    // //   {
    // //     "access_token": "EAAGETN1D20EBAJGilLjevZCsI9QsO39BYvOBZBBHMb2BUcW5RnyxbDN3co2ZCadY8ia3ZCVxq9DJpTcEE8cL8y4AG59ZBtA7f6ZBdSD5ai9XURrR4cRwiYY5oE0YZACnyK3GAQpkNY26ViStDWZChQKNK8UZAuyfiP9h0IcF0RMzb9oQRAFxuiiLcYfeB2pxbh9q7ZAYiPfybWswZDZD",
    // //     "id": "1034103903466704"
    // //   }
    //   router.post('/', )

      return router;
}