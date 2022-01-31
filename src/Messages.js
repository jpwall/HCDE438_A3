import react from 'react'
import "./Messages.css"

class Messages extends react.Component {
    // Utilize props for messages and current user, including a greeting
    // Use Array.map to iterate through the messages and render them individually
    render() {
        return <div class="messages">
            <div class="message">
                Welcome, {this.props.user}
            </div>
            {this.props.messages.map((message, index) => (
            <div class="message">
                <div class="user" name={index}>{message.user}: </div>{message.text}
            </div>
            ))}
        </div>
    }
}

export default Messages