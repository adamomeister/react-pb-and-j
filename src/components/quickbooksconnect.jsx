import React from "react";
// import Login from "./login";

const NotAdmin = () => 
  <div>Please login as a business administrator to add Quickbooks data!
  </div>

const Admin = () => 
  <div>
    <button className="btn btn-warning"><a href="https://appcenter.intuit.com/connect/oauth2?client_id=Q0PvPlI6Vc6oEWJD4AeumjFSSLdQI4HSniUXk1weWXIGDJlawv&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&response_type=code&scope=com.intuit.quickbooks.accounting&state=randomState">OAuth Sign In</a></button>
  </div>
  

class QuickbooksConnect extends React.Component {
  // constructor(props) {
  //   super(props);
  // this.state = {isAdmin: false}
  // console.log(this.state.isAdmin);
  // }
  state = {
    isAdmin: true,
    // data: [],
    // loading: false
  };
  // componentDidMount() {
  //   this.setState({ loading: true})
    
  // }

  render() {
    // const isAdmin = this.state.isAdmin;
    // let button;

    // if (isAdmin){
    //   button = <button className="btn btn-warning"><a href="https://appcenter.intuit.com/connect/oauth2?client_id=Q0PvPlI6Vc6oEWJD4AeumjFSSLdQI4HSniUXk1weWXIGDJlawv&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&response_type=code&scope=com.intuit.quickbooks.accounting&state=randomState">OAuth Sign In</a></button>;
    // }else{ 
    //   button = <NotAdmin/>;
    // }

    return (
      <div>
         {this.state.isAdmin? <Admin /> : <NotAdmin />}
      </div>
    );
  };
};

export default QuickbooksConnect;