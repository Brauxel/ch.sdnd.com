import React, {Component} from 'react';
import { Link } from 'react-router';
import styles from './header.css';

class Header extends Component {
  render(){
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <Link to="/"><h1 className={styles.h1}>Catalyst Hunter</h1></Link>
        </div>
      </header>
    );
  }
}

export default Header
