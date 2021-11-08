import React from "react";
import './App.css';

class App extends React.Component
{
  state ={
    pcontainer:false
  }
 render()
 {
   var handlechange =e=>
   {
     this.setState({pcontainer:!this.state.pcontainer});
   }

   const x=this.state.pcontainer;
  return (
    <div>
      <button id='click' onClick={handlechange}>{x?'Hide':'show'}</button>
      {
        x &&( <p id='para'> Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)
      }
    </div>
  );
}
}

export default App;
