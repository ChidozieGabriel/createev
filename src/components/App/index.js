import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
import Search from '../Search';
import Table from '../Table';
import { Button } from '../Buttons';
import {
  DEFAULT_QUERY,
  PATH_BASE,
  PATH_SEARCH,
  PARAM_SEARCH,
  PARAM_PAGE,
  PARAM_HPP,
  DEFAULT_HPP
} from '../../constants';

class App extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    // eslint-disable-next-line no-unused-vars
    const list = [
      {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0
      },
      {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1
      }
    ];

    this.state = {
      searchTerm: DEFAULT_QUERY,
      results: null,
      searchKey: '',
      error: null
    };

    this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onMoreClick = this.onMoreClick.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  needsToSearchTopStories(searchTerm) {
    if (!this.state.results) return true;
    return !this.state.results[searchTerm];
  }

  setSearchTopStories(result) {
    console.log('setSearchTopStories:result', result);

    const { hits, page: _newPage } = result;
    const newPage = _newPage + 1;
    const { results, searchKey } = this.state;

    const oldHits =
      results && results[searchKey] ? results[searchKey].hits : [];
    const oldPage =
      (results && results[searchKey] && results[searchKey].page) || 0;
    const isNewHit = newPage > oldPage;
    const page = isNewHit ? newPage : oldPage;
    const updatedHits = isNewHit ? [...oldHits, ...hits] : [...oldHits];

    this.setState({
      results: {
        ...results,
        [searchKey]: {
          hits: updatedHits,
          page
        }
      }
    });
  }

  fetchSearchTopStories(searchTerm, page = 0) {
    this.setState({ error: null });
    axios(
      `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`
    )
      .then(result => this._isMounted && this.setSearchTopStories(result.data))
      .catch(error => this._isMounted && this.setState({ error }));
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onSearchSubmit(event) {
    event.preventDefault();
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });

    if (this.needsToSearchTopStories(searchTerm))
      this.fetchSearchTopStories(searchTerm);
  }

  onMoreClick(page) {
    const { searchTerm } = this.state;
    return () => {
      this.fetchSearchTopStories(searchTerm, page);
    };
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const { results, searchKey } = this.state;
    const { hits, ...rest } = results[searchKey];
    const updatedHits = hits.filter(isNotId);
    this.setState({
      results: {
        ...results,
        [searchKey]: {
          hits: updatedHits,
          ...rest
        }
      }
    });
  }

  render() {
    const { searchTerm, searchKey, results, error } = this.state;

    const page =
      (results && results[searchKey] && results[searchKey].page) || 0;

    const hits =
      (results && results[searchKey] && results[searchKey].hits) || [];

    return (
      <div className='page'>
        <div className='interactions'>
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            Search
          </Search>
        </div>
        <Table list={hits} onDismiss={this.onDismiss} />
        {error && (
          <div className='error'>
            <p>Something went wrong!</p>
          </div>
        )}
        <div className='interactions'>
          <Button onClick={this.onMoreClick(page)}>More</Button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this._isMounted = true;

    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
    this.fetchSearchTopStories(searchTerm);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount:');
    this._isMounted = false;
  }
}

export default App;
