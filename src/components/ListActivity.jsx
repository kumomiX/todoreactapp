import React, { Component } from 'react'

class ListActivity extends Component {
  componentDidMount() {
    // needed for slide-in animation
    setTimeout(() => {
      if (this.listActivity) {
        this.listActivity.className = 'slide-in'
      }
    }, 60)
  }

  render() {
    return (
      <li ref={listActivity => (this.listActivity = listActivity)}>
        <span className="activity" onClick={this.props.handleClick}>
          {this.props.txt}
        </span>
        <button
          className="edit-button hover-hidden"
          onClick={this.props.clickOnEditButton}
        >
          <i className="far fa-edit" />
        </button>
      </li>
    )
  }
}

export default ListActivity
