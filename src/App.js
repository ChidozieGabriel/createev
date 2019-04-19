import React, { Component } from 'react';
import './App.css';

const DEFAULT_QUERY = 'redux';
const DEFAULT_HPP = '100'; // HPP - Hits per page

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';

// eslint-disable-next-line no-unused-vars
const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes('' + searchTerm.toLowerCase())


class App extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);

    // eslint-disable-next-line no-unused-vars
    const list = [
      {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
      },
      {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
      }
    ]

    this.state = {
      searchTerm: DEFAULT_QUERY,
      result: null,
    }

    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onMoreClick = this.onMoreClick.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  setSearchTopStories(result) {
    const { hits, page } = result;

    const oldHits = page !== 0
      ? this.state.result.hits
      : [];

    const updatedHits = [
      ...oldHits,
      ...hits,
    ];

    this.setState({
      result:
      {
        hits: updatedHits,
        page
      }
    });
  }

  fetchSearchTopStories(searchTerm, page = 0) {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => error);
  }

  componentDidMount() {
    console.log('componentDidMount');

    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onSearchSubmit(event) {
    event.preventDefault();
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
  }

  onMoreClick(page) {
    const { searchTerm } = this.state;
    return () => {
      this.fetchSearchTopStories(searchTerm, page + 1);
    }
  }

  onDismiss(id) {
    const isNotId = (item) => item.objectID !== id;
    const updatedHits = this.state.result.hits.filter(isNotId);
    this.setState({
      result: Object.assign({},
        this.state.result,
        {
          hits:
            updatedHits
        })
    });
  }

  render() {
    console.log('render');

    const {
      searchTerm,
      result,
    } = this.state;
    const page = (result && result.page) || 0;

    return (
      <div className="page">
        <div className='interactions'>
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            Search
        </Search>
        </div>
        {result
          && <Table
            list={result.hits}
            onDismiss={this.onDismiss}
          />
        }
        <div className='interactions'>
          <Button onClick={this.onMoreClick(page)}>
            More
        </Button>

        </div>
      </div>
    );
  }
}

const Search = ({
  value,
  onChange,
  onSubmit,
  children,
}) =>
  <form onSubmit={onSubmit}>
    <input
      type='text'
      onChange={onChange}
      value={value}
    />
    <button type='submit'>
      {children}
    </button>
  </form>

const Table = ({
  list,
  onDismiss,
}) =>
  <div>
    <div className='table'>
      {list.map(item =>
        <div key={item.objectID} className='table-row'>
          <span style={{ width: '40%' }}>
            <a href={item.url}>{item.title}</a>
          </span>
          <span style={{ width: '30%' }}>{item.author}</span>
          <span style={{ width: '10%' }}>{item.num_comments}</span>
          <span style={{ width: '10%' }}>{item.points}</span>
          <span style={{ width: '10%' }}>
            <Button
              onClick={() => onDismiss(item.objectID)}
              className='button-inline'
            >
              Dismiss
              </Button>
          </span>
        </div>
      )}
    </div>
  </div>

const Button = ({
  onClick,
  className = '',
  children,
}) =>
  <button
    onClick={onClick}
    className={className}
    type='button'
  >
    {children}
  </button>

export default App;
