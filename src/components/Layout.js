import React, {Component} from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

import styles from './layout.css';

import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import Footer from './footer/footer';

class Layout extends Component {
  render(){
    const { main, sidebar } = this.props;
    return (
      <div>
        <Helmet title="Catalyst Hunter" />
        <Header />

        <div className={styles.bodybag}>
          <main className={styles.main}>
            {main || this.props.children}
          </main>
          <aside className={styles.sidebar}>
            {sidebar || <Sidebar />}
          </aside>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Layout
