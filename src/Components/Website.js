import React from 'react'
import Tooltip from 'rc-tooltip'
import './Website.css'
import 'rc-tooltip/assets/bootstrap.css'

const text = () => (
  <div className="hover-text text-center mt-2">
    INCREASE <span className="hl-green">899</span> VIEWS 
    <br/>
    <div className="last-week text-center">last week: 44,937</div>
  </div>
);

const styles = {
  display: 'inline',
  height: '60px',
  width: '80px',
  textAlign: 'center',
  background: 'transparent',
  verticalAlign: 'middle'
};

class Website extends React.Component{
  render(){
    return(
      <div className="row d-flex align-items-center">
        <i className="fab fa-facebook fa-3x m-4 pl-5"></i>
        <div className="title px-2">Facebook.com</div>
        <div className="price mx-4 pl-5">45,836</div>
        <div className="m-2 pl-2">
          <Tooltip className="percent" placement="top" overlay={text}>
            <div style={styles}>
              <i className="fas fa-arrow-up m-2"></i>
              20%
            </div>
          </Tooltip>
        </div>
      </div>
    )
  }
}

export default Website