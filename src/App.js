import './App.css';
import QuoteApp from './QuoteApp';

function App() {
  return (

    <header className="App-header d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: "url('../bg/bg-desktop.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}>
      <QuoteApp />
    </header>

  );
}

export default App;
