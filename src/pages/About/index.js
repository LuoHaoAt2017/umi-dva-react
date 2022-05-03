import React from 'react';
import { Link } from 'umi';
import styles from './index.css';

export default function About() {
  return (
    <div>
      <h1 className={styles.title}>Page About</h1>
      <Link to="/home">Go to Home</Link>
    </div>
  );
}
