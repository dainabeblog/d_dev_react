import React from 'react';
import axios from 'axios';
import SearchWordWrapper from './SearchWordWrapper';

export default class SearchForm extends React.Component {
  render() {
    return (
      <>
        <SearchWordWrapper onSearchYoutube={this.onSearchYoutube} />
        {/* <SearchServiceList /> */}
      </>
    )
  }
}
