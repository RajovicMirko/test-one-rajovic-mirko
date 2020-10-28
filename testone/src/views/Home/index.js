import React from 'react';

import { withRouter } from 'react-router-dom';

function Home(props) {
  const { history } = props;

  const handleClick = () => {
    history.push("/gists");
  }

  return (
    <div className="flex flex-column flex-center">
      <h1>Home page</h1>
      <button className="btn btn-primary" onClick={handleClick}>See gists</button>
    </div>
  )
}

export default withRouter(Home)
