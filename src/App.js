import react from 'react'
import './App.css';
import TextInput from './TextInput'
import Messages from './Messages'
import NamePicker from './NamePicker'
import Camera from 'react-snap-pic'
import DBLoad from './DBLoad' // Wrapper for class-based App.js

class App extends react.Component {
  constructor(props) {
    super(props);
    // Construct state to store messages and username
    this.state = {
      messages: props.otherMessages,
      user: "jpwall",
      showCamera: false
    };
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

  // function to update username when sent from NamePicker
  updateUser = (usr) => {
    this.setState({user:usr})
  }

  render() {
    return <div className="App">
      <header className="header">
        <div className="nulCont">
          <div class="nul">␀</div> <div class="title">Chat</div>
        </div>
        <NamePicker curUser={this.state.user} changeUser={this.updateUser} />
      </header>
      <Messages messages={this.props.otherMessages} user={this.state.user}/>
      <div class="footer">
        <TextInput curUser={this.state.user} sendMessage={this.newMessage} showCamera={this.toggleCamera}/>
        {this.state.showCamera && <Camera takePicture={this.takePicture}/>}
      </div>
    </div>
  };
}

export default DBLoad(App);
