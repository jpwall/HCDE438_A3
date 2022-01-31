import react, { useState } from "react"
import './App.css';
import TextInput from './TextInput'
import Messages from './Messages'

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      user: "jpwall"
    };
  }
  newMessage = (message) => {
    let toUpdate = this.state.messages
    toUpdate.push(message)
    this.setState({messages: toUpdate})
    console.log(toUpdate)
  }
  render() {
    return <div className="App">
      <header className="header">
        <div class="nul">␀</div> <div class="title">Chat</div>
      </header>
      <Messages messages={this.state.messages} user={this.state.user}/>
      <div class="footer">
        <TextInput sendMessage={this.newMessage}/>
      </div>
    </div>
  };
}

export default App;
