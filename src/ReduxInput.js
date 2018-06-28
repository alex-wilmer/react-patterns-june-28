import React from 'react'

import { connect } from 'react-redux'

let Input = props =>
  <input onChange={event =>
    props.dispatch({
      type: 'CHANGE',
      payload: event.target.value
    })
  } />

export default connect()(Input)
