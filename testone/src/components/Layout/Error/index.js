import './error.scss';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import errorImage from '../../../assets/error.webp';
import { clearError } from '../../../store/actions/error';

function Error(props) {
  const { history, error, clearError } = props;

  const handleClick = () => {
    clearError();
    history.push(error.goBack);
  }

  return (
    error.hasError &&
    <div className="error flex flex-column flex-center">
        <img src={errorImage} alt="Error" />
        <h4>{ error.type }</h4>
        <p>{ error.message }</p>
        <button className="btn btn-primary" onClick={handleClick}>Go Back</button>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    error: state.error
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearError: () => dispatch(clearError())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Error));
