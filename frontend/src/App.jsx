import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './styles/tailwind.css';

function App() {
  return (
    <div className="flex justify-center h-screen">
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
