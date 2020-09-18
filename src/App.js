import React, {useState} from 'react';
import Top from "./components/Top";
import Counter from "./components/Counter";

function App() {


    let arr = [];
    const [box, setBox] = useState(arr);

    // ADD BOX
    const addCounter = () =>{
        let a = [...box];
        a.push(0);
        setBox(a);
        console.log(box)
    }


    // REMOVE BOX

    const removeCounter = () =>{
        box.pop();
        arr = [...box];
        setBox(arr);
        console.log(box)
    }


  return (
    <div className="container" >
     <Top onClick={addCounter} onClick2={() => box.length > 0 ? removeCounter() : alert('Empty')}/>
     <Counter box={box} key={Math.random()}/>
    </div>
  );
}

export default App;
