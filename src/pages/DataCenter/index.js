import React from 'react';
import styles from './index.css';

export default function DataCenter(props) {
  return (
    <div>
      <h1 className={styles.title}>DataCenter</h1>
      {props.children}
    </div>
  );
}
