import React, {Component} from 'react';
import axios from 'axios';
import Parser from 'html-react-parser';

import styles from './page.css';

class Page extends Component {
  constructor(props){
    super(props);

    let _this = this;
    let url = 'https://catalysthunter.com/wp-json/wp/v2/pages?slug='+this.props.params.slug;

    this.state = { "page" : { title: { rendered: "" }, content: { rendered: ""}}}

    this.getPage(url);
  }

  getPage(url){

    let page = {};
    let _this = this;

    axios.get(url).then(function(response) {
      page = response.data;
      _this.setState({page: page[0]})
    });

  }

  componentWillReceiveProps(nextProps, nextState){
    if(this.props.params.slug !== nextProps.params.slug){
      let url = "";
      let nextSlug = nextProps.params.slug;

      if(typeof nextSlug !== 'undefined'){
        url = 'https://catalysthunter.com/wp-json/wp/v2/pages?slug='+nextSlug;
        this.getPage(url);
      }
    }
  }

  render(){
    return (
      <div className={styles.page}>
          <h2>{this.state.page.title.rendered}</h2>
          {Parser(this.state.page.content.rendered)}
      </div>
    );
  }
}

export default Page
