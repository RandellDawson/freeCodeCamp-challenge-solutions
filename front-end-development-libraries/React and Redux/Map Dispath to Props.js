const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// change code below this line

const mapDispatchToProps = dispatch => ({
  submitNewMessage: msg => dispatch(addMessage(msg))
});
