import React, { Component } from 'react'

class ClearStorage extends Component {
  clearStorage = () => {
    let storage = window.localStorage
    storage.removeItem(this.props.storageItem)

    this.props.clearActivities(this.props.storageItem)
  }

  render() {
    return (
      <button onClick={this.clearStorage} id="clearActivites">
        <i className="far fa-trash-alt hover-show" />
        <i className="fas fa-trash-alt hover-hidden" />
      </button>
    )
  }
}

export default ClearStorage
