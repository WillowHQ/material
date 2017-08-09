import React, { Component } from 'react'
import glamorous from 'glamorous'

import FlatButton from 'material-ui/FlatButton'

const Div = glamorous.div({
  display: 'flex'
})


class App extends Component {
  render() {
    return (
    <Div
    >
      
      <h2>It's my app and I'll cry if I want to</h2>
      <FlatButton label="primary"/>
     </Div> 
    )
  }
}

export default App;
