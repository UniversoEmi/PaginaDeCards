import React from 'react'
import PropTypes from 'prop-types'

function Card({title, imageSource, text, url,}) {
  return (
    <div className='card text-center bg-dark'>
      <img src={imageSource} alt=""/>
        <div className="card-body text-light">
          <h4  className="card-title">{title}</h4>
          <p className='card-text text-secondary'>lorem asdlkfaslñdfj ldkfjals djflas jdf</p>
          <a href={url} className='btn btn-outline-secondary border-0' target="_blank"> Click Para Entrar</a>
        </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string
}

export default Card