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
    <div className="error page page-center">
        <div className="top">
          <img src={errorImage} alt="Error" />
          <div>
            <h3>{ error.type }</h3>
            <p>{ error.message }</p>
          </div>
        </div>
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
