import styles from './index.less';

export default function About(props) {
  return (
    <div className={styles.container}>
      About
      {props.children}
    </div>
  );
}
