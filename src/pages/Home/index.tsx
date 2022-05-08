import styles from './index.less';
import Logo from '@/assets/home.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={Logo} alt="logo"></img>
    </div>
  );
}
