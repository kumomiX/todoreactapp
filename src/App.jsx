import React, { Component } from 'react';
//import './styles/css/App.css';
import Header from './components/Header';
import InputForm from './components/InputForm';
import ActivitiesList from './components/ActivitiesList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // list of all activitites
      activities: []
    };
    this.addActivity = this.addActivity.bind(this);
    this.removeActivity = this.removeActivity.bind(this);
  }

  addActivity(newActivity) {
    this.setState({
      activities: [...this.state.activities, newActivity]
    });
  }

  removeActivity(activity) {
    let filteredArray = this.state.activities.filter(item => item !== activity);
    this.setState({
      activities: [...filteredArray]
    });
  }

  render() {
    return (
      <div>
        <Header headerText={this.state.headerText} />

        <InputForm
          addActivity={this.addActivity}
          activities={this.state.activities}
        />
        <div className="flex-container">
          <ActivitiesList
            activities={this.state.activities}
            removeActivity={this.removeActivity}
          />
        </div>
      </div>
    );
  }
}

export default App;
