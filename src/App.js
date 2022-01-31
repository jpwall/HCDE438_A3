import react, { useState } from "react"
import './App.css';
import TextInput from './TextInput'
import Messages from './Messages'

class App extends react.Component {
  constructor(props) {
    super(props);
    // Construct state to store messages and username
    this.state = {
      messages: [],
      user: "jpwall"
    };
  }
  // Handle message from TextInput (callback)
  newMessage = (message) => {
    // Store current list of messages
    let toUpdate = this.state.messages
    // Add new message
    toUpdate.push(message)
    // Update the state
    this.setState({messages: toUpdate})
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
