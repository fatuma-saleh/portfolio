import React from 'react'
import "./works.scss"
export default function Works() {
  return (
    <div className='works' id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="docs/iCard.png" alt="" />
                </div>
                <h2>Title</h2>
                <p>Description</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
