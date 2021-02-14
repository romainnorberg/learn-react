import logo from './logo.svg';
import { ThemeProvider } from 'styled-components'
import { LogoIcon } from '@pancakeswap-libs/uikit'
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ padding: "32px", width: "400px" }}>
        <LogoIcon />
      </div>
    </div>
  );
}

export default App;
