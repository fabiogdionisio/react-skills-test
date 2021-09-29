import React, { Component } from 'react';

class App extends Component {
  state = {
    text: 'Landing Page 1'
  }

  componentDidUpdate(prevState) {
    const { text } = this.state;
    console.log(text);

    // Moved the update condition to this lifecycle method. Instead of having a conditional checking for the text value,
    // it could also be done using a counter in state for extended funcionality.

    if (text === 'Landing Page 2')
      this.setState({ text: 'Landing Page 3' });
  }

  componentDidMount() {
    console.log(this.state.text);
    this.setState({ text: 'Landing Page 2' });
  }

  render() {
    return <div>
      {this.state.text}
    </div>;
  }
}

export default App;
