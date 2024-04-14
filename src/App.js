import logo from './logo.svg';
import './App.css';
import "./myStyle.css";
import Header from './components/Header';
import Title from "./components/Title";
import Card from './components/Card';
import { BsBagPlusFill } from "react-icons/bs";
import Button from './components/Button';
import { click } from '@testing-library/user-event/dist/click';
import { IoOpenSharp } from "react-icons/io5";


function App() {
  const h1Style = {
    color:"blue",
  };

const log = () => {
  console.log("App");
}

const sendMess = () => {
  window.alert("Message sent")
}

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1 style={{color:"red",fontSize:"45px"}}>My first app</h1> */}
        {/* <h1 style={h1Style}>My first app</h1> */}
        {/* <h1 className="my-title">My first app</h1> */}
        {/* <Title> */}
        <Title/>
      
        <Card cardHeader={"React Course"} cardText={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, tempore!"}>
        <Button classes={"btn-primary btn-sm"}
         text="View"
         icon={<IoOpenSharp color="red" style={{fontSize: "1rem"}}/>}>
         </Button>
        </Card>
        <Card cardHeader={"My card"} cardText={"Lorem, ipsum dolor sit amet cons"} background="#f311">
         {/* <button>Run</button> */}
         {/* <BsBagPlusFill style={{fontSize:"2.5rem", color:"red"}}/> */}
         <Button classes={"btn-primary btn-block"} 
         text='Run'
         handleEvent={sendMess}>
          <IoOpenSharp />
         </Button>
        </Card>

        {/* 
        <Header headerText="Component with children">
          <Title/>
          <button>Start</button>
          <button>Stop</button>
        </Header> */}


        <a
          className="App-link"
          href="https://sambhavpatil.github.io/Sambhav-Patil-website/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sambhav Patil
        </a>
      </header>
    </div>
  );
}

export default App;
