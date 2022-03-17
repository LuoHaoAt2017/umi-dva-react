import React from 'react';
import { Link } from 'umi';
import styles from './home.css';

export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>Page home</h1>
      <Link to="/">Go to Index</Link>
    </div>
  );
}
