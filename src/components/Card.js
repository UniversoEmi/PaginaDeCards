import React from 'react'

function card({title, imageSource, url}) {
  return (
    <div className='card text-center bg-dark'>
      <img src={imageSource} alt=""/>
        <div className="card-body text-light">
          <h4  className="card-title">{title}</h4>
          <p className='card-text text-secondary'>lorem asdlkfaslñdfj ldkfjals djflas jdf</p>
          <a href={url} className='btn btn-outline-secondary border-0'> Click Para Entrar</a>
        </div>
    </div>
  )
}

export default card