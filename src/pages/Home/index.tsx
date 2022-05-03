import styles from './index.less';

export default function Home(props) {
  return <div className={styles.container}>{props.children}</div>;
}
