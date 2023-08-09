import React from 'react'
import './activity.css'

const activities = ({name,type,participants,price,link}) => {
  return (
    
  <tr className='yesn'>
    <td >{type}</td>
    <td>{name}</td>
      <td > {participants}</td>
      <td > {price} € </td>
      <td>{link} %</td>
  </tr>
      )
}

export default activities