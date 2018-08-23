import React from 'react'

import Website from '../Components/Website'
import Order from '../Components/Order'
import DrawChart from '../Components/DrawChart'
import './Home.css'

class Home extends React.Component{
  render(){
    return(
      <div className="whole-page">
        <div className='row overview'>
          OVERVIEW
          <div className="home-time col align-self-end">
          	2018/6/6 
          	<i className="fas fa-caret-right px-2"></i> 
          	2018/6/13 
          	<span className="pl-4">
          		Weekly
          		<i className="fas fa-caret-down px-2"></i>
          	</span>
          </div>
        </div>
        <div className="row-2 row d-flex justify-content-center">
        	<div className="top-block d-flex align-items-center">
        		<div className="col">
	        		<h5 className="d-flex justify-content-center">TOTAL REVENUE</h5>
	        		<div className="number-green d-flex justify-content-center">54,540</div>
        		</div>
        	</div>
        	<div className="top-block d-flex align-items-center">
        		<div className="col">
	        		<h5 className="d-flex justify-content-center">TOTAL COST</h5>
	        		<div className="number-red d-flex justify-content-center">12,660</div>
        		</div>
        	</div>
					<div className="top-block d-flex align-items-center">
					<div className="col">
	        		<h5 className="d-flex justify-content-center">NEW INCOME</h5>
	        		<div className="number-blue d-flex justify-content-center">41,880</div>
        		</div>
        	</div>
        </div>
        
        <div className="row-3 row d-flex justify-content-center">
        	<div className="middle-block">
        		<div className="activity">Activity</div>
            <DrawChart />
        	</div>
        </div>
        
        <div className="row-4 row d-flex justify-content-center">
        	<div className="bottom-block">
        		<div className="transaction">Transaction Website</div>
        		<Website />
        		<hr />
        	</div>
        	<div className="bottom-block">
        		<div className="latest">Latest Orders</div>
        		<Order />
        		<hr />
        	</div>
        </div>
      </div>
    )
  }
}

export default Home