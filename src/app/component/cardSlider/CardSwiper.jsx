
import React from 'react'
// import '../../pages/style.scss'

const CardSwiper = ({curElem}) => {
    const {image, title , description} = curElem;
  return (
    <>
    <li className="feature-card-li">
          <div className="feature-card">
            <div className="card-imgs">
              <img src={image} alt="" />
            </div>
            <div className="f-card-body">
              <h3>{title}</h3>
              <p>
            {description}
              </p>
            </div>
          </div>
        </li>
    
    </>
  )
}

export default CardSwiper