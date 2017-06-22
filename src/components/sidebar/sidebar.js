import React, {Component} from 'react';

import styles from './sidebar.css';

import IconChevronRight from '../icons/icon-chevron-right';

class Sidebar extends Component {
  render(){
    return (
      <div className={styles.sidebar}>
        <div className={styles.subscribe}>
          <h4 className={styles.h4}><IconChevronRight iconfill="#9bbb58" />Subscribe to Alerts</h4>
          <div>
            <p className={styles.paragraph}>Get Catalyst Alerts sent straight your inbox</p>
            <form>
              <input type="email" name="email" placeholder="Your Email *" className={styles.control} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar
