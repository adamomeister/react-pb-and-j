// Below code to import React is essential to ensure this links with React.
import React, { Component } from 'react';

// This is a class component called 'FooBar.'
class FooBar extends Component {
  // Insert 'state' if needed.
  state = {
    keyName1: "value1",
    keyname2: "value2"
  };

  render() {
    return (
      /* Insert HTML here. this is where you render the webpage. See sample: https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-e9a1ae8077fd
      */
      <h1>Hello World. This is a test {this.state.keyName1}.</h1>
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

export default FooBar;
