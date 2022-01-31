import "./TextInput.css"
import react from "react";

class TextInput extends react.Component {
    constructor(props) {
        super(props)
        // Construct state to store the current text input value
        this.state = {
          text: ""
        }
    }

    // Upon enter or clicking button, message is constructed and sent to App to be stored in state
    send = () => {
        // Construct a message object with text contents, user, and timestamp (ms since epoch)
        let messageData = {
            text: this.state.text,
            user: "jpwall",
            timestamp: new Date().getTime()
        }
        // Pass to callback handler
        this.props.sendMessage(messageData)
        // Reset text input
        this.state.text = ""
    }

    // Check for key presses and send if enter is pressed
    onKeyPress = (e) => {
        if (e.key == "Enter") {
            this.send()
        } else {
            this.state.text = e.target.value
        }
    }
    render() {
        return <div class="compose">
            <input type="textarea" value={this.state.text} onChange={(e) => this.setState({text:e.target.value})} onKeyPress={this.onKeyPress} placeholder="Write your message here..."/>
            <button class="send" onClick={this.send}></button>
        </div>
    }
}

export default TextInput