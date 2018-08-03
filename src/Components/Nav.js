import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

class Nav extends React.Component{
  render(){
    return(
      <div className="custom-nav">
        <div className="title">Shoptime</div>
        <Link to='/'>HOME</Link>
        <Link to='/order'>ORDERS</Link>
        <Link to='/product'>PRODUCT</Link>
        <div className="admin">ADMIN</div>
      </div>
    )
  }
}

export default Nav