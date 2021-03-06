import "./NamePicker.css"
import react from "react";

class NamePicker extends react.Component {
    constructor(props) {
        super(props)
        // Construct state to store the current username
        this.state = {
            isEdit: false,
            name: this.props.curUser
        }
    }

    // Upon enter or clicking button, name is sent to App to be stored in state
    update = () => {
        // Update state and pass to callback handler
        this.setState({isEdit:false}, () => {
            this.props.changeUser(this.state.name)
        })
    }

    // Check for key presses and update if enter is pressed
    onKeyPress = (e) => {
        if (e.key == "Enter") {
            this.update()
            this.setState({isEdit:false})
        }
    }

    render() {
        // Yay for ternary statements!
        return <div>
            {this.state.isEdit ? (
                <div styles="display:flex;flex-direction:row;">
                    <input class="nameEdit" type="text" value={this.state.name} onChange={(e) => this.setState({name:e.target.value})} onKeyPress={this.onKeyPress}/>
                <button class="updName" onClick={this.update}>✓</button>
            </div>
            ) : (
                <button class="nameButton" onClick={(e) => this.setState({isEdit:true})}>{this.state.name} ✎</button>
            )}
        </div>
    }
}

export default NamePicker