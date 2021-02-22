import React from 'react'
import {Route, Switch}  from 'react-router-dom'

const App = () => {
  return(
    <Switch>
    <Route exact path='/' component={Currencies}/>
    <Route exact path='/Currencies/:slug' component={Currency}/>
    </Switch>
    )
}

export default App
