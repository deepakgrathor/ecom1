import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Slider from './Slider'
import TopCategory from './TopCategory'
import Footer from './Footer'
import WomenProduct, { mobile, shoes } from './Women/WomenProduct'
import { womenProduct } from './Women/WomenProduct'
import { menProduct } from './Women/WomenProduct'
import { mobileItem } from './Women/WomenProduct'
import { beauty } from './Women/WomenProduct'
import { shoesE } from './Women/WomenProduct'



const Homepage = () => {
  const women = womenProduct
  const men = menProduct
  const mobile = mobileItem
  const makeup = beauty
  const shoes = shoesE

  return (
    <>
      <Navbar />
      <Slider />
      <section className="top-category">
        <h2>Top Category</h2>
        <TopCategory />
      </section>
      {/* Women */}
      <section>
        <h2 className="women-cat">Women's Fashion</h2>
        <div className="woo-main-card">
          <WomenProduct data={women} />
        </div></section>
      {/* For men */}
      <section>
        <h2 className="women-cat">Mens Fashion</h2>
        <div className="woo-main-card">
          <WomenProduct data={men} />
        </div></section>
        {/* For Mobile */}
      <section>
        <h2 className="women-cat">Latest Mobile</h2>
        <div className="woo-main-card">
          <WomenProduct data={mobile} />
        </div></section>
        {/* For Beauty */}
      <section>
        <h2 className="women-cat">Beauty Makeup</h2>
        <div className="woo-main-card">
          <WomenProduct data={makeup} />
        </div></section>
        {/* For Shoes */}
      <section>
        <h2 className="women-cat">Beauty Makeup</h2>
        <div className="woo-main-card">
          <WomenProduct data={shoes} />
        </div></section>
      <Footer />
    </>
  )
}

export default Homepage
