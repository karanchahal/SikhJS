import React, { Component } from 'react';

import { Link } from 'react-router';
import { Throttle } from 'react-throttle';

import { Textfield, Button, Card, CardTitle, CardText, CardActions } from 'react-mdl';

import Toolbar from '../Toolbar';
import Loader from '../Loader';

import { clearAllBookmarks, getAllBookmarks, updateBookmarkTitle } from '../../bookmarks';

const SearchCard = ({ data, onTitleChange }) => {
  const { title, id, key, value, timestamp } = data;

  return (
    <Card shadow={0} style={{ margin: 10 }}>
      <CardTitle>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column', flexWrap: 'wrap', }}>
            <Throttle handler="onChange" time="200">
              <Textfield
                label={title}
                onChange={(e, v) => onTitleChange(v)}
                type="text"
                defaultValue={title}
              />
            </Throttle>
          </div>
        </div>
      </CardTitle>
      <CardActions>
        { key === 'shabad' && <Link to={`shabad/${value}`}><Button ripple>Open Shabad</Button></Link> }
        { key === 'sggs' && <Link to={`SGGS/${value}`}><Button ripple>{`Open Ang ${value}`}</Button></Link> }
      </CardActions>
    </Card>
  );
};

export default class Bookmarks extends Component {
  constructor(p) {
    super(p);
    this.state = {
      bookmarks: [],
      loading: true,
      keyword: ''
    }
    getAllBookmarks()
      .then(bookmarks => this.setState({ bookmarks, loading: false }))
      .catch(e => console.error(e));
  }
  render() {
    let { loading, bookmarks, keyword } = this.state;

    if (keyword !== '') { bookmarks = bookmarks.filter(e => e.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1); }

    return (
      <div>
        <Toolbar title={`Bookmarks`}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Throttle time={500} handler="onChange">
              <Textfield onChange={e => this.updateKeyword(e.target.value)} floatingLabel label="Search"/>
            </Throttle>
            <Button onClick={e => this.clearAllBookmarks()}>Clear All Bookmarks</Button>
          </div>
        </Toolbar>
        <Loader loading={loading}>
          {
            bookmarks.length === 0
            ? <h1 style={{ textAlign: 'center' }}>No Bookmarks Found</h1>
            : <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row' }}>
              {
                bookmarks.map(b => (
                  <SearchCard data={b} key={b.id} onTitleChange={(title = b.title) => this.updateBookmark({ ...b, title })} />
                ))
              }
            </div>
          }
        </Loader>
      </div>
    );
  }
  updateBookmark({ key, value, id, timestamp, title }) {
    updateBookmarkTitle({ key, value, id, timestamp, title })
      .then(e => console.log(e))
      .catch(e => console.error(e));
  }
  clearAllBookmarks() {
    clearAllBookmarks()
      .then(e => this.setState({ bookmarks: [] }))
      .catch(e => console.error(e));
  }
  updateKeyword(keyword) {
    this.setState({ keyword });
  }
}
