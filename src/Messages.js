import react from 'react'
import "./Messages.css"

class Messages extends react.Component {
    // Utilize props for messages and current user, including a greeting
    // Use Array.map to iterate through the messages and render them individually
    msgs = () => {return this.props.messages.sort((a, b) => (a.time > b.time) ? 1 : -1)}
    render() {
        return <div class="messages">
            <div class="message">
                Welcome, {this.props.user}
            </div>
            {this.msgs().map((message, index) => (
            <div class="message">
                <div class="user" name={index}>{message.user}: </div>{message.text}
            </div>
            ))}
        </div>
    }
}

export default Messages