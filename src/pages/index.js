import React from "react"
import Image from "../images/classic-tee.jpg"
import Menu from "../components/menu"
import "../styles/mystyles.css"


const productPage = () => {
return (
  <div>
    <Menu />
    <div className="flex-container"> 
      <div className="flex-image">
        <img src={Image} alt="classic-tee" height="65%"/>
      </div>
      <div className="flex-description">
        <h1 className="product-title">Classic Tee</h1>
        <div className="lines">
          <p className="price">$75.00</p>
        </div>
        <p className="product-details">Dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus</p>
        <p id="size" className="product-details">SIZE<span className="red">*</span></p>
        <button id="small" className="size-button"> S</button>
        <button id="medium" className="size-button">M</button>
        <button id="large" className="size-button" >L</button>
        <br />
        <br/ >
        <button className="atc-button" onclick="">Add to Cart</button>
      </div>
    </div>
  </div>
)}

export default productPage

