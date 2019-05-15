import React from 'react';

class login extends React.Component {
  constructor() {
    super();
    this.state = {
      test: 'hi',
    };
  }
  render() {
    return (
      <div id='login'>
        <h1>HEllo from login Page</h1>
      </div>
    )
  }
}
export default login;
