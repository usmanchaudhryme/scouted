import React from 'react'
import PropTypes from 'prop-types'

export const ProgressBar = ({ width, color }) => {
  return (
    <div className={`relative flex flex-row w-full text-center text-xs items-center h-1 mt-2 mb-2 border`}>
      <div style={{ width: `${width}%` }} className={`top-0 left-0 h-1 w-full ${color}`}></div>
    </div>
  )
}

ProgressBar.propTypes = {
  width: PropTypes.number.isRequired,
  color: PropTypes.string
}

export const ProgressBarWithText = ({ width, color }) => {
  return (
    <div className={`relative flex flex-row w-full text-center text-xs items-center h-5 mt-2 mb-2 border`}>
      <div style={{ width: `${width}%` }} className={`absolute top-0 w-full ${color} text-white`}>{width}%</div>
    </div>
  )
}

ProgressBar.propTypes = {
  width: PropTypes.number.isRequired,
  color: PropTypes.string
}

