import React, {Component} from "react"
import {Router, Link} from "@reach/router"
import Input from './ReduxInput'
import Title from './ReduxTitle'

let Navigation = props => (
  <div>
    <h1>{props.children()}</h1>
    <Link to="page1">Page1</Link> |
    <Link to="page2">Page2</Link> |
    <Link to="page4">Page4</Link>
    <Link to="images">images</Link>
    <Link to="title">title</Link>
  </div>
)

let Home = () => <h1>welcome home</h1>
let Page1 = () => <h1>page ! hello!</h1>

class Images extends React.Component {
  state = {images: []}

  componentDidMount() {
    fetch("https://www.reddit.com/r/aww/.json")
      .then(response => response.json())
      .then(json => {
        let images = json.data.children.map(child => child.data.thumbnail)

        this.setState({images})
      })
  }

  render() {
    console.log(this.state.images.length)
    return this.props.children(this.state.images)
  }
}

let ImagesView = props => (
  <div>
    <h1>cute images</h1>
    {props.images.map(url => <img key={url} src={url} />)}
  </div>
)

class App extends Component {
  render() {
    return (
      <Images>
        {images => (
          <span>
            <Input />
            <Navigation>
              {() => 'THIS IS HTE NAV'}
            </Navigation>
            <hr />
            <Router>
              <Home path="/" />
              <Page1 path="page1" />
              <ImagesView path="images" images={images} />
              <Title path="title" />
            </Router>
          </span>
        )}
      </Images>
    )
  }
}

export default App
