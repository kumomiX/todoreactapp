import React, { Component } from 'react';

class Denied extends Component {
  render() {
    return <div className="elem warning">You've already planned this</div>;
  }
}

class SubmitButton extends Component {
  render() {
    return (
      <button type="submit" className="elem submit">
        Submit
      </button>
    );
  }
}

class InputBar extends Component {
  render() {
    return <input type="text" className="elem bar" name="InputBar" />;
  }
}

// form for adding new activities
class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      legit: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // add activity on submit
  handleSubmit(e) {
    e.preventDefault();
    let inputValue = e.target.InputBar.value;

    // if input is empty
    if (inputValue.length < 1) return;
    //if user has already planned this => warn him
    if (this.props.activities.includes(inputValue)) {
      this.setState({ legit: false });
      setTimeout(() => {
        this.setState({ legit: true });
      }, 700);
    } else {
      this.setState({ legit: true });
      this.props.addActivity(inputValue);
      e.target.InputBar.value = '';
    }
  }

  render() {
    return this.state.legit ? (
      <form onSubmit={this.handleSubmit} className="InputForm flex-container ">
        <InputBar />
        <SubmitButton />
      </form>
    ) : (
      <form onSubmit={this.handleSubmit} className="InputForm flex-container ">
        <InputBar />
        <Denied />
      </form>
    );
  }
}

export default InputForm;
