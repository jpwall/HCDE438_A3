import react from 'react'
import './App.css';
import TextInput from './TextInput'
import Messages from './Messages'
import Camera from 'react-snap-pic'

class App extends react.Component {
  constructor(props) {
    super(props);
    // Construct state to store messages and username
    this.state = {
      messages: [],
      user: "jpwall",
      showCamera: false
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

  // function to turn on camera
  toggleCamera = () => {
    this.setState({showCamera:true})
  }

  // function to log the image taken and turn it off
  takePicture = (img) => {
    console.log(img)
    this.setState({showCamera:false})
  }

  render() {
    return <div className="App">
      <header className="header">
        <div class="nul">␀</div> <div class="title">Chat</div>
      </header>
      <Messages messages={this.state.messages} user={this.state.user}/>
      <div class="footer">
        <TextInput sendMessage={this.newMessage} showCamera={this.toggleCamera}/>
        {this.state.showCamera && <Camera takePicture={this.takePicture}/>}
      </div>
    </div>
  };
}

export default App;
