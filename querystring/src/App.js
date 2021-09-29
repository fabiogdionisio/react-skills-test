import React, { Component } from 'react';

class App extends Component {
  // Usually when i'm faced with this kind of problem, I use the 'query-string' library
  // that simplifies this implementation. In this example I chose to parse the querystring manually;
  
  state = {
    queryParams: {},
  }

  componentDidMount() {
    const queryString = new URLSearchParams(this.props.location.search);
    const temp = [];

    queryString.forEach((value, key) => (
      temp.push({ key, value })
    ))

    this.setState({ 
      queryParams: temp.reduce((prev, curr) => ({ ...prev, [curr.key]: curr.value }), {})
    })
  }

  render() {
    const { queryParams } = this.state;

    return <div>
      <ul>
        {Object.entries(queryParams).map(([key, value]) => <li key={key}>{key}: {value}</li>)}
      </ul>
    </div>;
  }
}

export default App;
