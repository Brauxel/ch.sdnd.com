import React, {Component} from 'react';
import axios from 'axios';
import Parser from 'html-react-parser';
import styles from './post-list.css';
import PostPreview from '../post-preview/post-preview';

class PostList extends Component {

  constructor(props){
    super(props);
    this.state = { "posts" : [], total: 0, pages: 0 }

    let url = "http://staging.catalysthunter.com/wp-json/wp/v2/posts";
    
    if(typeof this.props.params.categoryID !== "undefined"){
      url = 'https://catalysthunter.com/wp-json/wp/v2/posts?categories=' + this.props.params.categoryID;
    }

    this.getPosts(url);
  }

  getPosts(url){

    let posts = {}, total = 0, pages = 0;
    let _this = this;

    axios.get(url).then(function(response) {
      posts = response.data;
      total = parseInt(response.headers['x-wp-total']);
      pages = parseInt(response.headers['x-wp-totalpages']);

      _this.setState({posts: posts, total: total, pages: pages});
    });

  }

  componentWillReceiveProps(nextProps, nextState){
    if(this.props.params.categoryID !== nextProps.params.categoryID){

      let url = "";
      let nextCat = nextProps.params.categoryID;

      if(typeof nextCat === 'undefined'){
        url = "https://catalysthunter.com/wp-json/wp/v2/posts";
      }else{
        url = 'https://catalysthunter.com/wp-json/wp/v2/posts?categories=' + nextCat;
      }

      this.getPosts(url);

    }
  }

  render(){

    return (
      <div>
        <ul className={styles["post-list"]}>
          {this.state.posts.map(
            (post) => {
              return (
                <li className={styles["list-item"]} key={post.id}>
                  <PostPreview data={post} />
                </li>
              )
            }
          )}
        </ul>

      </div>
    );
  }
}

export default PostList
