import React, {Component} from 'react';
import Parser from 'html-react-parser';
import axios from 'axios';
import { Link } from 'react-router';

import PreviewImage from '../preview-image/preview-image';
import styles from './post-preview.css';

class PostPreview extends Component {
  constructor(props){
    super(props);

    this.state = { author_name: "", categoryID: 0, category_name: "" };

    let _this = this;
    let author_name = axios.get('http://catalysthunter.com/wp-json/wp/v2/users/' + this.props.data.author).then(function(response) {
      let author = response.data.name;
      _this.setState({author_name: author})
    });

    let category_name = axios.get('http://catalysthunter.com/wp-json/wp/v2/categories?post=' + this.props.data.id).then(function(response) {
      let categoryID = response.data[0].id;
      let category = response.data[0].name;
      _this.setState({categoryID: categoryID, category_name: category})
    });
  }

  render(){

    let postDate = this.props.data.date;
    let prettyDate = new Date(postDate).toLocaleString();
    prettyDate = prettyDate.split(' ')[0];
    prettyDate = prettyDate.substr(0,prettyDate.length-1).replace(/\//ig, '-');;

    return (
      <article className={styles.post}>
        <header className={styles.header}>
          <h2 className={styles.h2}>
            <Link className={styles.anchor} to={"/post/" + this.props.data.slug}>
              {this.props.data.title.rendered}
            </Link>
          </h2>
          <aside className={styles.aide}>{this.state.author_name} / {prettyDate} / <Link to={"/category/" + this.state.categoryID}>{this.state.category_name}</Link></aside>
        </header>
        <main className={styles.main}>
          <Link className={styles.anchor} to={"/post/" + this.props.data.slug}>
            <PreviewImage mediaId={this.props.data.featured_media} />
          </Link>
          {Parser(this.props.data.excerpt.rendered)}
        </main>
      </article>
    );
  }
}

export default PostPreview
