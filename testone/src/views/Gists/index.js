import React, { Component } from 'react';
import { connect } from 'react-redux';

// ACTIONS
import { getGists } from '../../store/actions/gists';

// COMPONENTS
import List from '../../components/List';
import Pagination from '../../components/Pagination';
import Loading from '../../components/Loading';

class Gists extends Component {
  constructor(){
    super();

    this.state = {
      pagination: {
        max_pages: 37,
        disableNext: true,
        query: {
          since: '',
          per_page: 30,
          page: 1,
        }
      }
    };
  }
  
  async componentDidMount(){
    await this.props.getGists(this.state.pagination.query);
  }

  handleListItemClick = (el) => {
    console.log(el);
  };

  addScrollEvent = () => {
    const listEl = document.querySelector('.list ul');
    listEl.addEventListener('scroll', (e) => {
      const el = e.target;
      const test = el.scrollHeight - el.scrollTop === el.clientHeight;
      if(test) {
        const state = this.state;
        state.pagination.disableNext = false;
        this.setState({ ...state });
      }
    })
  }

  handleNumberClick = (num) => {
    const state = this.state;
    state.pagination.query.page = num;

    this.setState({ ...state })
    this.props.getGists(this.state.pagination.query);
  }

  handlePaginationClickBack = () => {
    const state = this.state;
    state.pagination.query.page -= 1;
    state.pagination.disableNext = true;

    this.setState({ ...state })
    this.props.getGists(this.state.pagination.query);
  }

  handlePaginationClickNext = () => {
    const state = this.state;
    state.pagination.query.page += 1;
    state.pagination.disableNext = true;

    this.setState({ ...state })
    this.props.getGists(this.state.pagination.query);
  }

  render() {
    const { gists, isLoading } = this.props;

    return (
      <div className="gists page page-footer">
        { !isLoading &&
          <List
            data={gists}
            addScrollEvent={this.addScrollEvent}
            onListItemClick={this.handleListItemClick}
          /> }

        { isLoading && <Loading /> }

        <Pagination
          {...this.state.pagination}
          onNumberClick={this.handleNumberClick}
          onClickBack={this.handlePaginationClickBack}
          onClickNext={this.handlePaginationClickNext}
        />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    gists: state.gists.gists,
    isLoading: state.gists.isLoading,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGists: (pagination) => dispatch(getGists(pagination))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gists);