import logo from './logo.svg';
import './App.css';
import './profile.css';

export default function App() {
  return (
    <div>
      <h1>Welcome to my Learning App</h1>
      <MyButton />
      <br />
      <button class="btn-primary" style={{margin: "70px"}}>Login Experience</button>
      <Profile />
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

const user = {
  name: 'Heady Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
  return(
    <>
      <h2>{user.name}</h2>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
