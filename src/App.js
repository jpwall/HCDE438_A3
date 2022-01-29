import './App.css';

function App() {
  return (
    <div className="App">
      <header class="header">
        <div class="nul">␀</div> <div class="title">Chat</div>
      </header>
      <div class="messages">
        <div class="message">
          <div class="user">me: </div>This is my message
        </div>
        <div class="message">
          <div class="user">me: </div>This is my other message
        </div>
      </div>
      <div class="footer">
        <div class="compose">
          <input type="textarea" placeholder="Write your message here..."/>
          <button class="send"></button>
        </div>
      </div>
    </div>
  );
}

export default App;
