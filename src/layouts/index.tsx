import Header from '@/components/header';
import Footer from '@/components/footer';
import styles from './index.less';

export default function App(props: any) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
