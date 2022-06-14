import React from 'react';
import classNames from 'classnames';
import styles from "./index.less"

const GlobalFooter = ({ className, children }) => {
  const clsString = classNames(styles.globalFooter, className);
  console.log(styles.globalFooter);
  return (
    <footer className='globalFooter'>
      {children}
      {/* {copyright && <div className={styles.copyright}>{copyright}</div>} */}
    </footer>
  );
};

export default GlobalFooter;
