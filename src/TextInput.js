import "./TextInput.css"
import react from "react";

class TextInput extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
          text: ""
        }
    }

    send = () => {
        let messageData = {
            text: this.state.text,
            user: "jpwall",
            timestamp: new Date().getTime()
        }
        this.props.sendMessage(messageData)
        //this.setState({text:""})
        this.state.text = ""
    }
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