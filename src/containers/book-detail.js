import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>选择一本书开始吧！</div>
    }

    return (
      <div>
        <div>
          <h3>详情:</h3>
          <div>{this.props.book.title}</div>
          <div>页数: {this.props.book.pages}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
