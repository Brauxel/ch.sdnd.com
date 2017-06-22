import React, {Component} from 'react';
import axios from 'axios';


class PreviewImage extends Component {
  constructor(props){
    super(props);
    this.state = { image_src : "", width: 0, height: 0, alt: "", sizes: {} }
  }

  componentDidMount(){
    let _this = this;
    let posts = {};

    axios.get('https://sdnewsdesk.com/wp-json/wp/v2/media/' + this.props.mediaId).then(function(response) {
      _this.setState({image_src: response.data.source_url, width: response.data.media_details.width, height: response.data.media_details.height, alt: response.data.alt_text, sizes: response.data.media_details.sizes })
    });
  }

  render(){
    let srcSet = "";
    let srcSizes = this.state.sizes;
    let sizes = "";
    let maxWidth = 0;
    if(Object.keys(srcSizes).length !== 0){
      Object.keys(srcSizes).map(function(key) {
        if(srcSizes[key].width > maxWidth){
          maxWidth = srcSizes[key].width;
        }
        if(srcSet !== ""){
          srcSet += ", "
        }
        srcSet += srcSizes[key].source_url + " " + srcSizes[key].width + "w";
      });

      sizes = '(max-width:' + maxWidth + 'px) 100vw';
    }

    return (
      <img src={this.state.image_src} width={this.state.width} height={this.state.height} alt={this.state.alt} srcSet={srcSet} sizes={sizes} />
    );
  }
};

PreviewImage.propTypes = {
  mediaId: React.PropTypes.number.isRequired
}
PreviewImage.defaultProps = {
  mediaId: 0
}

export default PreviewImage
