import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login';
import { useStateValue } from './StateProvider';
// import Post from './Post';
// import Col from "react-bootstrap/Col"

// let counter = document.querySelector(".counter");

// ThumbUpTwoToneIcon.addEventListener('click', addCounter);

function App() {
  const [{user}, dispatch] = useStateValue();   {/*,counters,changeCounters*/}



/*   const generateCounters = () => {
    return counters.map( (v) => (
      <Post 
      postId={v.id}
      postName= {"Post" + v.id}
      incrementHandler = {() => incrementCounter(v.id,true)} 
      />))};
  
  const incrementCounter = (theid,arg) => {
    const updated = counters.map ( (value) => {
      if(value.id == theid){
        if(arg) {
          return {id:theid, startsAt: value.startsAt, count: value.count + 1}
        } else {
          return {id:theid, startsAt: 0, count:0}
        }
      }
      return value;
    })
    changeCounters(updated)
  } */

  return (
    <div className="app">
      {/* <Col>{generateCounters()}</Col> */}
      {!user ? (
      <Login />
      ) : (                             //Sibling components
        <>
      <Header />

    <div className="app__body">
      <Sidebar />
      <Feed />
    </div>
    </>
      )}
    </div>
  );
}

export default App;
