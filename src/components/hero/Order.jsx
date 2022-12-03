import React from "react"
import { order } from "../../assets/data/data"
import "./slider.css"

export const Order = () => {
  return (
    <>
      <section className='order'>
        <div className='container grid boxItems'>
          {order.map((item) => (
            <div className='box flexCenter' key={item.id}>
              <div className='num'>
                <h1>{item.id}</h1>
              </div>
              <div className='text'>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
