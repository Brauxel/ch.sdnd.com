import React, {Component} from 'react';
import { Link } from 'react-router';

import styles from './footer.css';

import IconFacebookSquare from '../icons/icon-facebook-square';
import IconTwitterSquare from '../icons/icon-twitter-square';
import IconLinkedInSquare from '../icons/icon-linkedIn-square';
import IconGooglePlusSquare from '../icons/icon-google-plus-square';

class Footer extends Component {
  render(){
    return (
      <footer className={styles.footer}>
        <div className={styles.social}>
          <ul className={styles.list}>
            <li className={styles["list-item"]}><a href="https://www.facebook.com/CatalystHunter" className={styles.facebook}><IconFacebookSquare iconfill="#fff"/></a></li>
            <li className={styles["list-item"]}><a href="https://www.twitter.com/catalyst_hunter" className={styles.twitter}><IconTwitterSquare iconfill="#fff"/></a></li>
            <li className={styles["list-item"]}><a href="https://plus.google.com/+CatalystHunter" className={styles.googleplus}><IconGooglePlusSquare iconfill="#fff"/></a></li>
            <li className={styles["list-item"]}><a href="https://www.linkedin.com/company/4798579" className={styles.linkedin}><IconLinkedInSquare iconfill="#fff"/></a></li>
          </ul>
        </div>
        <div className={styles.menu}>
          <ul className={styles.list}>
            <li className={styles["list-item"]}><Link to="/page/customer-notice">Customer Notice</Link></li>
            <li className={styles["list-item"]}><Link to="/page/privacy-policy">Privacy Policy</Link></li>
            <li className={styles["list-item"]}><Link to="/page/financial-services-guide">Financial Services Guide</Link></li>
            <li className={styles["list-item"]}><Link to="/page/disclosure-policy">Disclosure Policy</Link></li>
            <li className={styles["list-item"]}><Link to="/page/contact">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.copy}>
          <p>&copy; 2016 Catalyst Hunter. All Rights Reserved.</p>
          <p>The information in this website is general information only. Any advice is general advice only. Your personal objectives, financial situation or needs have not been taken into consideration. Accordingly you should consider how appropriate the advice (if any) is to those objectives, financial situation and needs, before acting on the advice. S3 Consortium Pty Ltd (CAR No.433913) is a corporate authorised representative of Longhou Capital Markets Pty Ltd (AFSL No. 292464).</p>
        </div>
      </footer>
    );
  }
}

export default Footer






