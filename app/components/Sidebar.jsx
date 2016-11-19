import React, {Component} from 'react';
import {
  ListView,
  ListViewHeader,
  ListViewFooter,
  ListViewSection,
  ListViewSectionHeader,
  ListViewRow,
  ListViewSeparator,
  Text
} from 'react-desktop/macOs';

export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      selected: null
    };
  }

  render() {
    return (
      <ListView background="lightgrey" width="240" height="200" marginTop="-547px">
        <ListViewSection header={this.renderSectionHeader('Select books')}>
          {this.renderItem('Item 1', 'All')}
          {this.renderItem('Item 2', 'Borrowed')}
          {this.renderItem('Item 3', 'Lent')}
        </ListViewSection>
       
      </ListView>
    );
  }

  renderSectionHeader(title) {
    return (
      <ListViewSectionHeader>
        {title}
      </ListViewSectionHeader>
    );
  }

  renderItem(title, info) {
    return (
      <ListViewRow
        onClick={() => this.setState({selected: title})}
        background={this.state.selected === title
        ? '#d8dadc'
        : null}>
        <svg
          width="12"
          height="12"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
          style={{
          marginRight: '3px'
        }}><path
          d="M1412 897q0-27-18-45l-91-91q-18-18-45-18t-45 18l-189 189v-502q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v502l-189-189q-19-19-45-19t-45 19l-91 91q-18 18-18 45t18 45l362 362 91 91q18 18 45 18t45-18l91-91 362-362q18-18 18-45zm252-1q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
        </svg>
        <Text color="#414141" size="13">{info}</Text>
      </ListViewRow>
    );
  }
}
