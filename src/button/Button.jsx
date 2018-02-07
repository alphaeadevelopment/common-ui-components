import React from 'react';
import styles from './Button.scss';

export default ({ children, onClick }) => (
  <div role={'button'} tabIndex={0} className={styles.button} onClick={onClick}>{children}</div>
)
