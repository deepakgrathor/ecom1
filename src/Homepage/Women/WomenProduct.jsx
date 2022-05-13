import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react'
import WomentProduct from './WomenProduct.css'
import wo1 from './wo1.jpg'
import wo2 from './wo2.jpg'
import wo3 from './wo3.jpg'
import wo4 from './wo4.jpg'
import wo5 from './wo5.jpg'
import wo6 from './wo6.jpg'
import me1 from './me1.jpg'
import me2 from './me2.jpg'
import me3 from './me3.jpg'
import me4 from './me4.jpg'
import me5 from './me5.jpg'
import me6 from './me6.jpg'
import mo1 from './mo1.jpg'
import mo2 from './mo2.jpg'
import mo3 from './mo3.jpg'
import mo4 from './mo4.jpg'
import mo5 from './mo5.jpg'
import be1 from './be1.jpg'
import be2 from './be2.jpg'
import be3 from './be3.jpg'
import be4 from './be4.jpg'
import be5 from './be5.jpg'
import sh1 from './sh1.jpg'
import sh2 from './sh2.jpg'
import sh3 from './sh3.jpg'
import sh4 from './sh4.jpg'
import sh5 from './sh5.jpg'



const WomenProduct = (props) => {
  return (
    <>
      {props.data.map((e) => {
        return (
          <div className="pro-card">
            <div className="image-hai">
              <img src={e.img} alt="" />
            </div>
            <div className="bottom-area">
              <div className="cat-wish">
                <h4>{e.cat}</h4>
                <img src={e.wish} alt="" />
              </div>
              <div className="title">
                <h3>{e.title}</h3>
                <div className="bottom">
                  <h2>{e.price}</h2>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        )
      })}

    </>
  )
}

export let womenProduct = [
  {
    img: wo1,
    cat: "Women",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product1",
    price: "Rs.399/-"
  },
  {
    img: wo2,
    cat: "Women",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product2",
    price: "Rs.499/-"
  },
  {
    img: wo3,
    cat: "Women",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product3",
    price: "Rs.599/-"
  },
  {
    img: wo4,
    cat: "Women",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product4",
    price: "Rs.699/-"
  },
  {
    img: wo5,
    cat: "Women",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product5",
    price: "Rs.799/-"
  },
]
export let menProduct = [
  {
    img: me1,
    cat: "Men",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product1",
    price: "Rs.399/-"
  },
  {
    img: me2,
    cat: "Men",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product2",
    price: "Rs.499/-"
  },
  {
    img: me3,
    cat: "Men",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product3",
    price: "Rs.599/-"
  },
  {
    img: me4,
    cat: "Men",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product4",
    price: "Rs.699/-"
  },
  {
    img: me5,
    cat: "Men",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product5",
    price: "Rs.799/-"
  },
]
export let mobileItem = [
  {
    img: mo1,
    cat: "Mobile",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product1",
    price: "Rs.399/-"
  },
  {
    img: mo2,
    cat: "Mobile",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product2",
    price: "Rs.499/-"
  },
  {
    img: mo3,
    cat: "Mobile",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product3",
    price: "Rs.599/-"
  },
  {
    img: mo4,
    cat: "Mobile",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product4",
    price: "Rs.699/-"
  },
  {
    img: mo5,
    cat: "Mobile",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product5",
    price: "Rs.799/-"
  },
]
export let beauty = [
  {
    img: be1,
    cat: "Beauty",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product1",
    price: "Rs.399/-"
  },
  {
    img: be2,
    cat: "Beauty",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product2",
    price: "Rs.499/-"
  },
  {
    img: be3,
    cat: "Beauty",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product3",
    price: "Rs.599/-"
  },
  {
    img: be4,
    cat: "Beauty",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product4",
    price: "Rs.699/-"
  },
  {
    img: be5,
    cat: "Beauty",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product5",
    price: "Rs.799/-"
  },
]
export let shoesE = [
  {
    img: sh1,
    cat: "Shoes",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product1",
    price: "Rs.399/-"
  },
  {
    img: sh2,
    cat: "Shoes",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product2",
    price: "Rs.499/-"
  },
  {
    img: sh3,
    cat: "Shoes",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product3",
    price: "Rs.599/-"
  },
  {
    img: sh4,
    cat: "Shoes",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product4",
    price: "Rs.699/-"
  },
  {
    img: sh5,
    cat: "Shoes",
    wish: "https://img.icons8.com/ios/50/000000/like--v1.png",
    title: "Product5",
    price: "Rs.799/-"
  },
]

export default WomenProduct
