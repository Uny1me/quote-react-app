import './App.css';
import QuoteApp from './QuoteApp';

function App() {
  return (

    <header className="App-header d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: "url('https://source.unsplash.com/user/sanketkumbhar/HhGcTPkXBh8')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}>
      <QuoteApp />
    </header>

  );
}

export default App;
