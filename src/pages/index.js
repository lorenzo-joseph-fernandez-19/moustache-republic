import React from "react"
import Image from "../images/classic-tee.jpg"
import "../styles/mystyles.css"

function size () {
  document.getElementById('small') 
}

const productPage = () => {
return (
  <div>
    <div class="cart">
      <p class="cart-text">My Cart (4) </p>
    </div>
    <div class="flex-container"> 
      <div>
        <img class="flex-image" src={Image} alt="classic-tee" height="65%"/>
      </div>
      <div class="flex-description">
        <h1 class="product-title">Classic Tee</h1>
        <div class="lines">
          <p class="price">$75.00</p>
        </div>
        <p class="product-details">Dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus</p>
        <p class="product-details">SIZE<span class="red">*</span></p>
        <button id="small" class="size-button" onclick="">S</button>
        <button id="medium" class="size-button" onclick="size()">M</button>
        <button id="large" class="size-button" onclick="size()">L</button>
        <br />
        <br/ >
        <button class="atc-button" onclick="">Add to Cart</button>
      </div>
    </div>
  </div>
)}

export default productPage

