'use strict';

const express = require('express');
const app = express();
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);
app.use(express.static('./public'));

app.get('*', function(req, res){
  res.sendFile('index.html', {root: './public/'})
});

app.listen(PORT, function(){
  console.log('You are on port:', PORT);
});
