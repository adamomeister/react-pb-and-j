// Below code to import React is essential to ensure this links with React.
import React, { Component } from 'react';
// import axios from 'axios';

// This is a class component called 'FooBar.'
class ShowBackend extends Component {
  state = {
    profitLosses: []
  }

  componentDidMount() {
    return fetch('http://localhost:3000/profit_losses')
      .then(response => {
        const allProfitLosses = response.data;
        this.setState({ allProfitLosses });
      })
  }

  render() {
    return (
      /* Insert HTML here. this is where you render the webpage. See sample: https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-e9a1ae8077fd
      */
      <div className="ShowBackend">
        <h1>Hello World. This is a test {this.state.profitLosses}.</h1>
        <h3>Call to backend { this.state.profitLosses.map(el => <li>{ el.name }</li>) }</h3>
      </div>
    );
  }

  /*
  Insert functions inside this Class. This function can be referred inside the render by doing 'this.anyFunction();'
  */

  anyFunction() {
    // Do something
  }

}

/*
Below code is essential. Keep to export to view. The only thing you should change is 'FooBar' to match with your class above.
*/

export default ShowBackend;
