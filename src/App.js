import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './Components/Nav'
import Home from './Pages/Home'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={ Nav } />
          <Switch>
            <Route exact path='/' component={ Home } />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
