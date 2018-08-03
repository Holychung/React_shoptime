import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './Components/Nav'
import Home from './Pages/Home'
import PageOrder from './Pages/PageOrder'
import PageProduct from './Pages/PageProduct'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={Nav} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/order' component={PageOrder} />
            <Route exact path='/product' component={PageProduct} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
