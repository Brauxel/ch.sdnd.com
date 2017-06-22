import React, {Component} from 'react';

class IconChevronRight extends Component {
  render(){
    return (
      <svg className="chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28">
        <title>chevron-right</title>
        <path fill={this.props.iconfill} d="M17.297 13.703l-11.594 11.594c-0.391 0.391-1.016 0.391-1.406 0l-2.594-2.594c-0.391-0.391-0.391-1.016 0-1.406l8.297-8.297-8.297-8.297c-0.391-0.391-0.391-1.016 0-1.406l2.594-2.594c0.391-0.391 1.016-0.391 1.406 0l11.594 11.594c0.391 0.391 0.391 1.016 0 1.406z"></path>
      </svg>
    )
  }
}

IconChevronRight.propTypes = {
  iconfill: React.PropTypes.string
}
IconChevronRight.defaultProps = {
  iconfill: '#000'
}

export default IconChevronRight
