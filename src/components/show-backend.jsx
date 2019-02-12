// Below code to import React is essential to ensure this links with React.
import React, { Component } from 'react';
import axios from 'axios';

// This is a class component called 'FooBar.'
class ShowBackend extends Component {
  state = {
    profitLosses: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/profit_losses')
      .then(response => {
        const profitLosses = response.data;
        console.log(response.data);
      })
  }

  render() {
    return (
      /* Insert HTML here. this is where you render the webpage. See sample: https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-e9a1ae8077fd
      */
      <div className="ShowBackend">
        <h1>Hello World. This is a test.</h1>
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
