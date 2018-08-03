import React from 'react'

import Ian from '../People/Ian'
import Manuel from '../People/Manuel'
import Daisy from '../People/Daisy'
import Reynolds from '../People/Reynolds'
import DaisyReynolds from '../People/DaisyReynolds'
import Pagination from '../Components/Pagination'
import './PageOrder.css'

class PageOrder extends React.Component{
  render(){
    return(
      <div className="order-page">
        <div className="checkbox row m-auto align-items-center">
          <input className='first' id='checkbox' type="checkbox"  />
          <div class="btn-group">
            <button type="button" class="btn btn-select dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="sr-only">Toggle Dropdown</span>
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Select All</a>
              <a class="dropdown-item" href="#">Paid</a>
              <a class="dropdown-item" href="#">Unpaid</a>
              <a class="dropdown-item" href="#">Shipping</a>
              <a class="dropdown-item" href="#">Done</a>
            </div>
          </div>
          <button type="button" className="btn transparent" data-toggle="tooltip" data-placement="bottom" title="Change Status">
            <i className="fas fa-tags"></i>
          </button>
          
          <div className="btn-group">
            <button type="button" className="btn btn-transparent dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              EDIT SECTION
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <button className="dropdown-item"><input className='mr-2' id='checkbox' type="checkbox" />Order ID</button>
              <button className="dropdown-item"><input className='mr-2' id='checkbox' type="checkbox" />Customer</button>
              <button className="dropdown-item"><input className='mr-2' id='checkbox' type="checkbox" />Product List</button>
              <button className="dropdown-item"><input className='mr-2' id='checkbox' type="checkbox" />Total</button>
              <button className="dropdown-item"><input className='mr-2' id='checkbox' type="checkbox" />Add to Cart</button>
              <button className="dropdown-item"><input className='mr-2' id='checkbox' type="checkbox" />Check-out</button>
              <button className="dropdown-item"><input className='mr-2' id='checkbox' type="checkbox" />Address</button>
              <button className="dropdown-item"><input className='mr-2' id='checkbox' type="checkbox" />Phone</button>
              <button className="dropdown-item"><input className='mr-2' id='checkbox' type="checkbox" />Status</button>
            </div>
          </div>
        </div>

        <div className="order-menu mt-3">
          <div className="custom-title d-flex align-items-center">
            <span className="col-2">Customer</span>
            <span className="col-2 text-left">Product List</span>
            <span className="">Total</span>
            <span className="col-2">Add to Cart</span>
            <span className="col-2">Check-out</span>
            <span className="col-2">Address</span>
            <span className="col-1">Status</span>
          </div>
          <Ian />
          <Manuel />
          <Daisy />
          <Reynolds />
          <DaisyReynolds />
          <Pagination />
        </div>
      </div>
    )
  }
}

export default PageOrder