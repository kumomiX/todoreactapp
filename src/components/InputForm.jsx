import React, { Component } from 'react'
import { Denied, SubmitButton, InputBar } from './InputFormElements'

// form for adding new activities
class InputForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      legit: true
    }
  }

  // add activity on submit
  handleSubmit = e => {
    e.preventDefault()
    let inputValue = e.target.InputBar.value

    // if input is empty
    if (inputValue.length < 1) return
    //if user has already planned this => warn him
    if (this.props.activities.includes(inputValue)) {
      this.setState({ legit: false })
      setTimeout(() => {
        this.setState({ legit: true })
      }, 700)
    } else {
      this.props.addActivity(inputValue)
      e.target.InputBar.value = ''
    }
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        id="InputForm"
        className="flex-container"
      >
        <InputBar />
        {this.state.legit ? <SubmitButton /> : <Denied />}
      </form>
    )
  }
}

export default InputForm
