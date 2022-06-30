import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function App(props: any) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
