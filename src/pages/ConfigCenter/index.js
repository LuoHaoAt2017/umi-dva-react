import React from 'react';
import styles from './index.css';

export default function ConfigCenter(props) {
  return (
    <div>
      <h1 className={styles.title}>ConfigCenter</h1>
      {props.children}
    </div>
  );
}
