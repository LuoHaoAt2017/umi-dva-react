import React from 'react';
import { Link } from 'umi';
import styles from './index.css';

export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Link to="/home">Go to Home</Link>
    </div>
  );
}
