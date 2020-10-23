import './Layout.scss';
import React from 'react';
import NavBar from './NavBar';

function Layout(props) {
  return (
    <div id="layout">
      <NavBar />
      { props.children }
    </div>
  )
};

export default Layout;
