import React, {Component} from 'react';

class IconFacebookSquare extends Component {
  render(){
    return (
      <svg className="facebook-square" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28">
          <title id="title">facebook-square</title>
          <path fill={this.props.iconfill} d="M19.5 2c2.484 0 4.5 2.016 4.5 4.5v15c0 2.484-2.016 4.5-4.5 4.5h-2.938v-9.297h3.109l0.469-3.625h-3.578v-2.312c0-1.047 0.281-1.75 1.797-1.75l1.906-0.016v-3.234c-0.328-0.047-1.469-0.141-2.781-0.141-2.766 0-4.672 1.687-4.672 4.781v2.672h-3.125v3.625h3.125v9.297h-8.313c-2.484 0-4.5-2.016-4.5-4.5v-15c0-2.484 2.016-4.5 4.5-4.5h15z"></path>
        </svg>
    )
  }
}

IconFacebookSquare.propTypes = {
  iconfill: React.PropTypes.string
}
IconFacebookSquare.defaultProps = {
  iconfill: '#000'
}

export default IconFacebookSquare