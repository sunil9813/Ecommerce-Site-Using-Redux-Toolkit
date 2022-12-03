import React from "react"
import "./category.css"
import { GrFormPrevious } from "react-icons/gr"
import { MdNavigateNext } from "react-icons/md"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { category } from "../../assets/data/data"
import Slider from "react-slick"

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <MdNavigateNext className='icon' />
      </button>
    </div>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <GrFormPrevious className='icon' />
      </button>
    </div>
  )
}

export const Category = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  }
  return (
    <>
      <section className='category'>
        <div className='container'>
          <Slider {...settings}>
            {category.map((item) => (
              <div className='boxs' key={item.id}>
                <div className='box boxItems'>
                  <img src={item.cover} alt='' />
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}
