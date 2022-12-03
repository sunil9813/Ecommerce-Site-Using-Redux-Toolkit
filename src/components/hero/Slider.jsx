import React from "react"
import "./slider.css"
import { slide } from "../../assets/data/data"

export const Slider = () => {
  return (
    <>
      <div className='slider'>
        <div className='container grid'>
          {slide.map((item, i) => (
            <div className='box' key={i}>
              <div className='img'>
                <img src={item.image} alt='' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
