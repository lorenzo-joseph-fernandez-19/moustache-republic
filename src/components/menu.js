import React, { Component } from 'react';
import Image from "../images/classic-tee.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Card extends Component {
    constructor() {
      super();
      
      this.state = {
        showMenu: false,
      };
      
      this.showMenu = this.showMenu.bind(this)
      this.closeMenu = this.closeMenu.bind(this)
    }
    
    showMenu(event) {
      event.preventDefault()
      
      this.setState({ showMenu: true }, () => {
        document.addEventListener('click', this.closeMenu)
      })
    }
    
    closeMenu(event) {
      
      if (!this.dropdownMenu.contains(event.target)) {
        
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu)
        })
      }
    }
  

  render() {
    return (
        <div>
        <div className="cart">
          <div className="cart-text" onClick={this.showMenu}>
           My Cart ( 4 )
          </div>
         </div> 
        {
         this.state.showMenu
         ? (
           <div
             className="menu"
             ref={(element) => {
               this.dropdownMenu = element;
             }}
           >
               <table>
                <tr>
                    <td> 
                        <img src={Image} height="100px" />
                    </td>
                    <td colspan="2">Classic Tee
                        <tr>1x <strong>$75.00</strong></tr>
                        <tr>Size: S</tr>
                    </td>
                </tr>
                <tr>
                <td> 
                        <img src={Image} height="100px" />
                    </td>
                    <td colspan="2">Classic Tee
                        <tr>3x <strong>$75.00</strong></tr>
                        <tr>Size: L</tr>
                    </td>
                </tr>
               <td></td>
               </table>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Card 