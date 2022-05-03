import React from 'react';
import styles from './index.css';

export default function Integrated(props) {
  return (
    <div>
      <h1 className={styles.title}>Integrated</h1>
      {props.children}
    </div>
  );
}
