import React from 'react'

import './Website.css'

class Website extends React.Component{
  render(){
    return(
      <div className="row d-flex align-items-center">
        <i className="fab fa-facebook fa-3x m-4 pl-5"></i>
        <div className="title px-2">Facebook.com</div>
        <div className="price mx-4 pl-5">45,836</div>
        <div className="percent m-2 pl-2">
          <i className="fas fa-arrow-up m-2"></i>20%
        </div>
      </div>
    )
  }
}

export default Website