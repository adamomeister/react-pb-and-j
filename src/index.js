import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import axios from 'axios';

ReactDOM.render(<App />, document.getElementById('root'));

// var OAuthClient = require('intuit-oauth');
 
// var oauthClient = new OAuthClient({
//     clientId: 'Q0tOS07vrybAgYQj30FzOvtgUc9WGxTlPkQjlnx51782RoQ52L',
//     clientSecret: '7lw2qSWf9cwyvweo6EO1MUCNw9EQvs2kWBNLNdCm',
//     environment: 'sandbox' || 'development',
//     redirectUri: 'localhost:3000/callback'
// });

// var authUri = oauthClient.authorizeUri({scope:[OAuthClient.scopes.Accounting,OAuthClient.scopes.OpenId],state:'testState'});
// var parseRedirect;
// axios.get("https://cors.io/?" + authUri).then(response => {
//   var parseRedirect = response.data
//   console.log(response.data);
//   console.log(parseRedirect);
// });
// // res.redirect(authUri);


// // var parseRedirect = req.url;

// // Exchange the auth code retrieved from the **req.url** on the redirectUri
// oauthClient.createToken(parseRedirect)
//     .then(function(authResponse) {
//         console.log('The Token is  '+ JSON.stringify(authResponse.getJson()));
//     })
//     .catch(function(e) {
//         console.error("The error message is :"+e.originalMessage);
//         console.error(e.intuit_tid);
//     });
// oauthClient.validateIdToken()
//         .then(function(response){
//             console.log('Is my ID token validated  : ' + response);
//         })
//         .catch(function(e) {
//             console.log('The error is '+ JSON.stringify(e));
//         });

// oauthClient.getUserInfo()
//         .then(function(response){
//             console.log('The User Info is  : ' + JSON.stringify(response.json()));
//         })
//         .catch(function(e) {
//             console.log('The error is '+ JSON.stringify(e));
//         });


// require('dotenv').config();

// /**
//  * Require the dependencies
//  * @type {*|createApplication}
//  */
// var express = require('express');
// var app = express();
// var path = require('path');
// var OAuthClient = require('intuit-oauth');
// var bodyParser = require('body-parser');
// var ngrok =  (process.env.NGROK_ENABLED==="true") ? require('ngrok'):null;


// /**
//  * Configure View and Handlebars
//  */
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname, '/public')));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
// app.use(bodyParser.json())

// var urlencodedParser = bodyParser.urlencoded({ extended: false });

// /**
//  * App Variables
//  * @type {null}
//  */
// var oauth2_token_json = null,
//     redirectUri = '';


// /**
//  * Instantiate new Client
//  * @type {OAuthClient}
//  */

// var oauthClient = null;


// /**
//  * Home Route
//  */
// app.get('/', function(req, res) {

//     res.render('index');
// });

// /**
//  * Get the AuthorizeUri
//  */
// app.get('/authUri', urlencodedParser, function(req,res) {

//     oauthClient = new OAuthClient({
//         clientId: req.query.json.clientId,
//         clientSecret: req.query.json.clientSecret,
//         environment: req.query.json.environment,
//         redirectUri: req.query.json.redirectUri
//     });

//     var authUri = oauthClient.authorizeUri({scope:[OAuthClient.scopes.Accounting],state:'intuit-test'});
//     res.send(authUri);
// });


// /**
//  * Handle the callback to extract the `Auth Code` and exchange them for `Bearer-Tokens`
//  */
// app.get('/callback', function(req, res) {

//     oauthClient.createToken(req.url)
//        .then(function(authResponse) {
//              oauth2_token_json = JSON.stringify(authResponse.getJson(), null,2);
//          })
//         .catch(function(e) {
//              console.error(e);
//          });

//     res.send('');

// });

// /**
//  * Display the token : CAUTION : JUST for sample purposes
//  */
// app.get('/retrieveToken', function(req, res) {
//     res.send(oauth2_token_json);
// });


// /**
//  * Refresh the access-token
//  */
// app.get('/refreshAccessToken', function(req,res){

//     oauthClient.refresh()
//         .then(function(authResponse){
//             console.log('The Refresh Token is  '+ JSON.stringify(authResponse.getJson()));
//             oauth2_token_json = JSON.stringify(authResponse.getJson(), null,2);
//             res.send(oauth2_token_json);
//         })
//         .catch(function(e) {
//             console.error(e);
//         });


// });

// /**
//  * getCompanyInfo ()
//  */
// app.get('/getCompanyInfo', function(req,res){


//     var companyID = oauthClient.getToken().realmId;

//     var url = oauthClient.environment == 'sandbox' ? oauthClient.environment.sandbox : oauthClient.environment.production ;

//     oauthClient.makeApiCall({url: url + 'v3/company/' + companyID +'/companyinfo/' + companyID})
//         .then(function(authResponse){
//             console.log("The response for API call is :"+JSON.stringify(authResponse));
//             res.send(JSON.parse(authResponse.text()));
//         })
//         .catch(function(e) {
//             console.error(e);
//         });
// });


// /**
//  * Start server on HTTP (will use ngrok for HTTPS forwarding)
//  */
// const server = app.listen(process.env.PORT || 3000, () => {
//     console.log(`💻 Server listening on port ${server.address().port}`);
// if(!ngrok){
//     redirectUri = `${server.address().port}` + '/callback';
//     console.log(`💳  See the Sample App in your browser : ` + 'http://localhost:' + `${server.address().port}`);
//     console.log(`💳  Copy this into Redirect URI on the browser : ` + 'http://localhost:' + `${server.address().port}` + '/callback');
//     console.log(`💻  Make Sure this redirect URI is also copied on your app in : https://developer.intuit.com`);
// }

// });

// /**
//  * Optional : If NGROK is enabled
//  */
// if (ngrok) {

//     console.log("NGROK Enabled");
//     ngrok.connect({addr: process.env.PORT || 3000}, (err, url) => {
//             if (err) {
//                 process.exit(1);
//             }
//             else {
//                 redirectUri = url + '/callback';
//                 console.log(`💳  See the Sample App in your browser: ${url}`);
//                 console.log(`💳  Copy and paste this Redirect URI on the browser :  ${redirectUri}`);
//                 console.log(`💻  Make Sure this redirect URI is also copied on your app in : https://developer.intuit.com`);

//             }
//         }
//     );
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
