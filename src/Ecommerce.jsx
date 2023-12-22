import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const Ecommerce = () => {
    const [count,setCount] = React.useState(0)
    const [addCount,setAddCount] = React.useState(0)

    const increase = () => {
        setCount((preCount)=> preCount+1)
    }
    const decrease = () =>{
        
        setCount((preCount)=> (preCount > 0 ? preCount-1: 0))
    }

    const addToCart = () => {
        setAddCount(count)
    }
    return(
        <div>
            <Navbar count={count} increase={increase} decrease={decrease} addCount={addCount} />
            <Main count={count} increase={increase} decrease={decrease} cart={addToCart} />
        </div>
    )
}   
export default Ecommerce;