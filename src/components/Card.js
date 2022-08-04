import React from 'react'

import img1 from '../assets/img1.jpg'
function card() {
  return (
    <div className='card'>
      <img src={img1} alt=""/>
        <div className="card-body">
          <h4  className="card-title">My title</h4>
          <p className='card-text text-secondary'>lorem asdlkfaslñdfj ldkfjals djflas jdf</p>
        </div>
    </div>
  )
}

export default card