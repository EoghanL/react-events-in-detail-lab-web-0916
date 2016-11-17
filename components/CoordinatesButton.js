const React = require('react')
class CoordinatesButton extends React.Component{
  constructor(props){
    super(props)
    this.createArray = this.createArray.bind(this)
  }
  createArray(event){
    let x = event.clientX;
    let y = event.clientY;
    this.props.onReceiveCoordinates([x,y])
  }
  render(){
    return(
      <button onClick={this.createArray.bind(this)} />
    );
  }
}
module.exports = CoordinatesButton
