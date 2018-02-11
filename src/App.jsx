import React, { Component } from 'react'
import Header from './components/Header'
import InputForm from './components/InputForm'
import ActivitiesList from './components/ActivitiesList'
import { focusInput } from './helpers.js'
let activitiesStorage = window.localStorage

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // list of all activitites
      activities: []
    }
  }

  componentWillMount() {
    // load local storage on load if any
    this.setState({
      activities: JSON.parse(activitiesStorage.getItem('activities')) || []
    })
  }

  componentDidMount() {
    // focus input on load
    focusInput()
  }

  addActivity = newActivity => {
    this.setState({
      activities: [...this.state.activities, newActivity]
    })
    focusInput()
  }

  removeActivity = activity => {
    let filteredArray = this.state.activities.filter(item => item !== activity)
    this.setState({
      activities: [...filteredArray]
    })
  }

  editActivity = (activity, newText) => {
    if (newText === '') {
      this.removeActivity(activity)
      return
    }
    const [...activities] = this.state.activities

    if (activities.includes(newText)) return

    let ind = activities.findIndex(el => el === activity)
    let newArray = [...activities]
    newArray[ind] = newText
    this.setState({
      activities: [...newArray]
    })
  }

  clearActivities = storageItem => {
    this.setState({
      activities: []
    })
  }

  render() {
    const [...activities] = this.state.activities

    activitiesStorage.setItem('activities', JSON.stringify(activities))

    return (
      <div>
        <Header />
        <InputForm addActivity={this.addActivity} activities={activities} />
        <ActivitiesList
          className="flex-container"
          activities={activities}
          removeActivity={this.removeActivity}
          clearActivities={this.clearActivities}
          editActivity={this.editActivity}
        />
      </div>
    )
  }
}

export default App
