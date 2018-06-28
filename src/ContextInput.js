import React from 'react'
import { StateCtx } from '/'
// import { connect } from 'react-redux'

let Input = props =>
<StateCtx.Consumer>
  {value =>
  <input onChange={event =>
    value.setTitle(event.target.value)
  } />
}
  </StateCtx.Consumer>


export default Input
// export default connect()(Input)
