class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // add handleChange() and submitMessage() methods here
  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  submitMessage() {
    this.setState({
      messages: [...this.state.messages, this.state.input],
      input: ''
    });
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
        <input
          value={this.state.input}
          onChange={this.handleChange.bind(this)}
        />
        <button
          onClick={this.submitMessage.bind(this)}
        >Add message</button>
        <ul>
          {this.state.messages.map((n)=><li>{n}</li>)}
        </ul>
        { /* change code above this line */ }
      </div>
    );
  }
};
