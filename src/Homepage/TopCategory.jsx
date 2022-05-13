import React from 'react'
import './TopCategory.css'
import one from './one.jpg'
import two from './two.jpg'
import three from './three.jpg'
import four from './four.jpg'
import five from './five.jpg'
import six from './six.jpg'
import seven from './seven.jpg'
import eight from './eight.jpg'
import nine from './nine.jpg'

const TopCategory = () => {
    return (
        <>
            <div className="top-cat">
                    
                        {imgs.map((e)=>{
                            return(
                                <div className="image">
                                <img src={e.img} alt="" />
                                </div>
                            )
                        })}
                    
                
            </div>
        </>
    )
}

let imgs = [
    {
        img : one,
    },
    {
        img : two,
    },
    {
        img : three,
    },
    {
        img : four,
    },
    {
        img : five,
    },
    {
        img : six,
    },
    {
        img : seven,
    },
    {
        img : eight,
    },
    {
        img : nine,
    },
]

export default TopCategory
