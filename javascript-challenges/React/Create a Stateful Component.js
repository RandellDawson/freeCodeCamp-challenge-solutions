class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here
    this.state = {name: 'Randell'};

  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
