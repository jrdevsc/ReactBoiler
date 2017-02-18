import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import BasicComponent from './BasicComponent.jsx';

class App extends Component{
  render(){
    return (
      <div>
        <p>Hello, ReactBoiler!</p>
        <BasicComponent />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);
