import React from 'react'

import Mauris from '../Product/Mauris'
import Curabitur from '../Product/Curabitur'
import Lobo from '../Product/Lobo'
import Modal from '../Components/Modal'
import './PageProduct.css'

class PageProduct extends React.Component{
  render(){
    return(
      <div>
        <div className="first-row checkbox m-auto align-items-center">
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
          <button type="button" className="add-product my-auto" data-toggle="modal" data-target="#exampleModal">
            ADD NEW PRODUCT
            <i className="fas fa-plus px-2"></i>
          </button>

          {/* Modal */}
          <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <Modal />
            </div>
          </div>
        </div>

        <div className="product-content mt-3">
          <div className="custom-title px-4 d-flex align-items-center text-left">
            <span className="col-3">Product</span>
            <span className="col-2">Original</span>
            <span className="col-1">Discount</span>
            <span className="col-1">Size</span>
            <span className="col-1">Color</span>
            <span className="col-2">Inventory</span>
            <span className="col-1">Status</span>
          </div>
          <Mauris />
          <Curabitur />
          <Lobo />
        </div>
      </div>
    )
  }
}

export default PageProduct