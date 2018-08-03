import React from 'react'

import './Modal.css'

class Modal extends React.Component{
  render(){
    return(
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title my-auto" id="exampleModalLabel">ADD NEW PRODUCT</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" style={{ color: "#ffffff"}}>&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="row">
          	<div className="upload col ml-4 d-flex flex-column justify-content-center text-center">
          		<i class="fas fa-cloud-upload-alt fa-5x mx-auto d-block" style={{ color: "#757575" }}></i>
          		<br/>
          		<span className="">Drag an image or click here to upload…</span>
          	</div>

          	<div className="col ml-4 mr-3">
          		<span className="title">Production Title</span><br/>
          		<input className="form-control my-3" type="text" placeholder="Title" />
          		<textarea className="form-control mb-3" placeholder="Description" rows="6"></textarea>

          		<span className="title">Price</span><br/>
          		<div className="row mb-2">
	          		<div className="col">
		          		<div className="input-group mb-3">
									  <div className="input-group-prepend">
									    <span className="input-group-text">Original</span>
									  </div>
									  <input type="text" className="form-control" />
									</div>
								</div>
								<div className="col">
		          		<div className="input-group mb-3">
									  <div className="input-group-prepend">
									    <span className="input-group-text">Discount</span>
									  </div>
									  <input type="text" className="form-control" />
									</div>
								</div>
							</div>

          		<span className="title">Specification</span><br/>
          		<div className="row mb-2">
	          		<div className="col">
		          		<div className="input-group mb-3">
									  <div className="input-group-prepend">
									    <span className="input-group-text">Size</span>
									  </div>
								  	<select class="form-control">
							        <option selected>L</option>
							        <option>M</option>
							        <option>S</option>
						      	</select>
									</div>
								</div>
								<div className="col">
		          		<div className="input-group mb-3">
									  <div className="input-group-prepend">
									    <span className="input-group-text">Color</span>
									  </div>
									  <input type="text" className="form-control" />
									</div>
								</div>
								<div className="col">
		          		<div className="input-group mb-3">
									  <div className="input-group-prepend">
									    <span className="input-group-text">Inventory</span>
									  </div>
									  <input type="text" className="form-control" />
									</div>
								</div>
							</div>

							<button className="btn w-100 mx-auto mb-5 row new-spec">
								ADD NEW SPECIFICATION
								<i className="fas fa-plus px-2"></i>
							</button>

	           	<div className="row d-flex justify-content-end mt-3">
				        <button type="button" className="btn save mx-3" data-dismiss="modal">SAVE DRAFT</button>
				        <button type="button" className="btn publish mx-3" data-dismiss="modal">PUBLISH</button>
				      </div>
           	</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal