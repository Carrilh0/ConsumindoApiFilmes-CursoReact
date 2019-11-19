import React, {Component} from 'react';
import Routes from './routes';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <div>
         <Routes/>
      </div>
    );
  }
}

export default App;