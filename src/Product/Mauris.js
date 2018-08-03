import React from 'react'

import maple from '../img/maple.JPG'
import './Mauris.css'

class Mauris extends React.Component{
  render(){
    return(
      <div className="product-item-1 d-flex px-4 mt-3 text-left">
        <span className="col-3 pl-0 d-flex">
          <input className='mx-2 mt-2 rounded' type="checkbox" />
          <img src={maple} alt="maple" width="70" height="70" />
          <span className="mx-2 mt-2">Mauris non tem.</span>
        </span>
        <span className="col-2 mt-2">$3,200</span>
        <span className="col-1 mt-2">$2,800</span>
        <span className="col-4 mt-2">
          <div className="col">
            <div className="row">
              <div className="col-3">L</div>
              <div className="col-3">Gray<br/>Black</div>
              <div className="col-6 pl-5">15<br/>20</div>
            </div>
            <hr width="100%"/>
            <div className="row">
              <div className="col-3">M</div>
              <div className="col-3">Gray<br/>Black</div>
              <div className="col-6 pl-5">15<br/>20</div>
            </div>
            <hr width="100%"/>
            <div className="row">
              <div className="col-3">S</div>
              <div className="col-3">Gray<br/>Black</div>
              <div className="col-6 pl-5">15<br/>20</div>
            </div>
            <hr width="100%"/>
          </div>
        </span>
        <span className="col-1 mt-2">
          <span className="col-1">
          <div className="dropdown">
            <a className="btn btn-published dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              PUBLISHED
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="#">Published</a>
              <a className="dropdown-item" href="#">UnPublished</a>
            </div>
          </div>
        </span>
        </span>
       </div>
    )
  }
}

export default Mauris