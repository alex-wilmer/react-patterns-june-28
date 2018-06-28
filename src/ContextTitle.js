import React from 'react'
import { StateCtx } from '/'

let Title = props =>
  <StateCtx.Consumer>
    {value =>
      <h1>the title is: {value.title}</h1>
    }
  </StateCtx.Consumer>

export default Title
