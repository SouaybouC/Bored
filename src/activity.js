import React from 'react'
import './activity.css'

const activities = ({name,type,participants,price,link}) => {
  return (
    <div className='activity-container'>
        <div className='activity-row'>
            <div className='activity'>
               <h1>{name}</h1>
              
            </div>
            <div className='activity-data'>
              <p className='activity-type'>{type}</p>
                <p className='activity-participants'>{participants}</p>
                <p className='activity-price'>{price}</p>

                <p className='activity-link'>{link}</p>
            </div>
        </div>
    </div>
  )
}

export default activities