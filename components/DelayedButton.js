const React = require('react')
class DelayedButton extends React.Component{
  clickEd(event){
    event.persist()
    setTimeout(this.props.onDelayedClick(event).bind(this), this.props.delay)
  }
  render(){
    return(
      <button onClick={this.clickEd.bind(this)} />
    )
  }
}
module.exports = DelayedButton
