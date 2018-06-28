import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let StateCtx = React.createContext()

class StateProvider extends React.Component {
  state = { title: 'contextfoo' }

  setTitle = title => this.setState({ title })

  render() {
    return (
      <StateCtx.Provider value={{
        title: this.state.title,
        setTitle: this.setTitle
      }}>
        {this.props.children}
      </StateCtx.Provider>
    )
  }
}

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById('root')
);
