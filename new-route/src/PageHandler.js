import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageHandler extends Component {
  render() {
    const { match: { params } } = this.props;
    return <div>
      Page {params.id}<br /><br />
      <Link to="/">Go home</Link>
    </div>;
  }
}

export default PageHandler;
