import logo from './components/img/logo.png';
import './App.css';
import NavbarMenu  from './components/NavBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className='logo' src={logo} alt='logo'/> 
      </header>
      <NavbarMenu/>
    </div>
  );
}

export default App;
