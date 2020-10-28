import React from 'react';
import NavBar from './NavBar';
import ErrorWrapper from './Error';

function Layout(props) {
  return (
    <div id="layout" className="page page-header">
      <NavBar />
      <ErrorWrapper>
        { props.children }
      </ErrorWrapper>
    </div>
  )
};

export default Layout;
