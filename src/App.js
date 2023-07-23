import './App.css';
import { useContext } from 'react';
import Button from './components/Button'
import SetUp from './components/SetUp'
import PunchLine from './components/PunchLine';

function App() {

  return (
    <div className="App">
      <h1>What Are You Feeling?</h1>
      <div className="buttonContainer">
        <Button feeling="Normal" type='general'/>
        <Button feeling="Nerdy" type='programming'/>
      </div>

      <SetUp />
      <PunchLine />

    </div>
  );
}

export default App;
