import React from 'react'
import Card from './Card'

import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
const cards = [ 
  {
    id: 1,
  title: 'Emi Web',
  image: img1  
  },
  {
    id: 2,
  title: 'Emi tarjeta',
  image: img2  
  },
  {
    id: 3,
  title: 'Emi blog ',
  image: img3  
  }
]


function Cards() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className="row">
            {
              cards.map(card => (
                <div className="col-md-4" key={card.id}>
                  <Card title="card.title"/>
                </div>
              ))
            }

        </div>
        
    </div>
  )
}

export default Cards