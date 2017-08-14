const renderApp = (markers) =>
  `<!DOCTYPE html>
  <html>
    <head>
      <title>Green List</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="/static/js/bundle.js"></script>
      <script markers=${JSON.parse(markers)}></script>
    </body>
  </html>
  `;

export default renderApp;
