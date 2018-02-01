import React, { Component } from 'react';

class Activity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class: ''
    };

    this.element = <li onClick={this.handleClick}>{this.props.txt}</li>;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // remove activity on click
    let target = e.target;
    e.target.classList.add('toRemove');
    setTimeout(() => {
      this.props.removeActivity(target.innerHTML);
    }, 300);
  }

  componentDidMount() {
    // needed for slide-in animation
    setTimeout(() => {
      this.setState({ class: 'slide-in' });
    }, 60);
  }

  render() {
    let element = (
      <li onClick={this.handleClick} className={this.state.class}>
        {this.props.txt}
      </li>
    );

    return element;
  }
}

class DisplayActivitiesList extends Component {
  render() {
    let newList = [...this.props.activities]
      .reverse()
      .map((activity, ind) => (
        <Activity
          txt={activity}
          key={activity}
          removeActivity={this.props.removeActivity}
        />
      ));
    return newList;
  }
}

class ActivitiesList extends Component {
  render() {
    // check if there's any activities in the state
    let activities = [...this.props.activities];
    return activities.length >= 1 ? (
      // if yes => display them
      <ul>
        <DisplayActivitiesList
          activities={this.props.activities}
          removeActivity={this.props.removeActivity}
        />
      </ul>
    ) : (
      <div>No planned activities yet.</div>
    );
  }
}

export default ActivitiesList;
