const renderApp = (markers) =>
  `<!DOCTYPE html>
  <html>
    <head>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>
      <title>Green List</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="/static/js/bundle.js"></script>
    </body>
  </html>
  `;

export default renderApp;


      // <script markers=${markers}></script>
