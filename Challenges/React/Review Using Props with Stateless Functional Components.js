class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// change code below this line
 class Camper extends React.Component {
   constructor(props) {
     super(props);
   }
   render() {
     return (
     <div>
     <h1>Welcome to Free Code Camp!</h1>
     <p>{this.props.name}</p>
     </div>
     );
   }
 }
 Camper.defaultProps = {
   name: 'CamperBot'
 }

Camper.propTypes = {
  name: PropTypes.string.isRequired
}
