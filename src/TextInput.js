import "./TextInput.css"
import react from "react";
import { db } from "./db";

class TextInput extends react.Component {
    constructor(props) {
        super(props)
        // Construct state to store the current text input value
        this.state = {
          text: ""
        }
    }

    // Upon enter or clicking button, message is constructed and sent to Firebase
    send = () => {
        // Construct a message object with text contents, user, and timestamp (ms since epoch)
        let messageData = {
            text: this.state.text,
            user: this.props.curUser,
            time: new Date().getTime()
        }
        // Send to Firebase
        db.send(messageData)
        // Reset text input
        this.setState({text: ""})
    }

    // Check for key presses and send if enter is pressed
    onKeyPress = (e) => {
        if (e.key == "Enter") {
            this.send()
        } else {
            this.setState({text:e.target.value})
        }
    }
    render() {
        return <div class="compose">
            <button class="send" onClick={this.props.showCamera}>
                <img src="http://localhost:3000/cam.png"/>
            </button>
            <input type="textarea" value={this.state.text} onChange={(e) => this.setState({text:e.target.value})} onKeyPress={this.onKeyPress} placeholder="Write your message here..."/>
            <button class="send" onClick={this.send}>
                <img src="http://localhost:3000/send.png"/>
            </button>
        </div>
    }
}

export default TextInput