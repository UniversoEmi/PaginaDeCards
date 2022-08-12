import React from 'react'

import img1 from '../assets/img1.jpg'
function card() {
  return (
    <div className='card text-center bg-dark'>
      <img src={img1} alt=""/>
        <div className="card-body text-light">
          <h4  className="card-title">My title</h4>
          <p className='card-text text-secondary'>lorem asdlkfaslñdfj ldkfjals djflas jdf</p>
          <a href='#!' className='btn btn-outline-secondary border-0'> Click Para Entrar</a>
        </div>
    </div>
  )
}

export default card