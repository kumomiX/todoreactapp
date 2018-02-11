import React from 'react'
import ClearStorage from './ClearStorage'
import Activity from './Activity'

const DisplayActivitiesList = ({ activities, removeActivity, editActivity }) =>
  activities
    .reverse()
    .map(activity => (
      <Activity
        txt={activity}
        key={activity}
        removeActivity={removeActivity}
        editActivity={editActivity}
      />
    ))

const ActivitiesList = ({
  activities,
  clearActivities,
  removeActivity,
  editActivity
}) => {
  // check if there's any activities in the state
  return activities.length >= 1 ? ( // if yes => display them
    <ul id="ActivitiesList">
      <ClearStorage
        storageItem={'activities'}
        clearActivities={clearActivities}
      />
      <DisplayActivitiesList
        activities={activities}
        removeActivity={removeActivity}
        editActivity={editActivity}
      />
    </ul>
  ) : (
    <div id="ActivitiesList">No planned activities yet.</div>
  )
}

export default ActivitiesList
