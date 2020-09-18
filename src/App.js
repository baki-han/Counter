import React, {useState} from 'react';
import Top from "./components/Top";
import Counter from "./components/Counter";

function App() {

    const [box, setBox] = useState([]);
    // ADD BOX
    const addCounter = () =>{
        let a = [...box];
        a.push(0);
        setBox(a);
    }

    // REMOVE BOX
    const removeCounter = () =>{
        let arr2 = [...box];
        arr2.pop();
        setBox(arr2);
    }

    const addOne = (index) =>{
        const arr = [...box];
        arr[index] += 1;
        setBox(arr);
    }
    const minusOne = (index) =>{
        const arr = [...box];
        arr[index] -= 1;
        setBox(arr);
    }

    const setToZero = (index) =>{
        const arr = [...box];
        arr[index] = 0;
        setBox(arr);
    }

    const removeBox = (index)=>{
        const a = [...box];
        setBox(a.filter((el, i) => index !== i));
    }

    return (
    <div className="container" >
     <Top onClick={addCounter} onClick2={() => box.length > 0 ? removeCounter() : alert('Empty')}/>
     <Counter box={box} key={Math.random()} addOne={addOne} minusOne={minusOne} setToZero={setToZero} removeBox={removeBox}/>
    </div>
  );
}

export default App;
