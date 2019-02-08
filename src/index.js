import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

ReactDOM.render(<App />, document.getElementById('root'));

var OAuthClient = require('intuit-oauth');
 
var oauthClient = new OAuthClient({
    clientId: 'Q0fRKigqnRPQuO01UAQvc7HYpgjvf37uBWT2TOqMgxNLajuUUg',
    clientSecret: 'hgmC3FFd0tAmbeyfMBruChtMzev977xDK4LgLGCs',
    environment: 'sandbox' || 'production',
    redirectUri: 'localhost:3000/callback'
});

var authUri = oauthClient.authorizeUri({scope:[OAuthClient.scopes.Accounting,OAuthClient.scopes.OpenId],state:'testState'});
var parseRedirect;

let httpsProxyAgent = require('https-proxy-agent');
var agent = new httpsProxyAgent('https://crossorigin.me');
var config = {
  url: authUri,
  httpsAgent: agent
}

axios.get(config).then(response => {
  var parseRedirect = response.data
  console.log('here');
  console.log(response.data);
  console.log(parseRedirect);
});
// res.redirect(authUri);


// var parseRedirect = req.url;

// Exchange the auth code retrieved from the **req.url** on the redirectUri
setTimeout( function() { oauthClient.createToken(parseRedirect)
    .then(function(authResponse) {
        console.log('The Token is  '+ JSON.stringify(authResponse.getJson()));
    })
    .catch(function(e) {
        console.error("The error message is :"+e.originalMessage);
        console.error(e.intuit_tid);
    });
oauthClient.validateIdToken()
        .then(function(response){
            console.log('Is my ID token validated  : ' + response);
        })
        .catch(function(e) {
            console.log('The error is '+ JSON.stringify(e));
        });

oauthClient.getUserInfo()
        .then(function(response){
            console.log('The User Info is  : ' + JSON.stringify(response.json()));
        })
        .catch(function(e) {
            console.log('The error is '+ JSON.stringify(e));
        });
  }, 550);


serviceWorker.unregister();
