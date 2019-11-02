export default () => {
    return `<!doctype html>
      <html lang="en">
        <head>
            <title>feelfunny</title>
            <meta name="viewport"  content="width=device-width initial-scale=1"/>
            <link rel="stylesheet" href="https://s3.amazonaws.com/assessts-book/css/impactwebfont.css">
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
            <link rel="stylesheet" href="/css/web-icons.css">
        </head>
        <body>
           <script>
            window.fbAsyncInit = function() {
              FB.init({
                appId            : '426940641303361',
                autoLogAppEvents : true,
                xfbml            : true,
                version          : 'v5.0'
              });
            };
          </script>
          <script async defer src="https://connect.facebook.net/en_US/sdk.js"></script>
          <div id="root"></div>
          <script type="text/javascript" src="/dist/bundle.js"></script>
          <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        </body>
      </html>`
}