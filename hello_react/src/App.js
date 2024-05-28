import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <About></About>
    </div>
  );
}

function MyButton() {
  return(
    <button>I'm a button</button>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </div>
  );
}

export default App;
