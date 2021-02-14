import styled from 'styled-components'
import { LogoIcon } from '@pancakeswap-libs/uikit'
import './App.css';

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 152px);
  justify-content: center;
  text-align: center;
`

function App() {
  return (
    <div className="App">
          <StyledNotFound>
              <LogoIcon width="64px" mb="8px" />
          </StyledNotFound>
    </div>
  );
}

export default App;
