import React from 'react'

import photo from '../img/下載.jpeg'
import './Order.css'

class Order extends React.Component{
  render(){
    return(
      <div className="d-flex align-items-center">
        <img src={photo} alt="fortnite" width="200" className="rounded mx-auto pl-4"/>
        <div className="col">
          <div className="order-title mb-2">Vintage T-shirt</div>
          <div className="row pl-3 d-flex align-items-center">
            <div className="order-time">
              <i className="fas fa-clock pr-2"></i> 2018/6/13 13:42
            </div>
            <div className="order-total">Total</div>
          </div>
          <div className="row pl-3 d-flex align-items-center">
            <div className="order-person">
              <i className="fas fa-user-alt pr-2"></i> Belle Willis
            </div>
            <div className="order-num">3,200</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Order