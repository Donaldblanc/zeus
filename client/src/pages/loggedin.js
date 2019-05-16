import React from 'react';

class login extends React.Component {
  constructor() {
    super();
    this.state = {
      test: 'hi',
    };
  }


  

  render() {

    fetch('http://localhost:8090/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify( {
        "query":"query { getContacts {id firstName lastName company } }"
      } )
    })
      .then(r => r.json())
      .then(data => console.log('data returned:', data))
      .catch(error => console.log("Got An Error", error));
    


    return (
      <div id='login'>
        <h1>HEllo from login Page</h1>
      </div>
    )
  }
}
export default login;
