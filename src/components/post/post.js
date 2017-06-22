import React, {Component} from 'react';
import axios from 'axios';
import Parser from 'html-react-parser';
import { Link } from 'react-router';

import styles from './post.css';

class Post extends Component {
  constructor(props){
    super(props);

    let _this = this;
    let post = {};
    let postUrl = 'https://catalysthunter.com/wp-json/wp/v2/posts?slug='+this.props.params.slug;

    this.state = { "post" : { title: { rendered: "" }, content: { rendered: ""}, author_name: "", categoryID: 0, category_name: ""}}

    axios.get(postUrl).then(function(response) {
      post = response.data;
      _this.setState({post: post[0]});

      _this.getAuthorName();
      _this.getCategoryName();
    });
  }

  getAuthorName(){
    let _this = this;
    let author_name = axios.get('https://catalysthunter.com/wp-json/wp/v2/users/' + this.state.post.author).then(function(response) {
      let author = response.data.name;
      let post = _this.state.post;
      post.author_name = author;
      _this.setState( {"post": post} )
    });  
  }

  getCategoryName(){
    let _this = this;
    let category_name = axios.get('https://catalysthunter.com/wp-json/wp/v2/categories?post=' + this.state.post.id).then(function(response) {
      let categoryID = response.data[0].id;
      let category = response.data[0].name;
      let post = _this.state.post;
      post.categoryID = categoryID;
      post.category_name = category;
      _this.setState( {"post": post} )
    });
  }

  render(){
    //console.log(this.state);

    let postDate = this.state.post.date;
    let prettyDate = new Date(postDate).toLocaleString();
    prettyDate = prettyDate.split(' ')[0];
    prettyDate = prettyDate.substr(0,prettyDate.length-1).replace(/\//ig, '-');

    return (
      <article className={styles.post}>
        <header className={styles.header}>
          <h2 className={styles.h2}>{this.state.post.title.rendered}</h2>
          <aside className={styles.aside}>{this.state.post.author_name} / {prettyDate} / <Link to={"/category/" + this.state.post.categoryID}>{this.state.post.category_name}</Link></aside>
        </header>
        <main className={styles.main}>
          {Parser(this.state.post.content.rendered)}
        </main>
      </article>
    );
  }
}

export default Post
