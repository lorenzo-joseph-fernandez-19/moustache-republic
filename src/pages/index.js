import React from "react"
import Image from "../images/classic-tee.jpg"
import "../styles/mystyles.css"

const cartStyle = {
  backgroundColor: '#F6F6F7',
  width: '100%',
  textAlign: 'right',
  marginTop: '20px',
  marginBottom: '20px',
  color: '#888888',
}

const productPage = () => {
return (
  <div>
    <div style={cartStyle}>My Cart </div>
    <div class="flex-container"> 
      <div>
        <img class="flex-image" src={Image} alt="classic-tee" />
      </div>
      <div class="flex-description">
        <h1>Classic Tee</h1>
        <hr />
        <p class="price">$75.00</p>
        <hr />
        <p>Dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus</p>
        <p>SIZE<span>*</span></p>
        <button onclick="">S</button>
        <button onclick="">M</button>
        <button onclick="">L</button>
        <button onclick="">Add to Cart</button>
      </div>
    </div>
  </div>
)}

export default productPage

