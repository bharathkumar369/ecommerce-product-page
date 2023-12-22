import React from "react";
import '../css/main.css'
import image1 from '../images/image-product-1-thumbnail.jpg'
import image2 from '../images/image-product-2-thumbnail.jpg'
import image3 from '../images/image-product-3-thumbnail.jpg'
import image4 from '../images/image-product-4-thumbnail.jpg'
import bigImage1 from '../images/image-product-1.jpg'
import bigImage2 from '../images/image-product-2.jpg'
import bigImage3 from '../images/image-product-3.jpg'
import bigImage4 from '../images/image-product-4.jpg'
import plus from '../images/icon-plus.svg'
import minus from '../images/icon-minus.svg'

const Main = (props)=> {
    const [image,setImage] = React.useState(bigImage1);

    // const [count,setCount] = React.useState(0)
    const changeImage = (image) => {
        setImage(image)
    }
    // const increase = () => {
    //     setCount((preCount)=> preCount+1)
    // }
    // const decrease = () =>{
        
    //     setCount((preCount)=> (preCount > 0 ? preCount-1: 0))
    // }
    return(
        <div className="main">
            <div className="main--left">
                <div>
                    <img src={image} alt="bigimage" className="main__image"/>
                </div>
                <div className="main--left__thumbnail">
                    <img src={image1} alt="thumbnail" className="main__thumbnail" onClick={()=>changeImage(bigImage1)}/>
                    <img src={image2} alt="thumbnail" className="main__thumbnail" onClick={()=>changeImage(bigImage2)}/>
                    <img src={image3} alt="thumbnail" className="main__thumbnail" onClick={()=>changeImage(bigImage3)}/>
                    <img src={image4} alt="thumbnail" className="main__thumbnail" onClick={()=>changeImage(bigImage4)}/>
                </div>
            </div>
            <div className="main--right">
                <h3>SNEAKER COMPANY</h3>
                <h1>Fall Limited Sneakers</h1>
                <p className="main--right__p">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                <h2 className="main--right__p1">$125.00 <span className="main--right__50">50%</span></h2>
                <p className="main--right__strike">$250.00</p>
                <div className="main--button__container">
                    <img className='main--button__decrease' src={minus} alt='minus' onClick={props.decrease}/>
                    <h2>{props.count}</h2>
                    <img className="main--button__increase" src={plus} alt='plus'onClick={props.increase}/>
                    <button className="main--button__add" onClick={props.cart}>ADD TO CART</button>
                </div>
            </div>

        </div>
    )
}
export default Main;