import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import Error from './Error';

function Layout(props) {
  const { error } = props;

  return (
    <div id="layout" className="page page-header">
      <NavBar />
      { !error.hasError && props.children }
      <Error />
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    error: state.error
  }
};

export default connect(mapStateToProps)(Layout);
