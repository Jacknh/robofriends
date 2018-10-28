import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { connect } from 'react-redux';
import { requestRobots, setSearchField } from '../store/actions';

const mapStateToProps = (state) => {
  return {
    robots: state.robotsApp.robots,
    isPending: state.robotsApp.isPending,
    error: state.robotsApp.error,
    searchField: state.searchApp.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestRobots: () => {
      dispatch(requestRobots());
    },
    onSearchField: e => {
      dispatch(setSearchField(e.target.value))
    }
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { robots, onSearchField, searchField, isPending } = this.props;
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
    
    return (
      <div className='tc'>
        <h1 className='f1'>robofriends</h1>
        <SearchBox setSearchField={onSearchField}></SearchBox>
        {
          isPending ? <h2>loading</h2> : <CardList robots={filteredRobots}></CardList>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
