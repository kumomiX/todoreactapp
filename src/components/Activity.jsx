import React, { Component } from 'react'
import EditActivity from './EditActivity'
import ListActivity from './ListActivity'

class Activity extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editMode: false, // switch to textarea
      toEdit: '' // needed for text modification
    }
  }

  handleClick = e => {
    // remove activity on click
    let target = e.target
    // needed for slide-out animation
    e.target.closest('li').classList.add('slide-out')
    setTimeout(() => {
      this.props.removeActivity(target.firstChild.textContent)
    }, 200)
  }

  clickOnEditButton = e => {
    // check if there's soem edit in process
    if (document.getElementById('editArea')) return
    // start editing
    this.setState({
      editMode: true,
      toEdit: e.target.closest('button').previousSibling.innerText
    })
    setTimeout(() => {
      document.getElementById('editArea').focus()
    }, 10)
  }

  confirmChange = e => {
    // get textarea value
    let newText = document.getElementById('editArea').value
    // update state with new value
    this.props.editActivity(this.state.toEdit, newText)
    this.setState({
      editMode: false,
      toEdit: ''
    })
  }

  render() {
    // render textarea in edit mode and list activity in normal mode
    return this.state.editMode ? (
      <EditActivity txt={this.props.txt} confirmChange={this.confirmChange} />
    ) : (
      <ListActivity
        txt={this.props.txt}
        handleClick={this.handleClick}
        clickOnEditButton={this.clickOnEditButton}
      />
    )
  }
}

export default Activity
