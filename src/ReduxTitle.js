import React from 'react'
import { connect } from 'react-redux'

let Title = props => <h1>the title is: {props.title}</h1>

let mapStateToProps = state => {
  return {
    title: state + '!!!'
  }
}
export default connect(mapStateToProps)(Title)
