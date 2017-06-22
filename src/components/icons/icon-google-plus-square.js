import React, {Component} from 'react';

class IconGooglePlusSquare extends Component {
  render(){
    return (
      <svg className="linkedin-square" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28">
          <title>google-plus-square</title>
          <path fill={this.props.iconfill} d="M14.328 14.141c0-0.391-0.047-0.703-0.094-1h-5.656v2.063h3.391c-0.125 0.875-1.016 2.578-3.391 2.578-2.063 0-3.734-1.687-3.734-3.781s1.672-3.781 3.734-3.781c1.156 0 1.937 0.484 2.391 0.922l1.625-1.578c-1.047-0.969-2.406-1.563-4.016-1.563-3.328 0-6 2.688-6 6s2.672 6 6 6c3.453 0 5.75-2.438 5.75-5.859zM19.719 14.859h1.703v-1.719h-1.703v-1.719h-1.719v1.719h-1.719v1.719h1.719v1.719h1.719v-1.719zM24 6.5v15c0 2.484-2.016 4.5-4.5 4.5h-15c-2.484 0-4.5-2.016-4.5-4.5v-15c0-2.484 2.016-4.5 4.5-4.5h15c2.484 0 4.5 2.016 4.5 4.5z"></path>
        </svg>
    )
  }
}

IconGooglePlusSquare.propTypes = {
  iconfill: React.PropTypes.string
}
IconGooglePlusSquare.defaultProps = {
  iconfill: '#000'
}

export default IconGooglePlusSquare
