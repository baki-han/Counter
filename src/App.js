import React, {useState} from 'react';
import Top from "./components/Top";
import Counter from "./components/Counter";

function App() {


    let arr = [];
    const [count, setCount] = useState(0)
    const [box, setBox] = useState(arr);


    // ADD BOX
    const updateCount = () =>{
        for(let i = arr.length; i <= count; i++){
            arr.push(0);
        }
        setCount(count + 1)
    }

    const updateBox = () =>{
       setBox(arr)
    }

    function appendBox(){
        updateCount();
        updateBox();
    }


    // REMOVE BOX

    const removeCounter = () =>{
        box.pop();
        arr = [...box];
        setBox(arr);
        setCount(count - 1);
        console.log(box)
    }


  return (
    <div className="container" >
     <Top onClick={appendBox} onClick2={() => box.length > 0 ? removeCounter() : alert('Empty')}/>

     <Counter box={box} key={Math.random()}/>
    </div>
  );
}

export default App;
