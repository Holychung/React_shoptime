import React from 'react'

import './Nav.css'

class Nav extends React.Component{
  render(){
    return(
      <div className="custom-nav">
        <a className="title">Shoptime</a>
        <a >HOME</a>
        <a >ORDERS</a>
        <a >PRODUCT</a>
      </div>
    )
  }
}

export default Nav