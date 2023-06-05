import React from 'react';
import Container from '@mui/material/Container';
import logo from './logo.svg';
import './App.css';

import { Timer } from './components/Timer';
import { Card, CardContent } from '@mui/material';

function App() {
  return (
    <Container className="App">
      <Card>
        <CardContent>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </CardContent>
      </Card>
      <Timer 
        timerLength={30}
        timerTrigger={() => console.warn('onExpire called')}
      />
    </Container>
  );
}

export default App;
