import { useState } from 'react';
import Container from '@mui/material/Container';
import './App.css';

import { Timer } from './components/Timer';
import { GnomeHole } from './components/GnomeHole';

function App() {

  const [timerFinished, setTimerFinished] = useState(false);

  return (
    <Container className="App">
      <GnomeHole 
        timerFinished={timerFinished}
        gnomeDirectories={[]}
        audible={false}
        gnomeChance={10}
      />
      <Timer 
        timerLength={30}
        timerTrigger={function () {
          console.debug("Timer's Done")
          setTimerFinished(true);
        }}
      />
    </Container>
  );
}

export default App;
