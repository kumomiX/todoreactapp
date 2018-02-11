import React from 'react'

const EditActivity = ({ txt, confirmChange }) => (
  <div className="textareaContainer">
    <textarea
      rows="1"
      defaultValue={txt}
      onKeyDown={e => {
        if (e.keyCode === 13) confirmChange(e) // confirm change on Enter
      }}
      tabIndex="0"
      id="editArea"
    />
    <button className="edit-button" onClick={confirmChange}>
      <i className="far fa-check-circle" />
    </button>
  </div>
)

export default EditActivity
