import React from 'react'

export const Denied = () => (
  <div className="elem warning">You've already planned this.</div>
)

export const SubmitButton = () => (
  <button type="submit" className="elem submit">
    CONFIRM
  </button>
)

export const InputBar = () => (
  <input
    type="text"
    autoComplete="off"
    className="elem bar"
    id="InputBar"
    name="InputBar"
    placeholder="What needs to be done?"
  />
)
